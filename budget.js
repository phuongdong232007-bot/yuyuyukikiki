(() => {
  const STORAGE_KEY = "beeso_budget_tx";
  const I18n = window.BeesoI18n;

  const CATEGORY_COLORS = {
    salary: "#7ecf9a",
    food: "#f0c84a",
    transport: "#6bb3e0",
    shopping: "#f5a8c8",
    study: "#a89be8",
    others: "#b0c0d0",
  };

  const CATEGORY_RULES = {
    salary: [
      "luong", "lương", "salary", "wage", "stipend", "hoc bong", "học bổng",
      "thuong", "thưởng", "bonus", "part-time", "part time", "freelance",
      "thu nhap", "thu nhập", "income", "transfer in", "nhan tien", "nhận tiền",
      "급료", "월급", "알바", "용돈", "수입",
    ],
    food: [
      "an ", "ăn ", "food", "com", "cơm", "pho", "phở", "bun", "bún", "cafe",
      "cà phê", "coffee", "tra sua", "trà sữa", "an sang", "ăn sáng", "an trua",
      "ăn trưa", "an toi", "ăn tối", "snack", "do an", "đồ ăn", "nha hang",
      "nhà hàng", "quan", "quán", "grab food", "shopee food", "baemin", "lotteria",
      "kfc", "highlands", "boba", "banh", "bánh", "che", "chè", "kem",
      "밥", "식사", "커피", "음식", "분식", "라면", "카페",
    ],
    transport: [
      "xe", "grab", "be ", "xanh sm", "bus", "xe buyt", "xe buýt", "xang", "xăng",
      "petrol", "transport", "di chuyen", "di chuyển", "taxi", "uber", "metro",
      "tau", "tàu", "ve xe", "vé xe", "parking", "gui xe", "gửi xe", "ship",
      "shipper", "xe om", "xe ôm",
      "교통", "버스", "택시", "지하철", "그랩", "주유",
    ],
    shopping: [
      "mua", "shop", "shopping", "shopee", "lazada", "tiki", "tiktok shop",
      "mall", "quan ao", "quần áo", "giay", "giày", "my pham", "mỹ phẩm",
      "do dung", "đồ dùng", "online", "dat hang", "đặt hàng", "order",
      "쇼핑", "옷", "구매", "쿠팡",
    ],
    study: [
      "hoc", "học", "sach", "sách", "study", "tuition", "hoc phi", "học phí",
      "lop", "lớp", "khoa hoc", "khóa học", "tieng han", "tiếng hàn", "korean",
      "van phong pham", "văn phòng phẩm", "but", "bút", "vo", "vở", "thi",
      "ki thi", "kỳ thi", "course", "edu", "truong", "trường",
      "공부", "수업", "학원", "책", "한국어", "등록금",
    ],
  };

  /** @type {{ id: string, type: 'income'|'expense', amount: number, note: string, date: string, category: string }[]} */
  let transactions = loadTransactions();
  let currentPeriod = "day";

  const els = {
    form: document.getElementById("txForm"),
    type: document.getElementById("txType"),
    amount: document.getElementById("txAmount"),
    note: document.getElementById("txNote"),
    date: document.getElementById("txDate"),
    predictedCat: document.getElementById("predictedCat"),
    totalIncome: document.getElementById("totalIncome"),
    totalExpense: document.getElementById("totalExpense"),
    balanceValue: document.getElementById("balanceValue"),
    balancePill: document.querySelector(".stat-pill.balance"),
    txList: document.getElementById("txList"),
    listEmpty: document.getElementById("listEmpty"),
    chart: document.getElementById("spendChart"),
    chartLegend: document.getElementById("chartLegend"),
    chartEmpty: document.getElementById("chartEmpty"),
    chartWrap: document.querySelector(".chart-wrap"),
    periodBtns: document.querySelectorAll(".period-btn"),
    adviceList: document.getElementById("adviceList"),
  };

  function loadTransactions() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function autoCategorize(note, type) {
    const n = normalize(note);
    if (type === "income") {
      for (const kw of CATEGORY_RULES.salary) {
        if (n.includes(normalize(kw.trim()))) return "salary";
      }
      return "salary";
    }

    const order = ["food", "transport", "shopping", "study", "salary"];
    for (const cat of order) {
      for (const kw of CATEGORY_RULES[cat]) {
        if (n.includes(normalize(kw.trim()))) return cat;
      }
    }
    return "others";
  }

  function formatMoney(n) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(n);
  }

  function todayISO() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function parseDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function startOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = day === 0 ? 6 : day - 1;
    d.setDate(d.getDate() - diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function inPeriod(txDateISO, period) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const tx = parseDate(txDateISO);

    if (period === "day") return tx.getTime() === now.getTime();
    if (period === "week") {
      const start = startOfWeek(now);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      return tx >= start && tx <= end;
    }
    return tx.getFullYear() === now.getFullYear() && tx.getMonth() === now.getMonth();
  }

  function filteredTx() {
    return transactions.filter((t) => inPeriod(t.date, currentPeriod));
  }

  function updatePrediction() {
    const type = els.type.value;
    const note = els.note.value.trim();
    const cat = note ? autoCategorize(note, type) : type === "income" ? "salary" : "others";
    els.predictedCat.textContent = cat;
    els.predictedCat.className = `cat-chip ${cat}`;
  }

  function calcTotals(list) {
    let income = 0;
    let expense = 0;
    for (const t of list) {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
    }
    return { income, expense, balance: income - expense };
  }

  function spendingByCategory(list) {
    const map = {
      salary: 0,
      food: 0,
      transport: 0,
      shopping: 0,
      study: 0,
      others: 0,
    };
    for (const t of list) {
      if (t.type !== "expense") continue;
      const key = map[t.category] != null ? t.category : "others";
      map[key] += t.amount;
    }
    return map;
  }

  /** Build advice cards from current spending pattern */
  function buildAdviceIds(list) {
    const { income, expense, balance } = calcTotals(list);
    const spending = spendingByCategory(list);
    const ids = [];

    if (expense <= 0) {
      ids.push("empty");
      return ids;
    }

    if (balance < 0) ids.push("overspend");
    else if (income > 0 && expense / income >= 0.8) ids.push("tight");

    const totalExp = expense;
    const share = (cat) => (totalExp > 0 ? spending[cat] / totalExp : 0);

    if (share("food") >= 0.4) ids.push("food");
    if (share("shopping") >= 0.3) ids.push("shopping");
    if (share("transport") >= 0.25) ids.push("transport");
    if (share("study") >= 0.2) ids.push("study");
    if (share("others") >= 0.35) ids.push("others");

    if (balance > 0 && !ids.includes("overspend") && !ids.includes("tight")) {
      ids.push("healthy");
    }

    if (!ids.includes("empty") && ids.length < 2) ids.push("save");

    // Cap to 3 tips for a clean UI
    return ids.slice(0, 3);
  }

  function renderAdvice() {
    const pack = I18n.advicePack();
    const ids = buildAdviceIds(filteredTx());
    els.adviceList.innerHTML = "";

    for (const id of ids) {
      const tip = pack[id];
      if (!tip) continue;
      const card = document.createElement("article");
      card.className = `advice-card tone-${tip.tone}`;
      card.innerHTML = `
        <div class="advice-icon">${tip.icon}</div>
        <div class="advice-body">
          <h3></h3>
          <p></p>
        </div>
      `;
      card.querySelector("h3").textContent = tip.title;
      card.querySelector("p").textContent = tip.body;
      els.adviceList.appendChild(card);
    }
  }

  function renderStats() {
    const { income, expense, balance } = calcTotals(filteredTx());
    els.totalIncome.textContent = formatMoney(income);
    els.totalExpense.textContent = formatMoney(expense);
    els.balanceValue.textContent = formatMoney(balance);
    els.balancePill.classList.toggle("negative", balance < 0);
  }

  function renderList() {
    const list = [...filteredTx()].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
    els.txList.innerHTML = "";
    els.listEmpty.classList.toggle("hidden", list.length > 0);

    for (const t of list) {
      const li = document.createElement("li");
      li.className = `tx-item ${t.type === "income" ? "income-row" : ""}`;
      li.innerHTML = `
        <span class="cat-chip ${t.category}">${t.category}</span>
        <div class="tx-meta">
          <p class="tx-note"></p>
          <p class="tx-date"></p>
        </div>
        <span class="tx-amount ${t.type === "income" ? "plus" : "minus"}"></span>
        <button type="button" class="tx-del" data-i18n-aria="btn.delete" aria-label="${I18n.t("btn.delete")}" data-id="${t.id}">✕</button>
      `;
      li.querySelector(".tx-note").textContent = t.note;
      li.querySelector(".tx-date").textContent = t.date.split("-").reverse().join("/");
      li.querySelector(".tx-amount").textContent =
        (t.type === "income" ? "+" : "−") + " " + formatMoney(t.amount);
      els.txList.appendChild(li);
    }
  }

  function drawChart() {
    const canvas = els.chart;
    const ctx = canvas.getContext("2d");
    const spending = spendingByCategory(filteredTx());
    const entries = Object.entries(spending).filter(([, v]) => v > 0);
    const total = entries.reduce((s, [, v]) => s + v, 0);

    const dpr = window.devicePixelRatio || 1;
    const size = 280;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const hasData = total > 0;
    els.chartEmpty.classList.toggle("hidden", hasData);
    els.chartWrap.classList.toggle("hidden", !hasData);
    els.chartLegend.innerHTML = "";

    if (!hasData) return;

    const cx = size / 2;
    const cy = size / 2;
    const radius = 98;
    const inner = 58;
    let start = -Math.PI / 2;

    for (const [cat, value] of entries) {
      const angle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = CATEGORY_COLORS[cat] || CATEGORY_COLORS.others;
      ctx.fill();
      start += angle;
    }

    ctx.beginPath();
    ctx.arc(cx, cy, inner, 0, Math.PI * 2);
    ctx.fillStyle = "#fffdf8";
    ctx.fill();

    ctx.fillStyle = "#2a6a96";
    ctx.font = "700 13px Fredoka, Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(I18n.t("chart.center"), cx, cy - 6);
    ctx.fillStyle = "#3a4a5c";
    ctx.font = "700 12px Nunito, sans-serif";
    const short =
      total >= 1_000_000
        ? (total / 1_000_000).toFixed(1) + "tr"
        : total >= 1000
          ? Math.round(total / 1000) + "k"
          : String(total);
    ctx.fillText(short + " ₫", cx, cy + 14);

    for (const [cat, value] of entries) {
      const pct = Math.round((value / total) * 100);
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="legend-swatch" style="background:${CATEGORY_COLORS[cat]}"></span>
        <span>${cat}</span>
        <span class="legend-pct">${pct}% · ${formatMoney(value)}</span>
      `;
      els.chartLegend.appendChild(li);
    }
  }

  function refresh() {
    renderStats();
    renderAdvice();
    renderList();
    drawChart();
  }

  els.periodBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.periodBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentPeriod = btn.dataset.period;
      refresh();
    });
  });

  els.note.addEventListener("input", updatePrediction);
  els.type.addEventListener("change", updatePrediction);

  els.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = els.type.value;
    const amount = Number(els.amount.value);
    const note = els.note.value.trim();
    const date = els.date.value;

    if (!note || !date || !(amount > 0)) return;

    transactions.push({
      id: String(Date.now()) + Math.random().toString(16).slice(2, 6),
      type,
      amount,
      note,
      date,
      category: autoCategorize(note, type),
    });
    saveTransactions();

    els.amount.value = "";
    els.note.value = "";
    updatePrediction();
    refresh();
  });

  els.txList.addEventListener("click", (e) => {
    const btn = e.target.closest(".tx-del");
    if (!btn) return;
    transactions = transactions.filter((t) => t.id !== btn.dataset.id);
    saveTransactions();
    refresh();
  });

  document.addEventListener("beeso:langchange", () => refresh());

  // Init
  I18n.init();
  els.date.value = todayISO();
  updatePrediction();
  refresh();
})();

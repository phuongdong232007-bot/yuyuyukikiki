/* Shared VI ↔ KO i18n for BEESO BUDGET */
window.BeesoI18n = (() => {
  const LANG_KEY = "beeso_budget_lang";

  const STR = {
    vi: {
      // Landing
      "doc.title.landing": "BEESO BUDGET · Giới thiệu",
      "landing.tagline": "Sổ chi tiêu dễ thương cho sinh viên",
      "landing.kicker": "Sổ ngân sách cá nhân",
      "landing.major": "Sinh viên · Chuyên ngành tiếng Hàn Truyền thông",
      "landing.dob": "🎂 Ngày sinh:",
      "landing.point1": "Nhập thu nhập & chi tiêu",
      "landing.point2": "Tự gắn thẻ category",
      "landing.point3": "Tính số dư theo ngày · tuần · tháng",
      "landing.cta": "Vào sổ BEESO BUDGET",
      "landing.foot": "Pastel · Cute · Tự động tính toán",

      // App chrome
      "doc.title.app": "BEESO BUDGET · Sổ chi tiêu",
      "app.back": "← Giới thiệu",
      "app.sub": "Nhập thu nhập → Tự gắn category & tính toán",
      "app.foot": "BEESO BUDGET · Sinh viên tiếng Hàn Truyền thông · 02/03/2007",

      // Balance
      "sec.balance": "Số dư theo kỳ",
      "period.day": "Ngày",
      "period.week": "Tuần",
      "period.month": "Tháng",
      "stat.income": "Tổng thu",
      "stat.expense": "Tổng chi",
      "stat.balance": "Số dư",
      "stat.formula": "= Thu − Chi",

      // Form
      "sec.enter": "Nhập giao dịch",
      "sec.enter.hint": "Gõ mô tả → BEESO tự gắn category: salary · food · transport · shopping · study · others",
      "field.type": "Loại",
      "opt.income": "Thu nhập (Income)",
      "opt.expense": "Chi tiêu (Expense)",
      "field.amount": "Số tiền (₫)",
      "ph.amount": "vd: 50000",
      "field.note": "Mô tả",
      "ph.note": "vd: ăn phở, grab đi học, lương part-time...",
      "field.date": "Ngày",
      "predict.label": "Category dự đoán:",
      "btn.add": "Thêm & tự tính toán",

      // Chart
      "sec.chart": "Chi tiêu theo category",
      "sec.chart.hint": "Biểu đồ chi tiêu theo category trong kỳ đang chọn",
      "chart.center": "Chi tiêu",
      "chart.empty": "Chưa có chi tiêu trong kỳ này — thêm giao dịch để xem chart nhé!",

      // Advice
      "sec.advice": "Lời khuyên tiêu dùng",
      "sec.advice.hint": "Gợi ý dựa trên chi tiêu thực tế trong kỳ đang chọn",

      // List
      "sec.list": "Danh sách giao dịch",
      "list.empty": "Chưa có giao dịch nào. Hãy nhập thu nhập hoặc chi tiêu ở trên!",
      "btn.delete": "Xóa giao dịch",

      // Lang toggle
      "lang.vi": "VI",
      "lang.ko": "KO",
      "lang.aria": "Đổi ngôn ngữ Việt / Hàn",
    },
    ko: {
      "doc.title.landing": "BEESO BUDGET · 소개",
      "landing.tagline": "학생을 위한 귀여운 가계부",
      "landing.kicker": "개인 예산 수첩",
      "landing.major": "학생 · 한국어 미디어커뮤니케이션 전공",
      "landing.dob": "🎂 생년월일:",
      "landing.point1": "수입 & 지출 입력",
      "landing.point2": "카테고리 자동 분류",
      "landing.point3": "일 · 주 · 월별 잔액 계산",
      "landing.cta": "BEESO BUDGET 시작하기",
      "landing.foot": "Pastel · Cute · 자동 계산",

      "doc.title.app": "BEESO BUDGET · 가계부",
      "app.back": "← 소개",
      "app.sub": "수입 입력 → 자동 분류 & 계산",
      "app.foot": "BEESO BUDGET · 한국어 미디어커뮤니케이션 · 02/03/2007",

      "sec.balance": "기간별 잔액",
      "period.day": "일",
      "period.week": "주",
      "period.month": "월",
      "stat.income": "총수입",
      "stat.expense": "총지출",
      "stat.balance": "잔액",
      "stat.formula": "= 수입 − 지출",

      "sec.enter": "거래 입력",
      "sec.enter.hint": "설명 입력 → BEESO가 자동 분류: salary · food · transport · shopping · study · others",
      "field.type": "유형",
      "opt.income": "수입 (Income)",
      "opt.expense": "지출 (Expense)",
      "field.amount": "금액 (₫)",
      "ph.amount": "예: 50000",
      "field.note": "설명",
      "ph.note": "예: 쌀국수, 그랩, 알바 급여...",
      "field.date": "날짜",
      "predict.label": "예상 카테고리:",
      "btn.add": "추가 & 자동 계산",

      "sec.chart": "카테고리별 지출",
      "sec.chart.hint": "선택한 기간의 카테고리별 지출 차트",
      "chart.center": "지출",
      "chart.empty": "이 기간에 지출이 없어요 — 거래를 추가해 보세요!",

      "sec.advice": "소비 조언",
      "sec.advice.hint": "선택한 기간의 실제 지출을 바탕으로 한 팁",

      "sec.list": "거래 목록",
      "list.empty": "아직 거래가 없어요. 위에서 수입이나 지출을 입력해 보세요!",
      "btn.delete": "거래 삭제",

      "lang.vi": "VI",
      "lang.ko": "KO",
      "lang.aria": "베트남어 / 한국어 전환",
    },
  };

  /** Advice copy by rule id */
  const ADVICE = {
    vi: {
      empty: {
        tone: "soft",
        icon: "🌱",
        title: "Bắt đầu ghi chép nào!",
        body: "Chưa có chi tiêu trong kỳ này. Ghi lại từng khoản nhỏ sẽ giúp bạn hiểu thói quen tiêu dùng rõ hơn.",
      },
      overspend: {
        tone: "warn",
        icon: "⚠️",
        title: "Chi đang vượt thu",
        body: "Số dư âm rồi — hãy tạm giảm mua sắm không cần thiết và ưu tiên nhu cầu thiết yếu trong vài ngày tới.",
      },
      tight: {
        tone: "warn",
        icon: "📉",
        title: "Ngân sách đang eo hẹp",
        body: "Chi tiêu chiếm phần lớn thu nhập. Thử để dành ít nhất 10–20% thu nhập trước khi chi tiêu nhé.",
      },
      food: {
        tone: "tip",
        icon: "🍜",
        title: "Ăn uống đang chiếm nhiều",
        body: "Food chiếm phần lớn chi tiêu. Thử nấu cơm nhà / hạn chế trà sữa ngoài vài lần mỗi tuần để tiết kiệm.",
      },
      shopping: {
        tone: "tip",
        icon: "🛍️",
        title: "Shopping hơi “nóng”",
        body: "Mua sắm đang cao. Quy tắc 24 giờ: muốn mua gì cũng đợi một ngày rồi quyết định lại.",
      },
      transport: {
        tone: "tip",
        icon: "🚌",
        title: "Di chuyển tốn khá nhiều",
        body: "Transport đang cao. Gom chuyến, đi chung hoặc dùng xe buýt / đi bộ đoạn ngắn sẽ nhẹ ví hơn.",
      },
      study: {
        tone: "good",
        icon: "📚",
        title: "Đầu tư học tập tốt!",
        body: "Chi cho study đang nổi bật — đây là khoản đầu tư dài hạn. Giữ thói quen học đều và ghi rõ từng khoản nhé.",
      },
      others: {
        tone: "tip",
        icon: "🏷️",
        title: "Nhiều khoản “others”",
        body: "Chi tiêu others khá nhiều. Thử ghi mô tả rõ hơn để BEESO gắn đúng category và dễ theo dõi.",
      },
      healthy: {
        tone: "good",
        icon: "💛",
        title: "Đang kiểm soát tốt!",
        body: "Số dư dương và chi tiêu khá cân bằng. Tiếp tục theo dõi theo tuần/tháng để giữ nhịp tiết kiệm này nhé!",
      },
      save: {
        tone: "soft",
        icon: "🐝",
        title: "Mẹo nhỏ từ Beeso",
        body: "Mỗi lần nhận thu nhập, hãy tách ngay một phần nhỏ vào “hũ tiết kiệm” trước khi chi tiêu.",
      },
    },
    ko: {
      empty: {
        tone: "soft",
        icon: "🌱",
        title: "기록을 시작해 볼까요!",
        body: "이 기간에 아직 지출이 없어요. 작은 금액부터 적으면 소비 습관을 더 잘 알 수 있어요.",
      },
      overspend: {
        tone: "warn",
        icon: "⚠️",
        title: "지출이 수입을 넘었어요",
        body: "잔액이 마이너스예요. 당분간 불필요한 쇼핑을 줄이고 필수 지출을 우선해 보세요.",
      },
      tight: {
        tone: "warn",
        icon: "📉",
        title: "예산이 빠듯해요",
        body: "지출이 수입의 대부분을 차지해요. 쓰기 전에 수입의 10–20%를 먼저 저축해 보세요.",
      },
      food: {
        tone: "tip",
        icon: "🍜",
        title: "식비가 꽤 커요",
        body: "food 비중이 높아요. 집밥 비중을 늘리거나 외식·음료를 주 몇 회로 줄여 보세요.",
      },
      shopping: {
        tone: "tip",
        icon: "🛍️",
        title: "쇼핑이 다소 많아요",
        body: "shopping 지출이 높아요. 24시간 규칙: 사고 싶은 물건은 하루 뒤에 다시 결정해 보세요.",
      },
      transport: {
        tone: "tip",
        icon: "🚌",
        title: "교통비가 꽤 들어요",
        body: "transport 비중이 높아요. 일정을 묶거나, 버스·짧은 거리는 걸어가면 절약에 도움이 돼요.",
      },
      study: {
        tone: "good",
        icon: "📚",
        title: "학습 투자 좋아요!",
        body: "study 지출이 눈에 띄어요 — 장기 투자예요. 꾸준히 공부하고 항목을 꼼꼼히 기록해 보세요.",
      },
      others: {
        tone: "tip",
        icon: "🏷️",
        title: "others가 많아요",
        body: "others 지출이 많아요. 설명을 더 구체적으로 적으면 BEESO가 카테고리를 더 잘 붙여 줘요.",
      },
      healthy: {
        tone: "good",
        icon: "💛",
        title: "잘 관리하고 있어요!",
        body: "잔액이 플러스이고 지출도 균형적이에요. 주·월 단위로 계속 확인해 이 리듬을 유지해 보세요!",
      },
      save: {
        tone: "soft",
        icon: "🐝",
        title: "Beeso의 작은 팁",
        body: "수입이 들어오면 쓰기 전에 작은 금액을 ‘저축 통’에 먼저 넣어 보세요.",
      },
    },
  };

  function getLang() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "ko" || saved === "vi" ? saved : "vi";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function t(key, lang = getLang()) {
    return (STR[lang] && STR[lang][key]) || STR.vi[key] || key;
  }

  function apply(lang = getLang()) {
    document.documentElement.lang = lang === "ko" ? "ko" : "vi";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key, lang);
      if (el.tagName === "TITLE") el.textContent = val;
      else el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"), lang));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title"), lang));
    });

    // Update lang toggle UI
    document.querySelectorAll(".lang-toggle").forEach((wrap) => {
      wrap.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });
    });

    document.dispatchEvent(new CustomEvent("beeso:langchange", { detail: { lang } }));
  }

  function bindToggle() {
    document.querySelectorAll(".lang-toggle").forEach((wrap) => {
      wrap.addEventListener("click", (e) => {
        const btn = e.target.closest(".lang-btn");
        if (!btn) return;
        const lang = btn.dataset.lang;
        if (lang !== "vi" && lang !== "ko") return;
        setLang(lang);
        apply(lang);
      });
    });
  }

  function advicePack(lang = getLang()) {
    return ADVICE[lang] || ADVICE.vi;
  }

  function init() {
    bindToggle();
    apply(getLang());
  }

  return { getLang, setLang, t, apply, init, advicePack, STR, ADVICE };
})();

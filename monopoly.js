(() => {
  "use strict";

  const START_MONEY = 1500;
  const PASS_GO = 200;
  const BAIL = 150;
  const BOARD_SIZE = 40;

  const PLAYER_DEFS = [
    { color: "red", css: "p0", hex: "#e23d3d", symbol: "●" },
    { color: "blue", css: "p1", hex: "#2f7de1", symbol: "■" },
    { color: "green", css: "p2", hex: "#2fa84f", symbol: "▲" },
    { color: "yellow", css: "p3", hex: "#e0b000", symbol: "◆" },
  ];

  const I18N = {
    vi: {
      brand: "Cờ Tỷ Phú",
      newGame: "Ván mới",
      currentTurn: "Lượt chơi",
      players: "Người chơi",
      actions: "Hành động",
      roll: "Gieo xúc xắc",
      buy: "Mua đất",
      build: "Xây nhà",
      endTurn: "Kết thúc lượt",
      assets: "Tài sản người chơi hiện tại",
      gameLog: "Nhật ký sự kiện",
      jailAsk: "Bạn đang ở tù. Trả $150 để ra ngay?",
      payBail: "Trả $150",
      stayJail: "Ở lại tù",
      center: "WORLD\nMONOPOLY",
      player: "Người chơi",
      bankrupt: "Phá sản",
      inJail: "Đang ở tù",
      active: "Đang chơi",
      noAssets: "Chưa có tài sản",
      house1: "Nhà cấp 1",
      house2: "Nhà cấp 2",
      hotel: "Khách sạn",
      land: "Đất trống",
      winTitle: "Chiến thắng!",
      winBody: "{name} là người chiến thắng cuối cùng!",
      gameStart: "Bắt đầu ván mới. Mỗi người có $1500.",
      rolled: "{name} gieo được {d1} + {d2} = {sum}.",
      movedTo: "{name} đến {space}.",
      passedGo: "{name} đi qua Khởi Hành, nhận ${amount}.",
      bought: "{name} mua {space} với giá ${price}.",
      cannotBuy: "Không đủ tiền để mua {space}.",
      rentPaid: "{name} trả ${amount} tiền thuê cho {owner} tại {space}.",
      samsungFee: "{name} trả phí Samsung ${amount} cho {owner} ({space}).",
      chanceGain: "Cơ Hội: {name} nhận thưởng ${amount}.",
      chanceLose: "Cơ Hội: {name} bị phạt ${amount}.",
      taxPaid: "{name} nộp thuế ${amount}.",
      goToJail: "{name} vào tù!",
      paidBail: "{name} trả ${amount} bảo lãnh và ra tù.",
      stayInJail: "{name} chọn ở lại tù và mất lượt.",
      built: "{name} xây {level} tại {space} (chi phí ${cost}).",
      cannotBuild: "Không thể xây thêm tại đây.",
      bankruptMsg: "{name} phá sản và bị loại!",
      freeParking: "{name} nghỉ tại Bãi Đỗ Xe Miễn Phí.",
      justVisiting: "{name} chỉ đang thăm Nhà Tù.",
      owned: "Ô này đã có chủ.",
      notBuyable: "Không thể mua ô này.",
      mustRollFirst: "Hãy gieo xúc xắc trước.",
      alreadyRolled: "Bạn đã gieo xúc xắc trong lượt này.",
      turnEnded: "Kết thúc lượt của {name}.",
      langBtn: "한국어",
      spaces: {
        start: "Khởi Hành",
        jail: "Nhà Tù",
        parking: "Bãi Đỗ Xe",
        gotoJail: "Vào Tù",
        chance: "Cơ Hội",
        tax: "Thuế Sang Trọng",
        bangkok: "Bangkok",
        tokyo: "Tokyo",
        sydney: "Sydney",
        paris: "Paris",
        london: "London",
        seoul: "Seoul",
        beijing: "Beijing",
        newyork: "New York",
        singapore: "Singapore",
        dubai: "Dubai",
        rome: "Rome",
        berlin: "Berlin",
        hongkong: "Hong Kong",
        istanbul: "Istanbul",
        cairo: "Cairo",
        moscow: "Moscow",
        mumbai: "Mumbai",
        la: "Los Angeles",
        toronto: "Toronto",
        barcelona: "Barcelona",
        amsterdam: "Amsterdam",
        taipei: "Taipei",
        osaka: "Osaka",
        shanghai: "Shanghai",
        samsungMobile: "Samsung Mobile",
        samsungPay: "Samsung Pay",
        samsungElec: "Samsung Electronics",
        samsungCnt: "Samsung C&T",
      },
    },
    ko: {
      brand: "모노폴리",
      newGame: "새 게임",
      currentTurn: "현재 차례",
      players: "플레이어",
      actions: "행동",
      roll: "주사위 굴리기",
      buy: "토지 구매",
      build: "건물 짓기",
      endTurn: "턴 종료",
      assets: "현재 플레이어 자산",
      gameLog: "게임 로그",
      jailAsk: "감옥에 있습니다. $150을 내고 나가시겠습니까?",
      payBail: "$150 지불",
      stayJail: "감옥에 남기",
      center: "WORLD\nMONOPOLY",
      player: "플레이어",
      bankrupt: "파산",
      inJail: "감옥 중",
      active: "진행 중",
      noAssets: "보유 자산 없음",
      house1: "1단계 주택",
      house2: "2단계 주택",
      hotel: "호텔",
      land: "빈 토지",
      winTitle: "승리!",
      winBody: "{name}님이 최종 우승자입니다!",
      gameStart: "새 게임을 시작합니다. 각자 $1500을 받습니다.",
      rolled: "{name}님이 {d1} + {d2} = {sum}을(를) 굴렸습니다.",
      movedTo: "{name}님이 {space}에 도착했습니다.",
      passedGo: "{name}님이 출발을 지나 ${amount}을(를) 받았습니다.",
      bought: "{name}님이 {space}을(를) ${price}에 구매했습니다.",
      cannotBuy: "{space}을(를) 살 돈이 부족합니다.",
      rentPaid: "{name}님이 {space}에서 {owner}에게 임대료 ${amount}을(를) 지불했습니다.",
      samsungFee: "{name}님이 {owner}에게 삼성 수수료 ${amount}을(를) 지불했습니다 ({space}).",
      chanceGain: "찬스: {name}님이 ${amount} 보상을 받았습니다.",
      chanceLose: "찬스: {name}님이 ${amount} 벌금을 받았습니다.",
      taxPaid: "{name}님이 세금 ${amount}을(를) 납부했습니다.",
      goToJail: "{name}님이 감옥으로 갑니다!",
      paidBail: "{name}님이 보석금 ${amount}을(를) 내고 나왔습니다.",
      stayInJail: "{name}님이 감옥에 남아 턴을 건너뜁니다.",
      built: "{name}님이 {space}에 {level}을(를) 지었습니다 (비용 ${cost}).",
      cannotBuild: "여기에 더 이상 지을 수 없습니다.",
      bankruptMsg: "{name}님이 파산하여 탈락했습니다!",
      freeParking: "{name}님이 무료 주차에 쉽니다.",
      justVisiting: "{name}님이 감옥을 방문 중입니다.",
      owned: "이미 주인이 있는 칸입니다.",
      notBuyable: "구매할 수 없는 칸입니다.",
      mustRollFirst: "먼저 주사위를 굴리세요.",
      alreadyRolled: "이번 턴에 이미 주사위를 굴렸습니다.",
      turnEnded: "{name}님의 턴이 종료되었습니다.",
      langBtn: "Tiếng Việt",
      spaces: {
        start: "출발",
        jail: "감옥",
        parking: "무료 주차",
        gotoJail: "감옥으로",
        chance: "찬스",
        tax: "사치세",
        bangkok: "방콕",
        tokyo: "도쿄",
        sydney: "시드니",
        paris: "파리",
        london: "런던",
        seoul: "서울",
        beijing: "베이징",
        newyork: "뉴욕",
        singapore: "싱가포르",
        dubai: "두바이",
        rome: "로마",
        berlin: "베를린",
        hongkong: "홍콩",
        istanbul: "이스탄불",
        cairo: "카이로",
        moscow: "모스크바",
        mumbai: "뭄바이",
        la: "로스앤젤레스",
        toronto: "토론토",
        barcelona: "바르셀로나",
        amsterdam: "암스테르담",
        taipei: "타이베이",
        osaka: "오사카",
        shanghai: "상하이",
        samsungMobile: "Samsung Mobile",
        samsungPay: "Samsung Pay",
        samsungElec: "Samsung Electronics",
        samsungCnt: "Samsung C&T",
      },
    },
  };

  /** Board definition: classic 40-space layout, GO at bottom-right, clockwise */
  const SPACES = [
    // 0–10 bottom edge
    { id: "start", type: "start" },
    { id: "bangkok", type: "city", price: 60, rent: [2, 10, 30, 90], build: 50, group: "brown" },
    { id: "chance", type: "chance" },
    { id: "tokyo", type: "city", price: 60, rent: [4, 20, 60, 180], build: 50, group: "brown" },
    { id: "samsungMobile", type: "samsung", price: 150, fee: 50 },
    { id: "sydney", type: "city", price: 100, rent: [6, 30, 90, 270], build: 50, group: "lightblue" },
    { id: "chance", type: "chance" },
    { id: "paris", type: "city", price: 100, rent: [6, 30, 90, 270], build: 50, group: "lightblue" },
    { id: "london", type: "city", price: 120, rent: [8, 40, 100, 300], build: 50, group: "lightblue" },
    { id: "rome", type: "city", price: 120, rent: [8, 40, 100, 300], build: 50, group: "lightblue" },
    { id: "jail", type: "jail" },
    // 11–20 left edge
    { id: "seoul", type: "city", price: 140, rent: [10, 50, 150, 450], build: 100, group: "pink" },
    { id: "samsungPay", type: "samsung", price: 150, fee: 50 },
    { id: "beijing", type: "city", price: 140, rent: [10, 50, 150, 450], build: 100, group: "pink" },
    { id: "newyork", type: "city", price: 160, rent: [12, 60, 180, 500], build: 100, group: "pink" },
    { id: "singapore", type: "city", price: 180, rent: [14, 70, 200, 550], build: 100, group: "orange" },
    { id: "chance", type: "chance" },
    { id: "dubai", type: "city", price: 180, rent: [14, 70, 200, 550], build: 100, group: "orange" },
    { id: "berlin", type: "city", price: 200, rent: [16, 80, 220, 600], build: 100, group: "orange" },
    { id: "cairo", type: "city", price: 200, rent: [16, 80, 220, 600], build: 100, group: "orange" },
    { id: "parking", type: "parking" },
    // 21–30 top edge
    { id: "hongkong", type: "city", price: 220, rent: [18, 90, 250, 700], build: 150, group: "red" },
    { id: "chance", type: "chance" },
    { id: "istanbul", type: "city", price: 220, rent: [18, 90, 250, 700], build: 150, group: "red" },
    { id: "moscow", type: "city", price: 240, rent: [20, 100, 300, 750], build: 150, group: "red" },
    { id: "samsungElec", type: "samsung", price: 200, fee: 75 },
    { id: "mumbai", type: "city", price: 260, rent: [22, 110, 330, 800], build: 150, group: "yellow" },
    { id: "la", type: "city", price: 260, rent: [22, 110, 330, 800], build: 150, group: "yellow" },
    { id: "chance", type: "chance" },
    { id: "toronto", type: "city", price: 280, rent: [24, 120, 360, 850], build: 150, group: "yellow" },
    { id: "gotoJail", type: "gotoJail" },
    // 31–39 right edge
    { id: "barcelona", type: "city", price: 300, rent: [26, 130, 390, 900], build: 200, group: "green" },
    { id: "amsterdam", type: "city", price: 300, rent: [26, 130, 390, 900], build: 200, group: "green" },
    { id: "chance", type: "chance" },
    { id: "taipei", type: "city", price: 320, rent: [28, 150, 450, 1000], build: 200, group: "green" },
    { id: "samsungCnt", type: "samsung", price: 200, fee: 75 },
    { id: "chance", type: "chance" },
    { id: "tax", type: "tax", amount: 100 },
    { id: "osaka", type: "city", price: 350, rent: [35, 175, 500, 1100], build: 200, group: "darkblue" },
    { id: "shanghai", type: "city", price: 400, rent: [50, 200, 600, 1400], build: 200, group: "darkblue" },
  ];

  const CHANCE_TABLE = [
    { delta: 100 },
    { delta: 50 },
    { delta: 200 },
    { delta: -50 },
    { delta: -100 },
    { delta: -150 },
    { delta: 75 },
    { delta: -75 },
  ];

  /** Grid placement for 11x11 board: GO at bottom-right (row10,col10), clockwise */
  function cellGridPos(index) {
    if (index >= 0 && index <= 10) return { row: 11, col: 11 - index };
    if (index >= 11 && index <= 20) return { row: 11 - (index - 10), col: 1 };
    if (index >= 21 && index <= 30) return { row: 1, col: index - 20 + 1 };
    return { row: index - 30 + 1, col: 11 };
  }

  const els = {
    board: document.getElementById("board"),
    playersList: document.getElementById("playersList"),
    turnDisplay: document.getElementById("turnDisplay"),
    assetsList: document.getElementById("assetsList"),
    gameLog: document.getElementById("gameLog"),
    btnRoll: document.getElementById("btnRoll"),
    btnBuy: document.getElementById("btnBuy"),
    btnBuild: document.getElementById("btnBuild"),
    btnEnd: document.getElementById("btnEnd"),
    btnBail: document.getElementById("btnBail"),
    btnStayJail: document.getElementById("btnStayJail"),
    btnLang: document.getElementById("btnLang"),
    btnNewGame: document.getElementById("btnNewGame"),
    langLabel: document.getElementById("langLabel"),
    jailPrompt: document.getElementById("jailPrompt"),
    die1: document.getElementById("die1"),
    die2: document.getElementById("die2"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    modalOk: document.getElementById("modalOk"),
  };

  let lang = "vi";
  let state = null;

  function t(key, vars = {}) {
    const dict = I18N[lang];
    let text = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
    if (typeof text !== "string") text = key;
    return text.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
  }

  function spaceName(space) {
    return t(`spaces.${space.id}`);
  }

  function playerName(p) {
    return `${t("player")} ${p.id + 1}`;
  }

  function fmtMoney(n) {
    return `$${n}`;
  }

  function levelLabel(level) {
    if (level === 1) return t("house1");
    if (level === 2) return t("house2");
    if (level >= 3) return t("hotel");
    return t("land");
  }

  function houseIcons(level) {
    if (level <= 0) return "";
    if (level === 1) return "🏠";
    if (level === 2) return "🏠🏠";
    return "🏨";
  }

  function currentPlayer() {
    return state.players[state.current];
  }

  function alivePlayers() {
    return state.players.filter((p) => !p.bankrupt);
  }

  function log(msg, type = "") {
    const item = document.createElement("div");
    item.className = `log-item ${type}`.trim();
    item.textContent = msg;
    els.gameLog.prepend(item);
    while (els.gameLog.children.length > 80) els.gameLog.lastChild.remove();
  }

  function applyI18n() {
    document.documentElement.lang = lang === "vi" ? "vi" : "ko";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key);
    });
    els.langLabel.textContent = t("langBtn");
    els.board.dataset.center = t("center");
    renderAll();
  }

  function createPlayers() {
    return PLAYER_DEFS.map((def, i) => ({
      id: i,
      color: def.color,
      css: def.css,
      hex: def.hex,
      symbol: def.symbol,
      money: START_MONEY,
      position: 0,
      inJail: false,
      bankrupt: false,
    }));
  }

  function createPropertyState() {
    return SPACES.map((space) => ({
      owner: null,
      level: 0,
    }));
  }

  function newGame() {
    state = {
      players: createPlayers(),
      props: createPropertyState(),
      current: 0,
      phase: "roll", // roll | action | end | jailAsk | over
      lastDice: [0, 0],
      pendingBuy: false,
      winner: null,
    };
    els.gameLog.innerHTML = "";
    els.die1.textContent = "?";
    els.die2.textContent = "?";
    hideModal();
    log(t("gameStart"), "money");
    beginTurn();
    renderAll();
  }

  function beginTurn() {
    const p = currentPlayer();
    if (p.bankrupt) {
      nextPlayer();
      return;
    }
    state.pendingBuy = false;
    if (p.inJail) {
      state.phase = "jailAsk";
    } else {
      state.phase = "roll";
    }
    updateButtons();
  }

  function nextPlayer() {
    if (state.winner != null) return;
    const alive = alivePlayers();
    if (alive.length <= 1) {
      endGame(alive[0] || null);
      return;
    }
    let next = state.current;
    do {
      next = (next + 1) % state.players.length;
    } while (state.players[next].bankrupt);
    state.current = next;
    beginTurn();
    renderAll();
  }

  function endGame(winner) {
    state.phase = "over";
    state.winner = winner ? winner.id : null;
    updateButtons();
    if (winner) {
      log(t("winBody", { name: playerName(winner) }), "win");
      showModal(t("winTitle"), t("winBody", { name: playerName(winner) }));
    }
  }

  function changeMoney(player, delta) {
    player.money += delta;
    if (player.money < 0) {
      bankrupt(player);
      return false;
    }
    return true;
  }

  /** Pay up to `amount` from payer to payee; bankrupt payer if short. */
  function transfer(payer, payee, amount) {
    const paid = Math.min(Math.max(payer.money, 0), amount);
    payer.money -= amount;
    if (payee) payee.money += paid;
    if (payer.money < 0) {
      bankrupt(payer);
      return false;
    }
    return true;
  }

  function bankrupt(player) {
    player.bankrupt = true;
    player.inJail = false;
    player.money = 0;
    state.props.forEach((prop, i) => {
      if (prop.owner === player.id) {
        prop.owner = null;
        prop.level = 0;
      }
    });
    log(t("bankruptMsg", { name: playerName(player) }), "danger");
    const alive = alivePlayers();
    if (alive.length <= 1) {
      endGame(alive[0] || null);
    }
  }

  function movePlayer(player, steps) {
    const from = player.position;
    let to = from + steps;
    if (to >= BOARD_SIZE) {
      to %= BOARD_SIZE;
      changeMoney(player, PASS_GO);
      log(t("passedGo", { name: playerName(player), amount: PASS_GO }), "money");
    }
    player.position = to;
    log(t("movedTo", { name: playerName(player), space: spaceName(SPACES[to]) }));
    return to;
  }

  function sendToJail(player) {
    player.position = 10;
    player.inJail = true;
    log(t("goToJail", { name: playerName(player) }), "jail");
  }

  function resolveLanding(player) {
    const idx = player.position;
    const space = SPACES[idx];
    const prop = state.props[idx];

    state.pendingBuy = false;

    if (space.type === "gotoJail") {
      sendToJail(player);
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "start") {
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "jail") {
      log(t("justVisiting", { name: playerName(player) }));
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "parking") {
      log(t("freeParking", { name: playerName(player) }));
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "chance") {
      const card = CHANCE_TABLE[Math.floor(Math.random() * CHANCE_TABLE.length)];
      const ok = changeMoney(player, card.delta);
      if (card.delta >= 0) {
        log(t("chanceGain", { name: playerName(player), amount: card.delta }), "chance");
      } else {
        log(t("chanceLose", { name: playerName(player), amount: Math.abs(card.delta) }), "chance");
      }
      if (!ok && state.phase === "over") return;
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "tax") {
      const ok = changeMoney(player, -space.amount);
      log(t("taxPaid", { name: playerName(player), amount: space.amount }), "money");
      if (!ok && state.phase === "over") return;
      state.phase = "end";
      updateButtons();
      renderAll();
      return;
    }

    if (space.type === "city" || space.type === "samsung") {
      if (prop.owner == null) {
        state.pendingBuy = true;
        state.phase = "action";
      } else if (prop.owner !== player.id) {
        const owner = state.players[prop.owner];
        if (!owner.bankrupt) {
          let fee = 0;
          if (space.type === "city") {
            fee = space.rent[Math.min(prop.level, space.rent.length - 1)];
            const ok = transfer(player, owner, fee);
            log(
              t("rentPaid", {
                name: playerName(player),
                owner: playerName(owner),
                space: spaceName(space),
                amount: fee,
              }),
              "money"
            );
            if (state.phase === "over") return;
            if (!ok) {
              state.phase = "end";
              updateButtons();
              renderAll();
              return;
            }
          } else {
            fee = space.fee;
            const ok = transfer(player, owner, fee);
            log(
              t("samsungFee", {
                name: playerName(player),
                owner: playerName(owner),
                space: spaceName(space),
                amount: fee,
              }),
              "money"
            );
            if (state.phase === "over") return;
            if (!ok) {
              state.phase = "end";
              updateButtons();
              renderAll();
              return;
            }
          }
        }
        state.phase = "end";
      } else {
        state.phase = "action";
      }
      updateButtons();
      renderAll();
      return;
    }

    state.phase = "end";
    updateButtons();
    renderAll();
  }

  function rollDice() {
    if (state.phase === "over") return;
    const p = currentPlayer();
    if (p.bankrupt) return;
    if (state.phase !== "roll") {
      if (state.phase === "action" || state.phase === "end") {
        log(t("alreadyRolled"));
      }
      return;
    }

    const d1 = 1 + Math.floor(Math.random() * 6);
    const d2 = 1 + Math.floor(Math.random() * 6);
    state.lastDice = [d1, d2];
    els.die1.textContent = String(d1);
    els.die2.textContent = String(d2);
    els.die1.classList.remove("rolling");
    els.die2.classList.remove("rolling");
    void els.die1.offsetWidth;
    els.die1.classList.add("rolling");
    els.die2.classList.add("rolling");

    log(t("rolled", { name: playerName(p), d1, d2, sum: d1 + d2 }));
    movePlayer(p, d1 + d2);
    resolveLanding(p);
  }

  function tryBuy() {
    const p = currentPlayer();
    if (state.phase !== "action" || !state.pendingBuy) return;
    const idx = p.position;
    const space = SPACES[idx];
    const prop = state.props[idx];
    if (prop.owner != null) {
      log(t("owned"));
      return;
    }
    if (space.type !== "city" && space.type !== "samsung") {
      log(t("notBuyable"));
      return;
    }
    if (p.money < space.price) {
      log(t("cannotBuy", { space: spaceName(space) }), "danger");
      return;
    }
    changeMoney(p, -space.price);
    prop.owner = p.id;
    prop.level = 0;
    state.pendingBuy = false;
    log(t("bought", { name: playerName(p), space: spaceName(space), price: space.price }), "money");
    state.phase = "action";
    updateButtons();
    renderAll();
  }

  function tryBuild() {
    const p = currentPlayer();
    if (state.phase !== "action" && state.phase !== "end") return;
    const idx = p.position;
    const space = SPACES[idx];
    const prop = state.props[idx];
    if (space.type !== "city" || prop.owner !== p.id) {
      log(t("cannotBuild"));
      return;
    }
    if (prop.level >= 3) {
      log(t("cannotBuild"));
      return;
    }
    if (p.money < space.build) {
      log(t("cannotBuy", { space: spaceName(space) }), "danger");
      return;
    }
    changeMoney(p, -space.build);
    prop.level += 1;
    log(
      t("built", {
        name: playerName(p),
        space: spaceName(space),
        level: levelLabel(prop.level),
        cost: space.build,
      }),
      "money"
    );
    updateButtons();
    renderAll();
  }

  function endTurn() {
    if (state.phase === "over") return;
    if (state.phase === "roll" || state.phase === "jailAsk") {
      log(t("mustRollFirst"));
      return;
    }
    const p = currentPlayer();
    log(t("turnEnded", { name: playerName(p) }));
    nextPlayer();
  }

  function payBail() {
    const p = currentPlayer();
    if (state.phase !== "jailAsk" || !p.inJail) return;
    if (p.money < BAIL) {
      log(t("cannotBuy", { space: t("spaces.jail") }), "danger");
      // Still allow staying / skip
      return;
    }
    changeMoney(p, -BAIL);
    p.inJail = false;
    log(t("paidBail", { name: playerName(p), amount: BAIL }), "jail");
    state.phase = "roll";
    updateButtons();
    renderAll();
  }

  function stayJail() {
    const p = currentPlayer();
    if (state.phase !== "jailAsk" || !p.inJail) return;
    log(t("stayInJail", { name: playerName(p) }), "jail");
    state.phase = "end";
    updateButtons();
    // Skip turn immediately after declining bail
    setTimeout(() => {
      if (state.phase === "end" && currentPlayer().id === p.id) {
        nextPlayer();
      }
    }, 350);
  }

  function canBuyNow() {
    const p = currentPlayer();
    if (state.phase !== "action" || !state.pendingBuy || p.bankrupt) return false;
    const space = SPACES[p.position];
    const prop = state.props[p.position];
    return (
      (space.type === "city" || space.type === "samsung") &&
      prop.owner == null &&
      p.money >= space.price
    );
  }

  function canBuildNow() {
    const p = currentPlayer();
    if ((state.phase !== "action" && state.phase !== "end") || p.bankrupt) return false;
    const space = SPACES[p.position];
    const prop = state.props[p.position];
    return (
      space.type === "city" &&
      prop.owner === p.id &&
      prop.level < 3 &&
      p.money >= space.build
    );
  }

  function updateButtons() {
    const over = state.phase === "over";
    const jail = state.phase === "jailAsk";
    els.jailPrompt.classList.toggle("hidden", !jail);
    els.btnRoll.disabled = over || state.phase !== "roll";
    els.btnBuy.disabled = over || !canBuyNow();
    els.btnBuild.disabled = over || !canBuildNow();
    els.btnEnd.disabled = over || jail || state.phase === "roll";
    els.btnBail.disabled = over || !jail;
    els.btnStayJail.disabled = over || !jail;
  }

  function buildBoardSkeleton() {
    els.board.innerHTML = "";
    els.board.dataset.center = t("center");
    for (let i = 0; i < BOARD_SIZE; i++) {
      const space = SPACES[i];
      const pos = cellGridPos(i);
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = String(i);
      cell.style.gridRow = String(pos.row);
      cell.style.gridColumn = String(pos.col);

      if (space.type === "start") cell.classList.add("corner", "start");
      else if (space.type === "jail") cell.classList.add("corner", "jail");
      else if (space.type === "parking") cell.classList.add("corner", "parking");
      else if (space.type === "gotoJail") cell.classList.add("corner", "goto-jail");
      else if (space.type === "chance") cell.classList.add("chance");
      else if (space.type === "samsung") cell.classList.add("samsung");
      else if (space.type === "tax") cell.classList.add("tax");

      if (space.type === "city") {
        const bar = document.createElement("div");
        bar.className = `cell-bar group-${space.group}`;
        cell.appendChild(bar);
      } else if (space.type === "samsung") {
        const bar = document.createElement("div");
        bar.className = "cell-bar group-samsung";
        cell.appendChild(bar);
      }

      const name = document.createElement("div");
      name.className = "cell-name";
      name.dataset.role = "name";
      cell.appendChild(name);

      if (space.price) {
        const price = document.createElement("div");
        price.className = "cell-price";
        price.dataset.role = "price";
        price.textContent = fmtMoney(space.price);
        cell.appendChild(price);
      }

      const houses = document.createElement("div");
      houses.className = "cell-houses";
      houses.dataset.role = "houses";
      cell.appendChild(houses);

      const owner = document.createElement("div");
      owner.className = "cell-owner";
      owner.dataset.role = "owner";
      owner.hidden = true;
      cell.appendChild(owner);

      const tokens = document.createElement("div");
      tokens.className = "tokens";
      tokens.dataset.role = "tokens";
      cell.appendChild(tokens);

      els.board.appendChild(cell);
    }
  }

  function renderBoard() {
    document.querySelectorAll(".cell").forEach((cell) => {
      const i = Number(cell.dataset.index);
      const space = SPACES[i];
      const prop = state.props[i];
      const nameEl = cell.querySelector('[data-role="name"]');
      const housesEl = cell.querySelector('[data-role="houses"]');
      const ownerEl = cell.querySelector('[data-role="owner"]');
      const tokensEl = cell.querySelector('[data-role="tokens"]');

      nameEl.textContent = spaceName(space);
      housesEl.textContent = space.type === "city" ? houseIcons(prop.level) : "";

      if (prop.owner != null) {
        ownerEl.hidden = false;
        ownerEl.style.background = state.players[prop.owner].hex;
      } else {
        ownerEl.hidden = true;
      }

      tokensEl.innerHTML = "";
      state.players.forEach((p) => {
        if (p.bankrupt || p.position !== i) return;
        const tok = document.createElement("span");
        tok.className = `token ${p.css}${p.id === state.current ? " active" : ""}`;
        tok.title = playerName(p);
        tokensEl.appendChild(tok);
      });
    });
  }

  function renderPlayers() {
    els.playersList.innerHTML = "";
    state.players.forEach((p) => {
      const row = document.createElement("div");
      row.className = `player-row${p.id === state.current ? " current" : ""}${p.bankrupt ? " bankrupt" : ""}`;

      const avatar = document.createElement("div");
      avatar.className = "player-avatar";
      avatar.style.background = p.hex;
      avatar.textContent = p.symbol;

      const meta = document.createElement("div");
      meta.className = "player-meta";
      const name = document.createElement("div");
      name.className = "player-name";
      name.textContent = playerName(p);
      const status = document.createElement("div");
      status.className = "player-status";
      status.textContent = p.bankrupt ? t("bankrupt") : p.inJail ? t("inJail") : t("active");
      meta.append(name, status);

      const money = document.createElement("div");
      money.className = "player-money";
      money.textContent = fmtMoney(p.money);

      row.append(avatar, meta, money);
      els.playersList.appendChild(row);
    });
  }

  function renderTurn() {
    const p = currentPlayer();
    els.turnDisplay.innerHTML = "";
    const dot = document.createElement("span");
    dot.className = "turn-dot";
    dot.style.background = p.hex;
    const label = document.createElement("span");
    label.textContent = `${playerName(p)} ${p.symbol}`;
    els.turnDisplay.append(dot, label);
  }

  function renderAssets() {
    const p = currentPlayer();
    els.assetsList.innerHTML = "";
    const owned = [];
    state.props.forEach((prop, i) => {
      if (prop.owner === p.id) owned.push({ i, prop, space: SPACES[i] });
    });
    if (!owned.length) {
      const li = document.createElement("li");
      li.className = "empty";
      li.textContent = t("noAssets");
      els.assetsList.appendChild(li);
      return;
    }
    owned.forEach(({ space, prop }) => {
      const li = document.createElement("li");
      const left = document.createElement("span");
      left.textContent = spaceName(space);
      const right = document.createElement("span");
      if (space.type === "city") {
        right.textContent = `${houseIcons(prop.level) || "·"} ${levelLabel(prop.level)}`;
      } else {
        right.textContent = `Fee ${fmtMoney(space.fee)}`;
      }
      li.append(left, right);
      els.assetsList.appendChild(li);
    });
  }

  function renderAll() {
    if (!state) return;
    renderBoard();
    renderPlayers();
    renderTurn();
    renderAssets();
    updateButtons();
  }

  function showModal(title, body) {
    els.modalTitle.textContent = title;
    els.modalBody.textContent = body;
    els.modal.classList.remove("hidden");
  }

  function hideModal() {
    els.modal.classList.add("hidden");
  }

  // Events
  els.btnRoll.addEventListener("click", rollDice);
  els.btnBuy.addEventListener("click", tryBuy);
  els.btnBuild.addEventListener("click", tryBuild);
  els.btnEnd.addEventListener("click", endTurn);
  els.btnBail.addEventListener("click", payBail);
  els.btnStayJail.addEventListener("click", stayJail);
  els.btnNewGame.addEventListener("click", () => {
    if (confirm(lang === "vi" ? "Bắt đầu ván mới?" : "새 게임을 시작할까요?")) newGame();
  });
  els.btnLang.addEventListener("click", () => {
    lang = lang === "vi" ? "ko" : "vi";
    applyI18n();
  });
  els.modalOk.addEventListener("click", hideModal);

  // Init
  buildBoardSkeleton();
  newGame();
  applyI18n();
})();

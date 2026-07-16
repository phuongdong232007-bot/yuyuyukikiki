const WORDS_PER_ROUND = 15;
const TIMER_SECONDS = 120;

const TOPICS = {
  greetings: {
    emoji: "👋",
    name: "Chào hỏi",
    level: "beginner",
    words: [
      { vi: "Xin chào", ko: "안녕하세요" },
      { vi: "Tạm biệt", ko: "안녕히 가세요" },
      { vi: "Cảm ơn", ko: "감사합니다" },
      { vi: "Xin lỗi", ko: "죄송합니다" },
      { vi: "Không sao", ko: "괜찮아요" },
      { vi: "Vâng / Đúng", ko: "네" },
      { vi: "Không", ko: "아니요" },
      { vi: "Tên tôi là...", ko: "제 이름은...입니다" },
      { vi: "Rất vui được gặp", ko: "만나서 반갑습니다" },
      { vi: "Xin chào (thân mật)", ko: "안녕" },
      { vi: "Chúc ngủ ngon", ko: "잘 자요" },
      { vi: "Hẹn gặp lại", ko: "또 만나요" },
      { vi: "Xin phép", ko: "실례합니다" },
      { vi: "Chúc mừng", ko: "축하합니다" },
      { vi: "Được rồi", ko: "알겠습니다" },
      { vi: "Xin giúp đỡ", ko: "도와주세요" },
    ],
  },
  numbers: {
    emoji: "🔢",
    name: "Số đếm",
    level: "beginner",
    words: [
      { vi: "Một", ko: "하나" },
      { vi: "Hai", ko: "둘" },
      { vi: "Ba", ko: "셋" },
      { vi: "Bốn", ko: "넷" },
      { vi: "Năm", ko: "다섯" },
      { vi: "Sáu", ko: "여섯" },
      { vi: "Bảy", ko: "일곱" },
      { vi: "Tám", ko: "여덟" },
      { vi: "Chín", ko: "아홉" },
      { vi: "Mười", ko: "열" },
      { vi: "Hai mươi", ko: "스물" },
      { vi: "Ba mươi", ko: "서른" },
      { vi: "Một trăm", ko: "백" },
      { vi: "Một nghìn", ko: "천" },
      { vi: "Bao nhiêu?", ko: "얼마예요?" },
      { vi: "Số", ko: "숫자" },
    ],
  },
  family: {
    emoji: "👨‍👩‍👧",
    name: "Gia đình",
    level: "beginner",
    words: [
      { vi: "Bố / Cha", ko: "아버지" },
      { vi: "Mẹ", ko: "어머니" },
      { vi: "Anh trai", ko: "형 / 오빠" },
      { vi: "Chị gái", ko: "누나 / 언니" },
      { vi: "Em trai", ko: "남동생" },
      { vi: "Em gái", ko: "여동생" },
      { vi: "Ông", ko: "할아버지" },
      { vi: "Bà", ko: "할머니" },
      { vi: "Con trai", ko: "아들" },
      { vi: "Con gái", ko: "딸" },
      { vi: "Gia đình", ko: "가족" },
      { vi: "Chồng", ko: "남편" },
      { vi: "Vợ", ko: "아내" },
      { vi: "Chú / Bác", ko: "삼촌" },
      { vi: "Cô / Dì", ko: "이모 / 고모" },
      { vi: "Anh chị em", ko: "형제자매" },
    ],
  },
  food: {
    emoji: "🍜",
    name: "Ăn uống",
    level: "beginner",
    words: [
      { vi: "Cơm", ko: "밥" },
      { vi: "Nước", ko: "물" },
      { vi: "Thịt", ko: "고기" },
      { vi: "Rau", ko: "야채" },
      { vi: "Trái cây", ko: "과일" },
      { vi: "Cà phê", ko: "커피" },
      { vi: "Trà", ko: "차" },
      { vi: "Mì", ko: "면" },
      { vi: "Canh", ko: "국" },
      { vi: "Cay", ko: "매워요" },
      { vi: "Ngon", ko: "맛있어요" },
      { vi: "Đói", ko: "배고파요" },
      { vi: "No", ko: "배불러요" },
      { vi: "Ăn", ko: "먹다" },
      { vi: "Uống", ko: "마시다" },
      { vi: "Nhà hàng", ko: "식당" },
    ],
  },
  colors: {
    emoji: "🎨",
    name: "Màu sắc",
    level: "beginner",
    words: [
      { vi: "Đỏ", ko: "빨간색" },
      { vi: "Xanh dương", ko: "파란색" },
      { vi: "Xanh lá", ko: "초록색" },
      { vi: "Vàng", ko: "노란색" },
      { vi: "Trắng", ko: "흰색" },
      { vi: "Đen", ko: "검은색" },
      { vi: "Hồng", ko: "분홍색" },
      { vi: "Cam", ko: "주황색" },
      { vi: "Tím", ko: "보라색" },
      { vi: "Nâu", ko: "갈색" },
      { vi: "Xám", ko: "회색" },
      { vi: "Màu", ko: "색" },
      { vi: "Sáng", ko: "밝은" },
      { vi: "Tối", ko: "어두운" },
      { vi: "Đẹp", ko: "예쁜" },
      { vi: "Màu matcha", ko: "말차색" },
    ],
  },
  time: {
    emoji: "⏰",
    name: "Thời gian",
    level: "beginner",
    words: [
      { vi: "Hôm nay", ko: "오늘" },
      { vi: "Ngày mai", ko: "내일" },
      { vi: "Hôm qua", ko: "어제" },
      { vi: "Tuần", ko: "주" },
      { vi: "Tháng", ko: "월" },
      { vi: "Năm", ko: "년" },
      { vi: "Giờ", ko: "시" },
      { vi: "Phút", ko: "분" },
      { vi: "Sáng", ko: "아침" },
      { vi: "Trưa", ko: "점심" },
      { vi: "Tối", ko: "저녁" },
      { vi: "Đêm", ko: "밤" },
      { vi: "Bây giờ", ko: "지금" },
      { vi: "Sớm", ko: "일찍" },
      { vi: "Muộn", ko: "늦게" },
      { vi: "Thứ hai", ko: "월요일" },
    ],
  },
  school: {
    emoji: "📚",
    name: "Trường học",
    level: "beginner",
    words: [
      { vi: "Trường học", ko: "학교" },
      { vi: "Học sinh", ko: "학생" },
      { vi: "Giáo viên", ko: "선생님" },
      { vi: "Sách", ko: "책" },
      { vi: "Bút", ko: "펜" },
      { vi: "Vở", ko: "공책" },
      { vi: "Bài tập", ko: "숙제" },
      { vi: "Thi", ko: "시험" },
      { vi: "Lớp học", ko: "교실" },
      { vi: "Học", ko: "공부하다" },
      { vi: "Đọc", ko: "읽다" },
      { vi: "Viết", ko: "쓰다" },
      { vi: "Nghe", ko: "듣다" },
      { vi: "Nói", ko: "말하다" },
      { vi: "Câu hỏi", ko: "질문" },
      { vi: "Câu trả lời", ko: "답" },
    ],
  },
  weather: {
    emoji: "🌤️",
    name: "Thời tiết",
    level: "intermediate",
    words: [
      { vi: "Thời tiết", ko: "날씨" },
      { vi: "Nắng", ko: "맑다" },
      { vi: "Mưa", ko: "비" },
      { vi: "Tuyết", ko: "눈" },
      { vi: "Gió", ko: "바람" },
      { vi: "Nóng", ko: "덥다" },
      { vi: "Lạnh", ko: "춥다" },
      { vi: "Ấm", ko: "따뜻하다" },
      { vi: "Mây", ko: "구름" },
      { vi: "Bão", ko: "태풍" },
      { vi: "Độ ẩm", ko: "습도" },
      { vi: "Nhiệt độ", ko: "온도" },
      { vi: "Mùa xuân", ko: "봄" },
      { vi: "Mùa hè", ko: "여름" },
      { vi: "Mùa thu", ko: "가을" },
      { vi: "Mùa đông", ko: "겨울" },
    ],
  },
  travel: {
    emoji: "✈️",
    name: "Du lịch",
    level: "intermediate",
    words: [
      { vi: "Du lịch", ko: "여행" },
      { vi: "Sân bay", ko: "공항" },
      { vi: "Vé", ko: "표" },
      { vi: "Khách sạn", ko: "호텔" },
      { vi: "Hộ chiếu", ko: "여권" },
      { vi: "Hành lý", ko: "짐" },
      { vi: "Bản đồ", ko: "지도" },
      { vi: "Đường", ko: "길" },
      { vi: "Bên trái", ko: "왼쪽" },
      { vi: "Bên phải", ko: "오른쪽" },
      { vi: "Thẳng", ko: "직진" },
      { vi: "Gần", ko: "가까이" },
      { vi: "Xa", ko: "멀리" },
      { vi: "Ở đâu?", ko: "어디예요?" },
      { vi: "Taxi", ko: "택시" },
      { vi: "Ga tàu", ko: "역" },
    ],
  },
  emotions: {
    emoji: "💛",
    name: "Cảm xúc",
    level: "intermediate",
    words: [
      { vi: "Vui", ko: "기쁘다" },
      { vi: "Buồn", ko: "슬프다" },
      { vi: "Giận", ko: "화나다" },
      { vi: "Sợ", ko: "무섭다" },
      { vi: "Yêu", ko: "사랑하다" },
      { vi: "Thích", ko: "좋아하다" },
      { vi: "Ghét", ko: "싫어하다" },
      { vi: "Mệt", ko: "피곤하다" },
      { vi: "Hạnh phúc", ko: "행복하다" },
      { vi: "Lo lắng", ko: "걱정하다" },
      { vi: "Ngạc nhiên", ko: "놀라다" },
      { vi: "Cô đơn", ko: "외롭다" },
      { vi: "Hồi hộp", ko: "긴장하다" },
      { vi: "Thư giãn", ko: "편안하다" },
      { vi: "Cảm ơn (cảm xúc)", ko: "고맙다" },
      { vi: "Tự hào", ko: "자랑스럽다" },
    ],
  },
  work: {
    emoji: "💼",
    name: "Công việc",
    level: "intermediate",
    words: [
      { vi: "Công việc", ko: "일" },
      { vi: "Văn phòng", ko: "사무실" },
      { vi: "Đồng nghiệp", ko: "동료" },
      { vi: "Sếp", ko: "상사" },
      { vi: "Họp", ko: "회의" },
      { vi: "Lương", ko: "월급" },
      { vi: "Làm việc", ko: "일하다" },
      { vi: "Nghỉ", ko: "쉬다" },
      { vi: "Bận", ko: "바쁘다" },
      { vi: "Xin nghỉ", ko: "휴가" },
      { vi: "Dự án", ko: "프로젝트" },
      { vi: "Email", ko: "이메일" },
      { vi: "Hạn chót", ko: "마감" },
      { vi: "Thăng tiến", ko: "승진" },
      { vi: "Phỏng vấn", ko: "면접" },
      { vi: "Kinh nghiệm", ko: "경험" },
    ],
  },
  health: {
    emoji: "🏥",
    name: "Sức khỏe",
    level: "intermediate",
    words: [
      { vi: "Sức khỏe", ko: "건강" },
      { vi: "Bệnh viện", ko: "병원" },
      { vi: "Bác sĩ", ko: "의사" },
      { vi: "Thuốc", ko: "약" },
      { vi: "Đau", ko: "아프다" },
      { vi: "Sốt", ko: "열" },
      { vi: "Ho", ko: "기침" },
      { vi: "Cảm lạnh", ko: "감기" },
      { vi: "Đầu", ko: "머리" },
      { vi: "Bụng", ko: "배" },
      { vi: "Tập thể dục", ko: "운동" },
      { vi: "Ngủ", ko: "자다" },
      { vi: "Nghỉ ngơi", ko: "휴식" },
      { vi: "Khỏe mạnh", ko: "건강하다" },
      { vi: "Dị ứng", ko: "알레르기" },
      { vi: "Khẩn cấp", ko: "응급" },
    ],
  },
};

const GOOD_MESSAGES = [
  "Matcha yoooo~ 🍵",
  "Làm tốt lắm! ✨",
  "Cuteee~ 💚",
  "Ố là la! Giỏi quá!",
  "Perfect matcha pair! 🍃",
];

const NOTEBOOK_KEY = "korean_flashcards_notebook";

const state = {
  selectedTopic: null,
  words: [],
  selected: null,
  matched: 0,
  moves: 0,
  locked: false,
  timerInterval: null,
  timeLeft: TIMER_SECONDS,
  timerRunning: false,
  gameStarted: false,
  studyWords: [],
  studyIndex: 0,
  studyFlipped: false,
};

const els = {};

function $(id) {
  return document.getElementById(id);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWords(topicId) {
  return shuffle(TOPICS[topicId].words).slice(0, WORDS_PER_ROUND).map((w, i) => ({
    ...w,
    pairId: i,
  }));
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function loadNotebook() {
  try {
    const raw = localStorage.getItem(NOTEBOOK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotebook(items) {
  localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(items));
}

function addToNotebook(vi, ko, topicName) {
  const items = loadNotebook();
  if (items.some((i) => i.vi === vi && i.ko === ko)) return;
  items.unshift({ vi, ko, topic: topicName, date: new Date().toLocaleDateString("vi-VN") });
  saveNotebook(items.slice(0, 100));
  renderNotebook();
}

function renderNotebook() {
  const items = loadNotebook();
  els.notebookList.innerHTML = "";
  els.notebookEmpty.classList.toggle("hidden", items.length > 0);
  els.notebookMeta.textContent = items.length ? `${items.length} từ cần ôn lại` : "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "notebook-item";
    li.innerHTML = `
      <span class="vi"></span>
      <span class="arrow">↔</span>
      <span class="ko"></span>
    `;
    li.querySelector(".vi").textContent = item.vi;
    li.querySelector(".ko").textContent = item.ko;
    els.notebookList.appendChild(li);
  });
}

function renderTopics() {
  els.topicGrid.innerHTML = "";
  Object.entries(TOPICS).forEach(([id, topic]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "topic-btn";
    btn.dataset.topic = id;
    btn.innerHTML = `
      <span class="topic-emoji">${topic.emoji}</span>
      <span class="topic-name"></span>
      <span class="topic-level ${topic.level}"></span>
    `;
    btn.querySelector(".topic-name").textContent = topic.name;
    btn.querySelector(".topic-level").textContent =
      topic.level === "beginner" ? "Sơ cấp" : "Trung cấp";
    btn.addEventListener("click", () => selectTopic(id));
    els.topicGrid.appendChild(btn);
  });
}

function selectTopic(id) {
  state.selectedTopic = id;
  document.querySelectorAll(".topic-btn").forEach((b) => {
    b.classList.toggle("selected", b.dataset.topic === id);
  });
  const topic = TOPICS[id];
  const level = topic.level === "beginner" ? "Sơ cấp" : "Trung cấp";
  els.selectedTopicLabel.textContent = `${topic.emoji} ${topic.name} · ${WORDS_PER_ROUND} từ · ${level}`;
  els.btnStart.disabled = false;
  els.btnStudy.disabled = false;
}

function showView(name) {
  els.viewMenu.classList.toggle("active", name === "menu");
  els.viewGame.classList.toggle("active", name === "game");
  els.viewStudy.classList.toggle("active", name === "study");
}

function showFx(text, type) {
  els.fxPopup.textContent = text;
  els.fxPopup.className = `fx-popup ${type}`;
  void els.fxPopup.offsetWidth;
  els.fxPopup.classList.add("show");
  if (type === "good") spawnConfetti();
  setTimeout(() => els.fxPopup.classList.remove("show"), 1200);
}

function spawnConfetti() {
  const colors = ["#a8d5a2", "#d4ecd0", "#f5eed5", "#6b9e64", "#f5d5d5"];
  for (let i = 0; i < 18; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = 40 + Math.random() * 20 + "%";
    c.style.top = 40 + Math.random() * 10 + "%";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1500);
  }
}

function updateHud() {
  els.hudMoves.textContent = `Lượt: ${state.moves}`;
  els.hudMatched.textContent = `Đúng: ${state.matched}/${WORDS_PER_ROUND}`;
  els.hudTimer.textContent = formatTime(state.timeLeft);
  els.hudTimer.classList.toggle("warning", state.timeLeft <= 30 && state.timerRunning);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  state.timerRunning = false;
  els.btnTimer.classList.remove("running");
  els.btnTimer.textContent = "⏱ Bắt đầu đếm giờ (2 phút)";
}

function startTimer() {
  if (state.timerRunning) {
    stopTimer();
    return;
  }
  state.timeLeft = TIMER_SECONDS;
  state.timerRunning = true;
  els.btnTimer.classList.add("running");
  els.btnTimer.textContent = "⏸ Dừng đếm giờ";
  updateHud();

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateHud();
    if (state.timeLeft <= 0) {
      stopTimer();
      showFx("Hết giờ rồi! ⏰", "bad");
      if (state.matched < WORDS_PER_ROUND) endGame(false);
    }
  }, 1000);
}

function makeChip(word, lang) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `word-chip ${lang}`;
  btn.dataset.pairId = String(word.pairId);
  btn.dataset.lang = lang;
  btn.textContent = lang === "vi" ? word.vi : word.ko;
  btn.style.animationDelay = `${word.pairId * 0.03}s`;
  btn.addEventListener("click", () => onWordClick(btn, word, lang));
  return btn;
}

function renderMatchBoard() {
  els.colVi.innerHTML = "";
  els.colKo.innerHTML = "";
  const viList = shuffle([...state.words]);
  const koList = shuffle([...state.words]);
  viList.forEach((w) => els.colVi.appendChild(makeChip(w, "vi")));
  koList.forEach((w) => els.colKo.appendChild(makeChip(w, "ko")));
}

function clearSelection() {
  document.querySelectorAll(".word-chip.selected").forEach((el) => el.classList.remove("selected"));
  state.selected = null;
}

function onWordClick(btn, word, lang) {
  if (!state.gameStarted || state.locked || btn.classList.contains("matched")) return;

  if (state.selected && state.selected.lang === lang) {
    clearSelection();
    if (state.selected.pairId === word.pairId) return;
  }

  btn.classList.add("selected");

  if (!state.selected) {
    state.selected = { el: btn, word, lang, pairId: word.pairId };
    return;
  }

  if (state.selected.lang === lang) {
    state.selected.el.classList.remove("selected");
    state.selected = { el: btn, word, lang, pairId: word.pairId };
    return;
  }

  state.moves++;
  updateHud();
  checkMatch(state.selected, { el: btn, word, lang, pairId: word.pairId });
}

function checkMatch(a, b) {
  state.locked = true;
  const topic = TOPICS[state.selectedTopic];

  if (a.pairId === b.pairId) {
    setTimeout(() => {
      a.el.classList.add("matched");
      b.el.classList.add("matched");
      state.matched++;
      state.selected = null;
      state.locked = false;
      updateHud();
      showFx(GOOD_MESSAGES[Math.floor(Math.random() * GOOD_MESSAGES.length)], "good");

      if (state.matched === WORDS_PER_ROUND) {
        stopTimer();
        setTimeout(() => endGame(true), 700);
      }
    }, 280);
  } else {
    addToNotebook(a.word.vi, a.word.ko, topic.name);
    addToNotebook(b.word.vi, b.word.ko, topic.name);
    a.el.classList.add("wrong");
    b.el.classList.add("wrong");
    showFx("Tteng! 😵", "bad");

    setTimeout(() => {
      a.el.classList.remove("selected", "wrong");
      b.el.classList.remove("selected", "wrong");
      state.selected = null;
      state.locked = false;
    }, 700);
  }
}

function startGame() {
  if (!state.selectedTopic) return;

  state.words = pickWords(state.selectedTopic);
  state.selected = null;
  state.matched = 0;
  state.moves = 0;
  state.locked = false;
  state.gameStarted = true;
  state.timeLeft = TIMER_SECONDS;
  stopTimer();

  showView("game");
  const topic = TOPICS[state.selectedTopic];
  els.gameTopicLabel.textContent = `${topic.emoji} ${topic.name}`;
  renderMatchBoard();
  updateHud();
}

function endGame(won) {
  state.gameStarted = false;
  els.modalTitle.textContent = won ? "🍵 Matcha Victory!" : "⏰ Hết thời gian!";
  els.modalBody.textContent = won
    ? `Bạn nối đúng ${WORDS_PER_ROUND} cặp trong ${state.moves} lượt! Cuteee~`
    : `Bạn nối được ${state.matched}/${WORDS_PER_ROUND} cặp. Xem sổ tay để ôn lại nhé!`;
  els.winModal.classList.add("show");
}

function backToMenu() {
  stopTimer();
  state.gameStarted = false;
  els.winModal.classList.remove("show");
  showView("menu");
}

function clearNotebook() {
  if (confirm("Xóa toàn bộ sổ tay ghi chú?")) {
    saveNotebook([]);
    renderNotebook();
  }
}

/* —— Study flashcards —— */
function startStudy() {
  if (!state.selectedTopic) return;
  state.studyWords = pickWords(state.selectedTopic);
  state.studyIndex = 0;
  state.studyFlipped = false;
  showView("study");
  const topic = TOPICS[state.selectedTopic];
  els.studyTopicLabel.textContent = `${topic.emoji} ${topic.name}`;
  renderStudyCard();
}

function renderStudyCard() {
  const w = state.studyWords[state.studyIndex];
  if (!w) return;
  state.studyFlipped = false;
  els.studyCard.classList.remove("flipped");
  els.studyFrontText.textContent = w.vi;
  els.studyBackText.textContent = w.ko;
  els.studyProgress.textContent = `${state.studyIndex + 1} / ${state.studyWords.length}`;
  els.btnStudyPrev.disabled = state.studyIndex === 0;
  els.btnStudyNext.disabled = state.studyIndex >= state.studyWords.length - 1;
}

function toggleStudyFlip() {
  state.studyFlipped = !state.studyFlipped;
  els.studyCard.classList.toggle("flipped", state.studyFlipped);
}

function init() {
  els.viewMenu = $("view-menu");
  els.viewGame = $("view-game");
  els.viewStudy = $("view-study");
  els.topicGrid = $("topic-grid");
  els.selectedTopicLabel = $("selected-topic-label");
  els.btnStart = $("btn-start");
  els.btnStudy = $("btn-study");
  els.colVi = $("col-vi");
  els.colKo = $("col-ko");
  els.hudMoves = $("hud-moves");
  els.hudMatched = $("hud-matched");
  els.hudTimer = $("hud-timer");
  els.btnTimer = $("btn-timer");
  els.gameTopicLabel = $("game-topic-label");
  els.fxPopup = $("fx-popup");
  els.notebookList = $("notebook-list");
  els.notebookEmpty = $("notebook-empty");
  els.notebookMeta = $("notebook-meta");
  els.winModal = $("win-modal");
  els.modalTitle = $("modal-title");
  els.modalBody = $("modal-body");
  els.btnPlayAgain = $("btn-play-again");
  els.btnBackMenu = $("btn-back-menu");
  els.btnModalMenu = $("btn-modal-menu");
  els.btnClearNotebook = $("btn-clear-notebook");
  els.studyCard = $("study-card");
  els.studyFrontText = $("study-front-text");
  els.studyBackText = $("study-back-text");
  els.studyProgress = $("study-progress");
  els.studyTopicLabel = $("study-topic-label");
  els.btnStudyPrev = $("btn-study-prev");
  els.btnStudyNext = $("btn-study-next");
  els.btnStudyToGame = $("btn-study-to-game");
  els.btnStudyBack = $("btn-study-back");

  renderTopics();
  renderNotebook();

  els.btnStart.addEventListener("click", startGame);
  els.btnStudy.addEventListener("click", startStudy);
  els.btnTimer.addEventListener("click", () => {
    if (!state.gameStarted) return;
    startTimer();
  });
  els.btnPlayAgain.addEventListener("click", () => {
    els.winModal.classList.remove("show");
    startGame();
  });
  els.btnBackMenu.addEventListener("click", backToMenu);
  els.btnModalMenu.addEventListener("click", backToMenu);
  els.btnClearNotebook.addEventListener("click", clearNotebook);

  els.studyCard.addEventListener("click", toggleStudyFlip);
  els.btnStudyPrev.addEventListener("click", () => {
    if (state.studyIndex > 0) {
      state.studyIndex--;
      renderStudyCard();
    }
  });
  els.btnStudyNext.addEventListener("click", () => {
    if (state.studyIndex < state.studyWords.length - 1) {
      state.studyIndex++;
      renderStudyCard();
    }
  });
  els.btnStudyToGame.addEventListener("click", startGame);
  els.btnStudyBack.addEventListener("click", backToMenu);
}

document.addEventListener("DOMContentLoaded", init);

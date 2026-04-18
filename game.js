/* ============================================================
   Lógica do jogo — 4 modos, 5 níveis, curiosidades, vidas
   ============================================================ */

const VERSES = [
  '"Tudo posso naquele que me fortalece." — Filipenses 4:13',
  '"O Senhor é o meu pastor, nada me faltará." — Salmos 23:1',
  '"A fé é o firme fundamento das coisas que se esperam." — Hebreus 11:1',
  '"Confia no Senhor de todo o teu coração." — Provérbios 3:5',
  '"Porque Deus amou o mundo de tal maneira..." — João 3:16',
  '"Esforça-te, e tem bom ânimo." — Josué 1:9',
  '"Buscai primeiro o Reino de Deus e a sua justiça." — Mateus 6:33',
  '"Não temas, porque eu sou contigo." — Isaías 41:10',
];

const DIFFICULTY = {
  easy:   { pairs: 8,  lives: 10, className: "grid-easy",   label: "Fácil" },
  medium: { pairs: 12, lives: 10, className: "grid-medium", label: "Médio" },
  hard:   { pairs: 16, lives: 10, className: "grid-hard",   label: "Difícil" },
  expert: { pairs: 20, lives: 10, className: "grid-expert", label: "Expert" },
  master: { pairs: 24, lives: 15, className: "grid-master", label: "Mestre" },
};

const TOAST_DURATION = 12000; // 12 segundos
const PREVIEW_DURATION = 8000; // 8 segundos mostrando todas as cartas

const state = {
  mode: "characters",
  cards: [],
  flipped: [],
  matched: 0,
  moves: 0,
  score: 0,
  lives: 10,
  totalPairs: 0,
  timer: 0,
  timerId: null,
  locked: false,
  started: false,
  gameOver: false,
};

const $ = (id) => document.getElementById(id);
const board      = $("board");
const movesEl    = $("moves");
const pairsEl    = $("pairs");
const timerEl    = $("timer");
const scoreEl    = $("score");
const livesEl    = $("lives");
const livesStat  = $("livesStat");
const difficulty = $("difficulty");
const restartBtn = $("restart");

const winModal   = $("winModal");
const finalMode  = $("finalMode");
const finalLevel = $("finalLevel");
const finalMoves = $("finalMoves");
const finalTime  = $("finalTime");
const finalScore = $("finalScore");
const verseEl    = $("verse");
const playAgain  = $("playAgain");

const gameOverModal = $("gameOverModal");
const goMode     = $("goMode");
const goLevel    = $("goLevel");
const goPairs    = $("goPairs");
const goTime     = $("goTime");
const tryAgain   = $("tryAgain");

const tabs = document.querySelectorAll(".tab");

const toast      = $("curiosityToast");
const toastIcon  = toast.querySelector(".toast-icon");
const toastTitle = $("toastTitle");
const toastText  = $("toastText");
const toastClose = toast.querySelector(".toast-close");
let toastTimer = null;

/* ---------------- Utilidades ---------------- */
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/* ---------------- Timer ---------------- */
function startTimer() {
  if (state.timerId) return;
  state.timerId = setInterval(() => {
    state.timer++;
    timerEl.textContent = formatTime(state.timer);
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

/* ---------------- UI ---------------- */
function updateStats() {
  movesEl.textContent = state.moves;
  pairsEl.textContent = `${state.matched} / ${state.totalPairs}`;
  scoreEl.textContent = state.score;
  livesEl.textContent = `❤ ${state.lives}`;

  livesStat.classList.toggle("low", state.lives > 0 && state.lives <= 3);
}

function createCard(item, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.id = item.id;
  card.dataset.index = index;
  card.innerHTML = `
    <div class="card-face card-back">✡</div>
    <div class="card-face card-front">
      <div class="name">${item.name}</div>
      <div class="art">${item.icon}</div>
    </div>
  `;
  card.addEventListener("click", () => onCardClick(card, item));
  return card;
}

/* ---------------- Toast de curiosidade ---------------- */
function showCuriosity(item) {
  clearTimeout(toastTimer);
  toastIcon.innerHTML = item.icon;
  toastTitle.textContent = item.name;
  toastText.textContent = item.fact;
  toast.classList.add("show");
  toastTimer = setTimeout(hideCuriosity, TOAST_DURATION);
}

function hideCuriosity() {
  toast.classList.remove("show");
}

toastClose.addEventListener("click", hideCuriosity);

/* ---------------- Lógica ---------------- */
function onCardClick(card, item) {
  if (state.locked || state.gameOver) return;
  if (card.classList.contains("flipped")) return;
  if (card.classList.contains("matched")) return;

  if (!state.started) {
    startTimer();
    state.started = true;
  }

  card.classList.add("flipped");
  state.flipped.push({ el: card, item });

  if (state.flipped.length === 2) {
    state.moves++;
    updateStats();
    checkMatch();
  }
}

function flashLives() {
  livesStat.classList.remove("flash");
  void livesStat.offsetWidth;
  livesStat.classList.add("flash");
}

function checkMatch() {
  const [a, b] = state.flipped;
  const isMatch = a.item.id === b.item.id;

  if (isMatch) {
    state.locked = true;
    setTimeout(() => {
      a.el.classList.add("matched");
      b.el.classList.add("matched");
      state.matched++;
      state.score += 50;
      state.flipped = [];
      state.locked = false;
      updateStats();
      showCuriosity(a.item);
      if (state.matched === state.totalPairs) endGame();
    }, 400);
  } else {
    state.locked = true;
    state.lives--;
    state.score = Math.max(0, state.score - 5);
    flashLives();
    updateStats();
    setTimeout(() => {
      a.el.classList.remove("flipped");
      b.el.classList.remove("flipped");
      state.flipped = [];
      state.locked = false;
      if (state.lives <= 0) gameOver();
    }, 900);
  }
}

function calcFinalScore() {
  const timeBonus = Math.max(0, state.totalPairs * 100 - state.timer * 3);
  const livesBonus = state.lives * 20;
  return state.score + timeBonus + livesBonus;
}

function endGame() {
  stopTimer();
  hideCuriosity();
  const finalPts = calcFinalScore();
  state.score = finalPts;
  updateStats();

  finalMode.textContent = MODE_LABELS[state.mode];
  finalLevel.textContent = DIFFICULTY[difficulty.value].label;
  finalMoves.textContent = state.moves;
  finalTime.textContent = formatTime(state.timer);
  finalScore.textContent = finalPts;
  verseEl.textContent = VERSES[Math.floor(Math.random() * VERSES.length)];
  setTimeout(() => winModal.classList.remove("hidden"), 700);
}

function gameOver() {
  state.gameOver = true;
  stopTimer();
  hideCuriosity();

  goMode.textContent  = MODE_LABELS[state.mode];
  goLevel.textContent = DIFFICULTY[difficulty.value].label;
  goPairs.textContent = `${state.matched} / ${state.totalPairs}`;
  goTime.textContent  = formatTime(state.timer);
  setTimeout(() => gameOverModal.classList.remove("hidden"), 400);
}

/* ---------------- Setup ---------------- */
function setup() {
  stopTimer();
  hideCuriosity();
  winModal.classList.add("hidden");
  gameOverModal.classList.add("hidden");

  const level = DIFFICULTY[difficulty.value];
  const pool = GAME_DATA[state.mode];
  const pairs = Math.min(level.pairs, pool.length);

  state.totalPairs = pairs;
  state.matched = 0;
  state.moves = 0;
  state.score = 0;
  state.lives = level.lives;
  state.timer = 0;
  state.flipped = [];
  state.locked = false;
  state.started = false;
  state.gameOver = false;

  timerEl.textContent = "00:00";
  livesStat.classList.remove("low", "flash");
  updateStats();

  board.className = `board ${level.className}`;
  board.innerHTML = "";

  const selected = shuffle(pool).slice(0, pairs);
  const deck = shuffle([...selected, ...selected]);
  const frag = document.createDocumentFragment();
  deck.forEach((item, i) => frag.appendChild(createCard(item, i)));
  board.appendChild(frag);

  previewCards();
}

function previewCards() {
  state.locked = true;

  board.scrollIntoView({ behavior: "smooth", block: "start" });
  board.classList.add("preview-mode");
  showPreviewMessage(PREVIEW_DURATION);

  setTimeout(() => {
    board.classList.remove("preview-mode");
    setTimeout(() => { state.locked = false; }, 500);
  }, PREVIEW_DURATION);
}

function showPreviewMessage(duration) {
  let el = document.getElementById("previewMsg");
  if (!el) {
    el = document.createElement("div");
    el.id = "previewMsg";
    el.className = "preview-msg";
    document.body.appendChild(el);
  }
  let remaining = Math.ceil(duration / 1000);
  el.textContent = `👀 Memorize! ${remaining}s`;
  el.classList.add("show");
  const interval = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      el.textContent = `👀 Memorize! ${remaining}s`;
    } else {
      clearInterval(interval);
      el.classList.remove("show");
    }
  }, 1000);
}

/* ---------------- Eventos ---------------- */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    state.mode = tab.dataset.mode;
    setup();
  });
});

restartBtn.addEventListener("click", setup);
difficulty.addEventListener("change", setup);
playAgain.addEventListener("click", setup);
tryAgain.addEventListener("click", setup);

setup();

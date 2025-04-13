const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setCanvasSize();

let letters = "アァイゥエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
letters = letters.split("");

let fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px Courier New";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);


window.addEventListener("resize", () => {
  setCanvasSize();
  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(1);
  adaptLayout();
});

// 📱 JS-Адаптация интерфейса
function adaptLayout() {
  const nickname = document.querySelector('.nickname');
  const description = document.querySelector('.description');
  if (window.innerWidth < 768) {
    nickname.style.fontSize = "2.2em";
    description.style.fontSize = "1em";
  } else {
    nickname.style.fontSize = "3em";
    description.style.fontSize = "1.2em";
  }
}
adaptLayout();

// 🧬 Пересборка ника
const nicknameElement = document.querySelector('.nickname');
const originalText = nicknameElement.textContent;

function scrambleNickname() {
  let scrambled = '';
  const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = originalText.length;
  let steps = 0;

  const interval = setInterval(() => {
    scrambled = '';
    for (let i = 0; i < length; i++) {
      scrambled += chars[Math.floor(Math.random() * chars.length)];
    }
    nicknameElement.textContent = scrambled;

    steps++;
    if (steps > 10) {
      clearInterval(interval);
      nicknameElement.textContent = originalText;
    }
  }, 80);
}

setInterval(scrambleNickname, 10000);

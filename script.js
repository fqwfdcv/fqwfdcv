const terminal = document.getElementById('terminal');
const content = document.getElementById('mainContent');

const lines = [
  "[BOOTING] >>> system.startCMD()",
  "[OK] console ready...",
  "[INFO] user: 'fqwfdcv'",
  ">>> deploy --all --force",
  "[OK] loading styles...",
  "[OK] connecting github.com...",
  "[OK] connecting instagram.com...",
  "[OK] connecting telegram_profile.com...",
  "[OK] connecting telegram_channel.com...",
  "[OK] connecting steam.com...",
  "[OK] telegram_profile.js loaded",
  "[INFO] all systems operational ✔",
  "[OK] fqwfdcv online.",
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    terminal.innerHTML += lines[i] + '\n';
    i++;
    setTimeout(typeLine, 400);
  } else {
    setTimeout(() => {
      content.classList.add('visible');
    }, 1000);
  }
}

window.onload = typeLine;

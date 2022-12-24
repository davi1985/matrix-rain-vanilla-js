const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const fontSize = 18;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = [
  '日',
  'ﾊ',
  'ﾐ',
  'ﾋ',
  'ｰ',
  'ｳ',
  'ｼ',
  'ﾅ',
  'ﾓ',
  'ﾆ',
  'ｻ',
  'ﾜ',
  'ﾂ',
  'ｵ',
  'ﾘ',
  'ｱ',
  'ﾎ',
  'ﾃ',
  'ﾏ',
  'ｹ',
  'ﾒ',
  'ｴ',
  'ｶ',
  'ｷ',
  'ﾑ',
  'ﾕ',
  'ﾗ',
  'ｾ',
  'ﾈ',
  'ｽ',
  'ﾀ',
  'ﾇ',
  'ﾍ',
  ':',
  '・',
  '.',
  '=',
  '*',
  '+',
  '-',
  '<',
  '>',
  '¦',
  '｜',
  'ﾘ',
];

const columns = canvas.width / fontSize;

const drops = new Array(Math.floor(columns)).fill(1);

const backgroundColor = 'rgba(0, 0, 0, 0.05)';
const colorLetter = '#0f0';

function drawMatrix() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colorLetter;
  ctx.font = `${fontSize}px arial`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  setTimeout(() => window.requestAnimationFrame(draw), 50);
}

drawMatrix();

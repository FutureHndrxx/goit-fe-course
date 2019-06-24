const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colorSwitch = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.switchId = setInterval(() => {
      let color = randomIntegerFromInterval(0, colors.length - 1);
      updateColor(color);
    }, 1000);
  },
  stop() {
    clearInterval(this.switchId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));

function updateColor(color) {
  document.body.style.backgroundColor = `${colors[color]}`;
}

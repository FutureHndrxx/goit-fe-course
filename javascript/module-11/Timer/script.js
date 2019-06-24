class CountdownTimer {
  constructor({ selector: selector, targetDate: targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  getFreeTime() {
    const currentdays = this.selector.querySelector('[data-value="days"]');
    const currenthours = this.selector.querySelector('[data-value="hours"]');
    const currentmins = this.selector.querySelector('[data-value="mins"]');
    const currentsecs = this.selector.querySelector('[data-value="secs"]');

    const timerId = setInterval(() => {
      const time = this.targetDate.getTime() - Date.now();
      if (time < 0) {
        clearInterval(timerId);
        const zero = '00';
        currentdays.textContent = zero;
        currenthours.textContent = zero;
        currentmins.textContent = zero;
        currentsecs.textContent = zero;
      } else {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        currentdays.textContent = this.pad(days);
        currenthours.textContent = this.pad(hours);
        currentmins.textContent = this.pad(mins);
        currentsecs.textContent = this.pad(secs);
      }
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('June 20, 2019'),
});

timer.getFreeTime();

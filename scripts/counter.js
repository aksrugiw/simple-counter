const MESSAGE = {
  0: 'No, no, only positive numbers 🤓',
  5: 'That’s a good start, keep going 👌',
  13: 'Oh no, unlucky 13! 😱 Quick! Change it!',
  20: 'Wow, you’re so patient 😅',
  50: 'Still there? Are you bored or sth? 😴',
  100: 'Nice job! 👍 You got 💯 points!',
  110: 'Really? Still there? Nothing will happen anymore... 😐',
  150: 'Come on! Go home, you’re drunk 🍻😃',
};

export class Counter {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  increase() {
    this.config.current += 1;
    this.render();
  }

  decrease() {
    if (!this.config.current) {
      return;
    }
    this.config.current -= 1;
    this.render();
  }

  render() {
    if (this.config.count) {
      this.config.count.innerHTML = this.config.current;
      this.showMessage();
    }
  }

  showMessage() {
    if (Object.keys(MESSAGE).includes(this.config.current.toString())) {
      return this.showNotification(MESSAGE[this.config.current]);
    }
  }

  hideNotification() {
    this.config.overlay.classList.add('hide');
  }

  showNotification(message) {
    this.config.notificationContent.innerHTML = message;
    this.config.overlay.classList.remove('hide');
  }

  setupClickEvents() {
    this.config.increaseButton.addEventListener('click', () => this.increase());
    this.config.decreaseButton.addEventListener('click', () => this.decrease());
    this.config.close.addEventListener('click', () => this.hideNotification());
    this.config.overlay.addEventListener('click', () => this.hideNotification());
  }
}

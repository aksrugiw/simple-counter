import { Notification } from './notification.js';

export class Counter {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  increase() {
    this.config.current += 1;
    this.render();
    this.config.notification.showNotification(this.config.current);
  }

  decrease() {
    if (!this.config.current) {
      this.config.notification.showNotification(0);
      return;
    }
    this.config.current -= 1;
    this.render();
  }

  render() {
    if (this.config.count) {
      this.config.count.innerHTML = this.config.current;
    }
  }

  setupClickEvents() {
    this.config.increaseButton.addEventListener('click', () => this.increase());
    this.config.decreaseButton.addEventListener('click', () => this.decrease());
  }
}

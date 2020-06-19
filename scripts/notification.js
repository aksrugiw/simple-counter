export class Notification {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  hideNotification() {
    this.config.overlay.classList.add('hide');
  }

  showNotification(index) {
    if (Object.keys(this.config.messages).includes(index.toString())) {
      this.config.notificationContent.innerHTML = this.config.messages[index];
      this.config.overlay.classList.remove('hide');
    }
  }

  setupClickEvents() {
    this.config.close.addEventListener('click', () => this.hideNotification());
    this.config.overlay.addEventListener('click', () => this.hideNotification());
  }
}

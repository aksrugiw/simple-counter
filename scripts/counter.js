export class Counter {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  increase() {
    this.config.current += 1;
    this.config.count.innerText = this.config.current;
  }

  decrease() {
    if (!this.config.current) {
      return;
    }
    this.config.current -= 1;
    this.config.count.innerText = this.config.current;
  }

  setupClickEvents() {
    this.config.increaseButton.addEventListener('click', () => this.increase());
    this.config.decreaseButton.addEventListener('click', () => this.decrease());
  }
}

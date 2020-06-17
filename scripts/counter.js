export class Counter {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  increase() {
    this.config.current += 1;
    // console.log('in increase fn', );
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
    }
  }

  setupClickEvents() {
    this.config.increaseButton.addEventListener('click', () => this.increase());
    this.config.decreaseButton.addEventListener('click', () => this.decrease());
  }
}

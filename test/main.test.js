import { Counter } from '../scripts/counter.js';

let count, current, increaseButton, decreaseButton, counter;
beforeEach(() => {
  document.body.innerHTML = `
  <h2>Count: <span class="count">2</span></h2>
  <button class="increase-btn">+</button>
  <button class="decrease-btn">-</button>
`;
  count = document.querySelector('.count');
  current = parseInt(count.innerHTML);
  increaseButton = document.querySelector('.increase-btn');
  decreaseButton = document.querySelector('.decrease-btn');
  counter = new Counter({
    current,
    count,
    increaseButton,
    decreaseButton,
  });
});

describe('main', () => {
  test('update current number in element after increase', () => {
    counter.setupClickEvents();

    increaseButton.click();

    expect(parseInt(count.innerHTML)).toBe(3);
  });
  test('update current number in element after decrease', () => {
    counter.setupClickEvents();

    decreaseButton.click();

    expect(parseInt(count.innerHTML)).toBe(1);
  });
});

import { Counter } from '../scripts/counter.js';
import { Notification } from '../scripts/notification.js';

let count, current, increaseButton, decreaseButton, counter, close, overlay, notificationContent, notification;
beforeAll(() => {
  document.body.innerHTML = `
  <h2>Count: <span class="count">2</span></h2>
  <button class="increase-btn">+</button>
  <button class="decrease-btn">-</button>
  <div class="overlay hide">
    <div class="notification">
      <p class="content"></p>
      <button class="close"></button>
    </div>
  </div>
`;
  count = document.querySelector('.count');
  current = parseInt(count.innerHTML);
  increaseButton = document.querySelector('.increase-btn');
  decreaseButton = document.querySelector('.decrease-btn');

  close = document.querySelector('.notification .close');
  overlay = document.querySelector('.overlay');
  notificationContent = document.querySelector('.notification .content');
  notification = new Notification({
    showNotification: jest.fn(),
    messages: { 3: 'test notification' },
    close,
    overlay,
    notificationContent,
  });
  counter = new Counter({
    current,
    count,
    increaseButton,
    decreaseButton,
    notification,
  });
});

describe('main counter', () => {
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
describe('main notification', () => {
  test('display overlay after increase when reach specific number', () => {
    counter.setupClickEvents();

    increaseButton.click();

    expect(overlay.classList.contains('hide')).toBe(false);
  });
  test('display notification with specific messages after increase when reach specific number', () => {
    counter.setupClickEvents();

    increaseButton.click();

    expect(notificationContent.innerHTML).toBe('test notification');
  });
});

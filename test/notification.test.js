import { Notification } from '../scripts/notification.js';

beforeAll(() => {
  document.body.innerHTML = `
  <h2>Count: <span class="count">2</span></h2>
  <button class="increase-btn">+</button>
  <button class="decrease-btn">-</button>
  <div class="overlay">
    <div class="notification">
      <p class="content"></p>
      <button class="close"></button>
    </div>
  </div>
`;
});
describe('Notification', () => {
  test('create object', () => {
    const notification = new Notification({
      messages: { 3: 'test notification' },
    });

    expect(notification.config.messages).toEqual({ 3: 'test notification' });
  });

  test('hide notification after click close button', () => {
    const close = document.querySelector('.notification .close');
    const overlay = document.querySelector('.overlay');
    const notification = new Notification({
      close,
      overlay,
    });
    notification.hideNotification = jest.fn();

    notification.setupClickEvents();
    close.click();

    expect(notification.hideNotification).toHaveBeenCalled();
  });

  test('hide overlay after click close button', () => {
    const close = document.querySelector('.notification .close');
    const overlay = document.querySelector('.overlay');
    const notification = new Notification({
      close,
      overlay,
    });

    notification.setupClickEvents();
    close.click();

    expect(overlay.classList.contains('hide')).toBe(true);
  });
});

import { Counter } from '../scripts/counter.js';

describe('Counter', () => {
  test('create object', () => {
    const counter = new Counter({
      current: 5,
    });

    expect(counter.config.current).toBe(5);
  });

  test('increase current number when call increase', () => {
    const notification = {
      showNotification: jest.fn(),
    };
    const counter = new Counter({
      current: 0,
      notification,
    });

    counter.increase();

    expect(counter.config.current).toBe(1);
  });

  test('decrease current number when call decrease', () => {
    const counter = new Counter({
      current: 1,
    });

    counter.decrease();

    expect(counter.config.current).toBe(0);
  });

  test('does not call render when try to decrease 0', () => {
    const notification = {
      showNotification: jest.fn(),
    };
    const counter = new Counter({
      current: 0,
      notification,
    });
    counter.render = jest.fn();

    counter.decrease();

    expect(counter.render).not.toHaveBeenCalled();
  });

  test('display notification when try to decrease 0', () => {
    const notification = {
      showNotification: jest.fn(),
    };
    const counter = new Counter({
      current: 0,
      notification,
    });
    counter.decrease();

    expect(counter.config.notification.showNotification).toHaveBeenCalled();
  });
});

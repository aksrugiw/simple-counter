import { Counter } from '../scripts/counter.js';

describe('Counter', () => {
  test('create object', () => {
    const counter = new Counter({
      current: 5,
    });

    expect(counter.config.current).toBe(5);
  });

  test('increase current number when call increase', () => {
    const counter = new Counter({
      current: 0,
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

  test('not decrease current number if equal 0', () => {
    const counter = new Counter({
      current: 0,
    });
    counter.render = jest.fn();

    counter.decrease();

    expect(counter.render).not.toHaveBeenCalled();
  });
});

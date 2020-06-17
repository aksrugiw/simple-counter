import { Counter } from '../scripts/counter.js';

describe('Counter', () => {
  test('create object', () => {
    const counter = new Counter({
      current: 0
    });

    expect(counter.config.current).toBe(0);
  });
});

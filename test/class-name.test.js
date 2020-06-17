import { ClassName } from '../scripts/class-name.js';

describe('ClassName', () => {
  test('create object', () => {
    const className = new ClassName({
      a: {}
    });

    expect(className.config.a).toMatchObject({});
  });
});

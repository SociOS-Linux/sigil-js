const {sigil, stringRenderer} = require('../lib/dist/index');

const config = {
  patp: 'zod',
  renderer: stringRenderer,
  size: 128,
};

const config2 = {
  patp: 'zod',
  size: 128,
};

test('Uses defaults', () => {
  expect(() => {
    sigil(config);
  }).not.toThrow();
});

import { buildMockProject } from './utils';

describe('confuse', () => {
  test('default', async () => {
    const target = await buildMockProject();
    const module = require(target);

    expect(module).toMatchSnapshot();
  });
});
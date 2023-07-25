import { exec } from 'child_process';
import path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const NODE_MODULES = path.resolve(PROJECT_ROOT, 'node_modules');
const MOCK_ROOT = path.resolve(PROJECT_ROOT, 'tests/mock');

export function buildMockProject(): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`${NODE_MODULES}/.bin/tsc -p ${MOCK_ROOT} && ${NODE_MODULES}/.bin/rollup -c ${MOCK_ROOT}/rollup.config.js`, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
    
      resolve(`${MOCK_ROOT}/dist/index.js`);
    });
  })
}
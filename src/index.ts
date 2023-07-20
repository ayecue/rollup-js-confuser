import { ObfuscateOptions } from 'js-confuser/src/options';
import { Plugin } from 'rollup';
const JsConfuser = require('js-confuser');

interface ConfuserPluginOptions extends ObfuscateOptions {}

export function confuse(
  options: ConfuserPluginOptions = {
    target: 'node',
    preset: 'medium'
  }
): Plugin {
  return {
    name: 'confuse',
    renderChunk: async (code) => {
      return {
        code: await JsConfuser.obfuscate(code, options)
      };
    }
  };
}

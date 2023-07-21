import { ObfuscateOptions } from 'js-confuser/src/options';
import type { Plugin } from 'rollup';
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
    },
    options: function (options) {
      const external = [];

      if (options.external != null) {
        if (Array.isArray(options.external)) {
          external.push(...options.external);
        } else {
          external.push(options.external);
        }
      }

      return {
        ...options,
        external: [
          ...external,
          '@redacted/enterprise-plugin/package',
          '@redacted/components/package',
          '@redacted/enterprise-plugin'
        ]
      };
    }
  };
}

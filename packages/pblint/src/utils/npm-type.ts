import https from 'https';
import { sync as commandExistsSync } from 'command-exists';

// 小桔子科技内部 npm 地址
const registry = 'https://npm.intra.xiaojukeji.com/';
/**
 * npm 类型
 *  yarn npm
 */
const promise: Promise<'npm' | 'yarn'> = new Promise((resolve) => {
  if (!commandExistsSync('yarn')) return resolve('npm');

  https
    .get(registry, { timeout: 2000 }, () => resolve('yarn'))
    .on('error', () => resolve('npm'));
});

export default promise;

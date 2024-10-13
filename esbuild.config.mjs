import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';
import { build } from 'esbuild';
import { resolve } from 'path';
import { glob } from 'glob';

const entryPoints = glob.sync('src/**/ *.ts');

build({
  entryPoints: ['./src/**'],
  outdir: './dist',
  platform: 'node',
  format: 'cjs',
  sourcemap: true,
  target: 'esnext',
  bundle: false,
  minify: false,
  logLevel: 'info',
  tsconfig: resolve('./tsconfig.json'),
  plugins: [TsconfigPathsPlugin({ tsconfig: resolve('./tsconfig.json') })]
}).catch(() => process.exit(1));

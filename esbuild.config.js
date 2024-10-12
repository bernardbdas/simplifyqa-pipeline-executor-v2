const esbuild = require('esbuild');
const dotenv = require('dotenv');
const path = require('path');
const glob = require('glob');

const entryPoints = glob.sync('src/**/ *.ts');

dotenv.config();
const ENV_VARS = {
    'process.env.INPUT_PIPELINEID': JSON.stringify(process.env.INPUT_PIPELINEID),
    'process.env.INPUT_APIURL': JSON.stringify(process.env.INPUT_APIURL),
    'process.env.INPUT_APIKEY': JSON.stringify(process.env.INPUT_APIKEY),
    'process.env.INPUT_THRESHOLD': JSON.stringify(process.env.INPUT_THRESHOLD),
    'process.env.INPUT_VERBOSE': JSON.stringify(process.env.INPUT_VERBOSE)
}

// esbuild.build({
//     entryPoints,
//     outdir: './dist',
//     platform: 'node',
//     target: 'esnext',
//     sourcemap: true,
//     format: 'cjs',
//     bundle: true,
//     minify: false,
//     tsconfig: './tsconfig.json',
//     resolveExtensions: ['.ts', '.js']
//     // splitting: false,
//     // keepNames: true,
//     // define: ENV_VARS
// }).catch(() => process.exit(1));

esbuild.build({
    entryPoints,
    bundle: false,
    outdir: './dist',
    platform: 'node',
    format: 'cjs',
    // sourcemap: true,
    tsconfig: './tsconfig.json',
    resolveExtensions: ['.ts', '.js'],
    define: ENV_VARS
}).catch(() => process.exit(1));


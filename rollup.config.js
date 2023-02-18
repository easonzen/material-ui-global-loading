import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
// import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' },
    ],
    external: ['react', '@mui/material'],
    plugins: [
        typescript(),
        babel({ exclude: 'node_modules/**' }),
        // copy({
        //     targets: [{ src: 'src/index.d.ts', dest: 'dist' }],
        // }),
    ],
};

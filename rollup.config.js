import sass from 'rollup-plugin-sass';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
// import styles from 'rollup-plugin-styles';

import pkg from './package.json';
const cssExportMap = {};

// continued
export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false,
        },
    ],
    plugins: [scss(), typescript({ objectHashIgnoreUnknownHack: true })],
    external: ['react', 'react-dom'],
};

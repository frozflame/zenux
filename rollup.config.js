// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            // terser(),
        ],
    },
    {
        input: "src/index.ts",
        output: [{file: "dist/index.d.ts", format: "es"}],
        plugins: [dts.default()],
    },
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/iife/zenux.js",
                format: "iife",
                sourcemap: true,
                name: "zenux"
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            // replace({
            //     'process.env.NODE_ENV': JSON.stringify('production'),
            // }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', {"runtime": "automatic"}]],
                extensions: ['.js', '.jsx']
            }),
            // terser(),
        ],
        external: [],
    }





];
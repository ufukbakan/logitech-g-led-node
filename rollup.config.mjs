//@ts-check
import typescript from "@rollup/plugin-typescript";
import { when, format } from "rollup-plugin-by-output";

export default {
    input: "src/index.ts", // Replace with your entry point
    output: [
        {
            file: "dist/esm/index.mjs",
            format: "es", // EcmaScript Module format for ESM
        },
        {
            file: "dist/cjs/index.cjs",
            format: "cjs", // CommonJS format for CJS
            sourcemap: true, // Include sourcemaps for debugging
        },
        {
            file: "dist/types/index.d.ts",
            format: "system",
        },
    ],
    plugins: [
        typescript({ declaration: false }),
        when(format("system"), () => typescript({ declaration: true, emitDeclarationOnly: true }))
    ],
};

//@ts-check
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
    input: "src/index.ts",
    output: [{ dir: "./dist", format: "system" }],
    plugins: [
        typescript({ declaration: true, emitDeclarationOnly: true, outDir: "./dist/types" }),
        copy({
            targets: [{ src: "./lib", dest: "./dist/" }],
        }),
    ],
};

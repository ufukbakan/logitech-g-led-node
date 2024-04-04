//@ts-check
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [{ file: "./dist/types/index", format: "system" }],
    plugins: [typescript({ declaration: true, emitDeclarationOnly: true })],
};

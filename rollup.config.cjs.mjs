//@ts-check
import typescript from "@rollup/plugin-typescript";

export default {
    input: ["src/index.ts", "src/device.ts", "src/keyboard.ts"],
    output: [
        {
            dir: "dist/cjs",
            // file: "dist/cjs/index.js",
            format: "cjs", // CommonJS format for CJS
        },
    ],
    plugins: [typescript({ declaration: false, outDir: "dist/cjs" })],
};

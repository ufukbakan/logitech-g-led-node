//@ts-check
import typescript from "@rollup/plugin-typescript";

export default {
    input: ["src/index.ts", "src/device.ts", "src/keyboard.ts"],
    output: [
        {
            dir: "dist/esm",
            format: "es", // EcmaScript Module format for ESM
        },
    ],
    plugins: [typescript({ declaration: false, outDir: "dist/esm" })],
};

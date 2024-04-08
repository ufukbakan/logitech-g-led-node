import { defineConfig } from "tsup";
const entryFiles = ["src/index.ts", "src/device.ts", "src/keyboard.ts"];

export default defineConfig([
    {
        entry: entryFiles,
        format: ["cjs"],
        outDir: "dist",
        dts: true,
        sourcemap: false,
        shims: true,
        treeshake: true,
        clean: true,
        minify: true,
        minifyWhitespace: true,
        splitting: true,
        silent: true,
    },
]);

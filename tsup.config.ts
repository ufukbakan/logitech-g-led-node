import { defineConfig } from "tsup";
const entryFiles = ["src/index.ts", "src/device.ts", "src/keyboard.ts"];

export default defineConfig([
    {
        entry: entryFiles,
        format: ["esm", "cjs"],
        outDir: "dist",
        dts: true,
        sourcemap: false,
        shims: true,
        treeshake: false,
        clean: true,
        minify: true,
        minifyWhitespace: true,
        splitting: true,
        silent: true,
    },
]);

import { defineConfig } from "tsup";
const entryFiles = ["src/index.ts", "src/device.ts", "src/keyboard.ts"];

export default defineConfig([
    {
        entry: entryFiles,
        format: ["esm"],
        outDir: "dist/esm",
        dts: true, // Generate declaration file (.d.ts)
        sourcemap: false,
        shims: true,
        treeshake: true,
        clean: true,
    },
    {
        entry: entryFiles,
        format: ["cjs"],
        outDir: "dist/cjs",
        dts: true, // (.d.ts)
        sourcemap: false,
        shims: true,
        cjsInterop: true,
        treeshake: true,
    },
]);

import koffi from "koffi";
import path from "path";
import { fileURLToPath } from "url";
import { getJsEnv, getLibDir, getLibFunctions } from "./libUtils.js";
import { Gsdk } from "./interfaces.js";

const currentFile = getJsEnv() === "cjs" ? __filename : fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const libPath = path.resolve(currentDir, "..", getLibDir());
const lib = koffi.load(libPath);
const libFunctions: Gsdk = getLibFunctions(lib);

export default libFunctions;

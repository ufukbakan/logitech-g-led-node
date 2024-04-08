/// <reference types="node" />
import { IKoffiLib } from "koffi";
import { Gsdk } from "./interfaces.js";
type SupportedArchitecture = "x32" | "x64";
export declare const platform: NodeJS.Platform;
export declare const architecture: SupportedArchitecture;
export declare function getLibDir(): string;
export declare function getArchitecture(): "x32" | "x64";
export declare function getLibFunctions(lib: IKoffiLib): Gsdk;
export {};

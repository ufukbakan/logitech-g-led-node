"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibFunctions = exports.getArchitecture = exports.getLibDir = exports.architecture = exports.platform = void 0;
const os_1 = __importDefault(require("os"));
exports.platform = os_1.default.platform();
exports.architecture = getArchitecture();
function getLibDir() {
    switch (exports.platform) {
        case "win32":
            return `lib/windows/${exports.architecture}/LogitechLedEnginesWrapper.dll`;
        default:
            throw new Error("Unsupported OS Platform");
    }
}
exports.getLibDir = getLibDir;
function getArchitecture() {
    switch (process.arch) {
        case "ia32":
            return "x32";
        case "x64":
            return "x64";
        default:
            throw new Error("Unsupported process architecture");
    }
}
exports.getArchitecture = getArchitecture;
function getLibFunctions(lib) {
    switch (exports.platform) {
        case "win32":
            return getWindowsLibFunctions(lib);
        default:
            throw new Error("Unsupported platform");
    }
}
exports.getLibFunctions = getLibFunctions;
function getWindowsLibFunctions(lib) {
    return {
        init: lib.func("__stdcall", "LogiLedInit", "bool", []),
        initWithName: lib.func("__stdcall", "LogiLedInitWithName", "bool", ["str"]),
        getConfigOptionNumber: lib.func("__stdcall", "LogiLedGetConfigOptionNumber", "bool", ["str", "double*"]),
        getConfigOptionBool: lib.func("__stdcall", "LogiLedGetConfigOptionBool", "bool", ["str", "bool*"]),
        getConfigOptionColor: lib.func("__stdcall", "LogiLedGetConfigOptionColor", "bool", ["str", "int*", "int*", "int*"]),
        getConfigOptionKeyInput: lib.func("__stdcall", "LogiLedGetConfigOptionKeyInput", "bool", ["str", "str*", "int"]),
        setTargetDevice: lib.func("__stdcall", "LogiLedSetTargetDevice", "bool", ["int"]),
        getSdkVersion: lib.func("__stdcall", "LogiLedGetSdkVersion", "bool", ["int*", "int*", "int*"]),
        saveCurrentLighting: lib.func("__stdcall", "LogiLedSaveCurrentLighting", "bool", []),
        setLighting: lib.func("__stdcall", "LogiLedSetLighting", "bool", ["int", "int", "int"]),
        restoreLighting: lib.func("__stdcall", "LogiLedRestoreLighting", "bool", []),
        flashLighting: lib.func("__stdcall", "LogiLedFlashLighting", "bool", ["int", "int", "int", "int", "int"]),
        pulseLighting: lib.func("__stdcall", "LogiLedPulseLighting", "bool", ["int", "int", "int", "int", "int"]),
        stopEffects: lib.func("__stdcall", "LogiLedStopEffects", "bool", []),
        excludeKeysFromBitmap: lib.func("__stdcall", "LogiLedExcludeKeysFromBitmap", "bool", ["int*", "int"]),
        setLightingFromBitmap: lib.func("__stdcall", "LogiLedSetLightingFromBitmap", "bool", ["int*"]),
        setLightingForKeyWithScanCode: lib.func("__stdcall", "LogiLedSetLightingForKeyWithScanCode", "bool", ["int", "int", "int", "int"]),
        setLightingForKeyWithHidCode: lib.func("__stdcall", "LogiLedSetLightingForKeyWithHidCode", "bool", ["int", "int", "int", "int"]),
        setLightingForKeyWithQuartzCode: lib.func("__stdcall", "LogiLedSetLightingForKeyWithQuartzCode", "bool", ["int", "int", "int", "int"]),
        setLightingForKeyWithKeyName: lib.func("__stdcall", "LogiLedSetLightingForKeyWithKeyName", "bool", ["int", "int", "int", "int"]),
        saveLightingForKey: lib.func("__stdcall", "LogiLedSaveLightingForKey", "bool", ["int"]),
        restoreLightingForKey: lib.func("__stdcall", "LogiLedRestoreLightingForKey", "bool", ["int"]),
        flashSingleKey: lib.func("__stdcall", "LogiLedFlashSingleKey", "bool", ["int", "int", "int", "int", "int", "int"]),
        pulseSingleKey: lib.func("__stdcall", "LogiLedPulseSingleKey", "bool", ["int", "int", "int", "int", "int", "int", "int", "int", "bool"]),
        stopEffectsOnKey: lib.func("__stdcall", "LogiLedStopEffectsOnKey", "bool", ["int"]),
        setLightingForTargetZone: lib.func("__stdcall", "LogiLedSetLightingForTargetZone", "bool", ["int", "int", "int", "int", "int"]),
        shutdown: lib.func("__stdcall", "LogiLedShutdown", "void", []),
    };
}

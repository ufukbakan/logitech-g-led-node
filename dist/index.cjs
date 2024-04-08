'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var koffi = require('koffi');
var path = require('path');
var url = require('url');
var os = require('os');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var koffi__default = /*#__PURE__*/_interopDefault(koffi);
var path__default = /*#__PURE__*/_interopDefault(path);
var os__default = /*#__PURE__*/_interopDefault(os);

// node_modules/.pnpm/tsup@8.0.2_typescript@5.4.4/node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();
function getJsEnv() {
  return typeof exports === "object" ? "cjs" : "esm";
}
var platform = os__default.default.platform();
var architecture = getArchitecture();
function getLibDir() {
  switch (platform) {
    case "win32":
      return `lib/windows/${architecture}/LogitechLedEnginesWrapper.dll`;
    default:
      throw new Error("Unsupported OS Platform");
  }
}
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
function getLibFunctions(lib2) {
  switch (platform) {
    case "win32":
      return getWindowsLibFunctions(lib2);
    default:
      throw new Error("Unsupported platform");
  }
}
function getWindowsLibFunctions(lib2) {
  return {
    init: lib2.func("__stdcall", "LogiLedInit", "bool", []),
    initWithName: lib2.func("__stdcall", "LogiLedInitWithName", "bool", ["str"]),
    getConfigOptionNumber: lib2.func("__stdcall", "LogiLedGetConfigOptionNumber", "bool", ["str", "double*"]),
    getConfigOptionBool: lib2.func("__stdcall", "LogiLedGetConfigOptionBool", "bool", ["str", "bool*"]),
    getConfigOptionColor: lib2.func("__stdcall", "LogiLedGetConfigOptionColor", "bool", ["str", "int*", "int*", "int*"]),
    getConfigOptionKeyInput: lib2.func("__stdcall", "LogiLedGetConfigOptionKeyInput", "bool", ["str", "str*", "int"]),
    setTargetDevice: lib2.func("__stdcall", "LogiLedSetTargetDevice", "bool", ["int"]),
    getSdkVersion: lib2.func("__stdcall", "LogiLedGetSdkVersion", "bool", ["int*", "int*", "int*"]),
    saveCurrentLighting: lib2.func("__stdcall", "LogiLedSaveCurrentLighting", "bool", []),
    setLighting: lib2.func("__stdcall", "LogiLedSetLighting", "bool", ["int", "int", "int"]),
    restoreLighting: lib2.func("__stdcall", "LogiLedRestoreLighting", "bool", []),
    flashLighting: lib2.func("__stdcall", "LogiLedFlashLighting", "bool", ["int", "int", "int", "int", "int"]),
    pulseLighting: lib2.func("__stdcall", "LogiLedPulseLighting", "bool", ["int", "int", "int", "int", "int"]),
    stopEffects: lib2.func("__stdcall", "LogiLedStopEffects", "bool", []),
    excludeKeysFromBitmap: lib2.func("__stdcall", "LogiLedExcludeKeysFromBitmap", "bool", ["int*", "int"]),
    setLightingFromBitmap: lib2.func("__stdcall", "LogiLedSetLightingFromBitmap", "bool", ["int*"]),
    setLightingForKeyWithScanCode: lib2.func("__stdcall", "LogiLedSetLightingForKeyWithScanCode", "bool", ["int", "int", "int", "int"]),
    setLightingForKeyWithHidCode: lib2.func("__stdcall", "LogiLedSetLightingForKeyWithHidCode", "bool", ["int", "int", "int", "int"]),
    setLightingForKeyWithQuartzCode: lib2.func("__stdcall", "LogiLedSetLightingForKeyWithQuartzCode", "bool", ["int", "int", "int", "int"]),
    setLightingForKeyWithKeyName: lib2.func("__stdcall", "LogiLedSetLightingForKeyWithKeyName", "bool", ["int", "int", "int", "int"]),
    saveLightingForKey: lib2.func("__stdcall", "LogiLedSaveLightingForKey", "bool", ["int"]),
    restoreLightingForKey: lib2.func("__stdcall", "LogiLedRestoreLightingForKey", "bool", ["int"]),
    flashSingleKey: lib2.func("__stdcall", "LogiLedFlashSingleKey", "bool", ["int", "int", "int", "int", "int", "int"]),
    pulseSingleKey: lib2.func("__stdcall", "LogiLedPulseSingleKey", "bool", ["int", "int", "int", "int", "int", "int", "int", "int", "bool"]),
    stopEffectsOnKey: lib2.func("__stdcall", "LogiLedStopEffectsOnKey", "bool", ["int"]),
    setLightingForTargetZone: lib2.func("__stdcall", "LogiLedSetLightingForTargetZone", "bool", ["int", "int", "int", "int", "int"]),
    shutdown: lib2.func("__stdcall", "LogiLedShutdown", "void", [])
  };
}

// src/index.ts
var GsdkConstants = class {
  //LED SDK constants
  static LOGI_DEVICETYPE_MONOCHROME_ORD = 0;
  static LOGI_DEVICETYPE_RGB_ORD = 1;
  static LOGI_DEVICETYPE_PERKEY_RGB_ORD = 2;
  static LOGI_DEVICETYPE_MONOCHROME = 1 << this.LOGI_DEVICETYPE_MONOCHROME_ORD;
  static LOGI_DEVICETYPE_RGB = 1 << this.LOGI_DEVICETYPE_RGB_ORD;
  static LOGI_DEVICETYPE_PERKEY_RGB = 1 << this.LOGI_DEVICETYPE_PERKEY_RGB_ORD;
  static LOGI_DEVICETYPE_ALL = this.LOGI_DEVICETYPE_MONOCHROME | this.LOGI_DEVICETYPE_RGB | this.LOGI_DEVICETYPE_PERKEY_RGB;
  static LOGI_LED_BITMAP_WIDTH = 21;
  static LOGI_LED_BITMAP_HEIGHT = 6;
  static LOGI_LED_BITMAP_BYTES_PER_KEY = 4;
  static LOGI_LED_BITMAP_SIZE = this.LOGI_LED_BITMAP_WIDTH * this.LOGI_LED_BITMAP_HEIGHT * this.LOGI_LED_BITMAP_BYTES_PER_KEY;
  static LOGI_LED_DURATION_INFINITE = 0;
};
var currentFile = getJsEnv() === "cjs" ? __filename : url.fileURLToPath(importMetaUrl);
var currentDir = path__default.default.dirname(currentFile);
var libPath = path__default.default.resolve(currentDir, "..", getLibDir());
var lib = koffi__default.default.load(libPath);
var libFunctions = getLibFunctions(lib);
var src_default = libFunctions;

exports.GsdkConstants = GsdkConstants;
exports.default = src_default;

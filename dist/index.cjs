"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chunkERUSO6IPcjs = require('./chunk-ERUSO6IP.cjs');var _koffi = require('koffi'); var _koffi2 = _interopRequireDefault(_koffi);var _path = require('path'); var _path2 = _interopRequireDefault(_path);var _url = require('url');var _os = require('os'); var _os2 = _interopRequireDefault(_os);function o(){return typeof exports=="object"?"cjs":"esm"}var n=_os2.default.platform(),c=l();function e(){switch(n){case"win32":return`lib/windows/${c}/LogitechLedEnginesWrapper.dll`;default:throw new Error("Unsupported OS Platform")}}function l(){switch(process.arch){case"ia32":return"x32";case"x64":return"x64";default:throw new Error("Unsupported process architecture")}}function r(t){switch(n){case"win32":return L(t);default:throw new Error("Unsupported platform")}}function L(t){return{init:t.func("__stdcall","LogiLedInit","bool",[]),initWithName:t.func("__stdcall","LogiLedInitWithName","bool",["str"]),getConfigOptionNumber:t.func("__stdcall","LogiLedGetConfigOptionNumber","bool",["str","double*"]),getConfigOptionBool:t.func("__stdcall","LogiLedGetConfigOptionBool","bool",["str","bool*"]),getConfigOptionColor:t.func("__stdcall","LogiLedGetConfigOptionColor","bool",["str","int*","int*","int*"]),getConfigOptionKeyInput:t.func("__stdcall","LogiLedGetConfigOptionKeyInput","bool",["str","str*","int"]),setTargetDevice:t.func("__stdcall","LogiLedSetTargetDevice","bool",["int"]),getSdkVersion:t.func("__stdcall","LogiLedGetSdkVersion","bool",["int*","int*","int*"]),saveCurrentLighting:t.func("__stdcall","LogiLedSaveCurrentLighting","bool",[]),setLighting:t.func("__stdcall","LogiLedSetLighting","bool",["int","int","int"]),restoreLighting:t.func("__stdcall","LogiLedRestoreLighting","bool",[]),flashLighting:t.func("__stdcall","LogiLedFlashLighting","bool",["int","int","int","int","int"]),pulseLighting:t.func("__stdcall","LogiLedPulseLighting","bool",["int","int","int","int","int"]),stopEffects:t.func("__stdcall","LogiLedStopEffects","bool",[]),excludeKeysFromBitmap:t.func("__stdcall","LogiLedExcludeKeysFromBitmap","bool",["int*","int"]),setLightingFromBitmap:t.func("__stdcall","LogiLedSetLightingFromBitmap","bool",["int*"]),setLightingForKeyWithScanCode:t.func("__stdcall","LogiLedSetLightingForKeyWithScanCode","bool",["int","int","int","int"]),setLightingForKeyWithHidCode:t.func("__stdcall","LogiLedSetLightingForKeyWithHidCode","bool",["int","int","int","int"]),setLightingForKeyWithQuartzCode:t.func("__stdcall","LogiLedSetLightingForKeyWithQuartzCode","bool",["int","int","int","int"]),setLightingForKeyWithKeyName:t.func("__stdcall","LogiLedSetLightingForKeyWithKeyName","bool",["int","int","int","int"]),saveLightingForKey:t.func("__stdcall","LogiLedSaveLightingForKey","bool",["int"]),restoreLightingForKey:t.func("__stdcall","LogiLedRestoreLightingForKey","bool",["int"]),flashSingleKey:t.func("__stdcall","LogiLedFlashSingleKey","bool",["int","int","int","int","int","int"]),pulseSingleKey:t.func("__stdcall","LogiLedPulseSingleKey","bool",["int","int","int","int","int","int","int","int","bool"]),stopEffectsOnKey:t.func("__stdcall","LogiLedStopEffectsOnKey","bool",["int"]),setLightingForTargetZone:t.func("__stdcall","LogiLedSetLightingForTargetZone","bool",["int","int","int","int","int"]),shutdown:t.func("__stdcall","LogiLedShutdown","void",[])}}var u=o()==="cjs"?__filename:_url.fileURLToPath.call(void 0, _chunkERUSO6IPcjs.a),a=_path2.default.dirname(u),h=_path2.default.resolve(a,"..",e()),p=_koffi2.default.load(h),_=r(p),w= exports =_;exports.default = w;

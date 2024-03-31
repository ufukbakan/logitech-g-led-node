import koffi from "koffi";
import path from "path";
import { DeviceType } from "./device";
import { KeyName } from "./keyboard";

export class GsdkConstants {
    //LED SDK constants
    static readonly LOGI_DEVICETYPE_MONOCHROME_ORD = 0;
    static readonly LOGI_DEVICETYPE_RGB_ORD = 1;
    static readonly LOGI_DEVICETYPE_PERKEY_RGB_ORD = 2;
    static readonly LOGI_DEVICETYPE_MONOCHROME = (1 << this.LOGI_DEVICETYPE_MONOCHROME_ORD);
    static readonly LOGI_DEVICETYPE_RGB = (1 << this.LOGI_DEVICETYPE_RGB_ORD);
    static readonly LOGI_DEVICETYPE_PERKEY_RGB = (1 << this.LOGI_DEVICETYPE_PERKEY_RGB_ORD);
    static readonly LOGI_DEVICETYPE_ALL = (this.LOGI_DEVICETYPE_MONOCHROME | this.LOGI_DEVICETYPE_RGB | this.LOGI_DEVICETYPE_PERKEY_RGB);
    static readonly LOGI_LED_BITMAP_WIDTH = 21;
    static readonly LOGI_LED_BITMAP_HEIGHT = 6;
    static readonly LOGI_LED_BITMAP_BYTES_PER_KEY = 4;
    static readonly LOGI_LED_BITMAP_SIZE = this.LOGI_LED_BITMAP_WIDTH * this.LOGI_LED_BITMAP_HEIGHT * this.LOGI_LED_BITMAP_BYTES_PER_KEY;
    static readonly LOGI_LED_DURATION_INFINITE = 0;
}
interface Gsdk {
    init(): boolean;
    initWithName(name: string): boolean;
    getConfigOptionNumber(configPath: string, defaultNumber: number): boolean;
    getConfigOptionBool(configPath: string, defaultRed: boolean): boolean;
    getConfigOptionColor(configPath: string, defaultRed: number, defaultGreen: number, defaultBlue: number): boolean;
    getConfigOptionKeyInput(configPath: string, buffer: string, bufsize: number): boolean;
    setTargetDevice(targetDevice: number): boolean;
    getSdkVersion(majorNum: number, minorNum: number, buildNum: number): boolean;
    saveCurrentLighting(): boolean;
    setLighting(redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    restoreLighting(): boolean;
    flashLighting(redPercentage: number, greenPercentage: number, bluePercentage: number, milliSecondsDuration: number, milliSecondsInterval: number): boolean;
    pulseLighting(redPercentage: number, greenPercentage: number, bluePercentage: number, milliSecondsDuration: number, milliSecondsInterval: number): boolean;
    stopEffects(): boolean;
    excludeKeysFromBitmap(keyList: KeyName[], listCount: number): boolean;
    setLightingFromBitmap(bitmap: number[]): boolean;
    setLightingForKeyWithScanCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    setLightingForKeyWithHidCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    setLightingForKeyWithQuartzCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    setLightingForKeyWithKeyName(keyCode: KeyName, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    saveLightingForKey(keyName: KeyName): boolean;
    restoreLightingForKey(keyName: KeyName): boolean;
    flashSingleKey(keyName: KeyName, redPercentage: number, greenPercentage: number, bluePercentage: number, msDuration: number, msInterval: number): boolean;
    pulseSingleKey(keyName: KeyName, startRedPercentage: number, startGreenPercentage: number, startBluePercentage: number, finishRedPercentage: number, finishGreenPercentage: number, finishBluePercentage: number, msDuration: number, isInfinite: boolean): boolean;
    stopEffectsOnKey(keyName: KeyName): boolean;
    setLightingForTargetZone(deviceType: DeviceType, zone: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    shutdown(): void;
}

const lib = koffi.load(path.resolve(__dirname, "..", "lib/x64/LogitechLedEnginesWrapper.dll"));
const init = lib.func("__stdcall", "LogiLedInit", "bool", []);
const initWithName = lib.func("__stdcall", "LogiLedInitWithName", "bool", ["str"]);
const getConfigOptionNumber = lib.func("__stdcall", "LogiLedGetConfigOptionNumber", "bool", ["str", "double*"]);
const getConfigOptionBool = lib.func("__stdcall", "LogiLedGetConfigOptionBool", "bool", ["str", "bool*"]);
const getConfigOptionColor = lib.func("__stdcall", "LogiLedGetConfigOptionColor", "bool", ["str", "int*", "int*", "int*"]);
const getConfigOptionKeyInput = lib.func("__stdcall", "LogiLedGetConfigOptionKeyInput", "bool", ["str", "str*", "int"]);
const setTargetDevice = lib.func("__stdcall", "LogiLedSetTargetDevice", "bool", ["int"]);
const getSdkVersion = lib.func("__stdcall", "LogiLedGetSdkVersion", "bool", ["int*", "int*", "int*"]);
const saveCurrentLighting = lib.func("__stdcall", "LogiLedSaveCurrentLighting", "bool", []);
const setLighting = lib.func("__stdcall", "LogiLedSetLighting", "bool", ["int", "int", "int"]);
const restoreLighting = lib.func("__stdcall", "LogiLedRestoreLighting", "bool", []);
const flashLighting = lib.func("__stdcall", "LogiLedFlashLighting", "bool", ["int", "int", "int", "int", "int"]);
const pulseLighting = lib.func("__stdcall", "LogiLedPulseLighting", "bool", ["int", "int", "int", "int", "int"]);
const stopEffects = lib.func("__stdcall", "LogiLedStopEffects", "bool", []);
const excludeKeysFromBitmap = lib.func("__stdcall", "LogiLedExcludeKeysFromBitmap", "bool", ["int*", "int"]);
const setLightingFromBitmap = lib.func("__stdcall", "LogiLedSetLightingFromBitmap", "bool", ["int*"]);
const setLightingForKeyWithScanCode = lib.func("__stdcall", "LogiLedSetLightingForKeyWithScanCode", "bool", ["int", "int", "int", "int"]);
const setLightingForKeyWithHidCode = lib.func("__stdcall", "LogiLedSetLightingForKeyWithHidCode", "bool", ["int", "int", "int", "int"]);
const setLightingForKeyWithQuartzCode = lib.func("__stdcall", "LogiLedSetLightingForKeyWithQuartzCode", "bool", ["int", "int", "int", "int"]);
const setLightingForKeyWithKeyName = lib.func("__stdcall", "LogiLedSetLightingForKeyWithKeyName", "bool", ["int", "int", "int", "int"]);
const saveLightingForKey = lib.func("__stdcall", "LogiLedSaveLightingForKey", "bool", ["int"]);
const restoreLightingForKey = lib.func("__stdcall", "LogiLedRestoreLightingForKey", "bool", ["int"]);
const flashSingleKey = lib.func("__stdcall", "LogiLedFlashSingleKey", "bool", ["int", "int", "int", "int", "int", "int"]);
const pulseSingleKey = lib.func("__stdcall", "LogiLedPulseSingleKey", "bool", ["int", "int", "int", "int", "int", "int", "int", "int", "bool"]);
const stopEffectsOnKey = lib.func("__stdcall", "LogiLedStopEffectsOnKey", "bool", ["int"]);
const setLightingForTargetZone = lib.func("__stdcall", "LogiLedSetLightingForTargetZone", "bool", ["int", "int", "int", "int", "int"]);
const shutdown = lib.func("__stdcall", "LogiLedShutdown", "void", []);

export default {
    init,
    initWithName,
    getConfigOptionNumber,
    getConfigOptionBool,
    getConfigOptionColor,
    getConfigOptionKeyInput,
    setTargetDevice,
    getSdkVersion,
    saveCurrentLighting,
    setLighting,
    restoreLighting,
    flashLighting,
    pulseLighting,
    stopEffects,
    excludeKeysFromBitmap,
    setLightingFromBitmap,
    setLightingForKeyWithScanCode,
    setLightingForKeyWithHidCode,
    setLightingForKeyWithQuartzCode,
    setLightingForKeyWithKeyName,
    saveLightingForKey,
    restoreLightingForKey,
    flashSingleKey,
    pulseSingleKey,
    stopEffectsOnKey,
    setLightingForTargetZone,
    shutdown,
} as Gsdk;
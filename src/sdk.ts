import koffi from "koffi";
import path from "path";
import { DeviceType } from './device';
import { KeyName } from './keyboard';

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
};
interface Gsdk {
    LogiLedInit(): boolean,
    LogiLedInitWithName(name: String): boolean,
    LogiLedGetConfigOptionNumber(configPath: string, defaultNumber: number): boolean; LogiLedGetConfigOptionBool(configPath: string, defaultRed: boolean): boolean; LogiLedGetConfigOptionColor(configPath: string, defaultRed: number, defaultGreen: number, defaultBlue: number): boolean; LogiLedGetConfigOptionKeyInput(configPath: string, buffer: string, bufsize: number): boolean; LogiLedSetTargetDevice(targetDevice: number): boolean
    LogiLedGetSdkVersion(majorNum: number, minorNum: number, buildNum: number): boolean
    LogiLedSaveCurrentLighting(): boolean
    LogiLedSetLighting(redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedRestoreLighting(): boolean
    LogiLedFlashLighting(redPercentage: number, greenPercentage: number, bluePercentage: number, milliSecondsDuration: number, milliSecondsInterval: number): boolean
    LogiLedPulseLighting(redPercentage: number, greenPercentage: number, bluePercentage: number, milliSecondsDuration: number, milliSecondsInterval: number): boolean
    LogiLedStopEffects(): boolean
    LogiLedExcludeKeysFromBitmap(keyList: KeyName[], listCount: number): boolean
    LogiLedSetLightingFromBitmap(bitmap: number[]): boolean
    LogiLedSetLightingForKeyWithScanCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedSetLightingForKeyWithHidCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedSetLightingForKeyWithQuartzCode(keyCode: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedSetLightingForKeyWithKeyName(keyCode: KeyName, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedSaveLightingForKey(keyName: KeyName): boolean
    LogiLedRestoreLightingForKey(keyName: KeyName): boolean
    LogiLedFlashSingleKey(keyName: KeyName, redPercentage: number, greenPercentage: number, bluePercentage: number, msDuration: number, msInterval: number): boolean
    LogiLedPulseSingleKey(keyName: KeyName, startRedPercentage: number, startGreenPercentage: number, startBluePercentage: number, finishRedPercentage: number, finishGreenPercentage: number, finishBluePercentage: number, msDuration: number, isInfinite: boolean): boolean
    LogiLedStopEffectsOnKey(keyName: KeyName): boolean
    LogiLedSetLightingForTargetZone(deviceType: DeviceType, zone: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean
    LogiLedShutdown(): void;
}

const lib = koffi.load(path.resolve(__dirname, "lib/x64/LogitechLedEnginesWrapper.dll"));
const LogiLedInit = lib.func('__stdcall', 'LogiLedInit', 'bool', []);
const LogiLedInitWithName = lib.func('__stdcall', 'LogiLedInitWithName', 'bool', ['str']);
const LogiLedGetConfigOptionNumber = lib.func('__stdcall', 'LogiLedGetConfigOptionNumber', 'bool', ['str', 'double*']);
const LogiLedGetConfigOptionBool = lib.func('__stdcall', 'LogiLedGetConfigOptionBool', 'bool', ['str', 'bool*']);
const LogiLedGetConfigOptionColor = lib.func('__stdcall', 'LogiLedGetConfigOptionColor', 'bool', ['str', 'int*', 'int*', 'int*']);
const LogiLedGetConfigOptionKeyInput = lib.func('__stdcall', 'LogiLedGetConfigOptionKeyInput', 'bool', ['str', 'str*', 'int']);
const LogiLedSetTargetDevice = lib.func('__stdcall', 'LogiLedSetTargetDevice', 'bool', ['int']);
const LogiLedGetSdkVersion = lib.func('__stdcall', 'LogiLedGetSdkVersion', 'bool', ['int*', 'int*', 'int*']);
const LogiLedSaveCurrentLighting = lib.func('__stdcall', 'LogiLedSaveCurrentLighting', 'bool', []);
const LogiLedSetLighting = lib.func('__stdcall', 'LogiLedSetLighting', 'bool', ['int', 'int', 'int']);
const LogiLedRestoreLighting = lib.func('__stdcall', 'LogiLedRestoreLighting', 'bool', []);
const LogiLedFlashLighting = lib.func('__stdcall', 'LogiLedFlashLighting', 'bool', ['int', 'int', 'int', 'int', 'int']);
const LogiLedPulseLighting = lib.func('__stdcall', 'LogiLedPulseLighting', 'bool', ['int', 'int', 'int', 'int', 'int']);
const LogiLedStopEffects = lib.func('__stdcall', 'LogiLedStopEffects', 'bool', []);
const LogiLedExcludeKeysFromBitmap = lib.func('__stdcall', 'LogiLedExcludeKeysFromBitmap', 'bool', ['int*', 'int']);
const LogiLedSetLightingFromBitmap = lib.func('__stdcall', 'LogiLedSetLightingFromBitmap', 'bool', ['int*']);
const LogiLedSetLightingForKeyWithScanCode = lib.func('__stdcall', 'LogiLedSetLightingForKeyWithScanCode', 'bool', ['int', 'int', 'int', 'int']);
const LogiLedSetLightingForKeyWithHidCode = lib.func('__stdcall', 'LogiLedSetLightingForKeyWithHidCode', 'bool', ['int', 'int', 'int', 'int']);
const LogiLedSetLightingForKeyWithQuartzCode = lib.func('__stdcall', 'LogiLedSetLightingForKeyWithQuartzCode', 'bool', ['int', 'int', 'int', 'int']);
const LogiLedSetLightingForKeyWithKeyName = lib.func('__stdcall', 'LogiLedSetLightingForKeyWithKeyName', 'bool', ['int', 'int', 'int', 'int']);
const LogiLedSaveLightingForKey = lib.func('__stdcall', 'LogiLedSaveLightingForKey', 'bool', ['int']);
const LogiLedRestoreLightingForKey = lib.func('__stdcall', 'LogiLedRestoreLightingForKey', 'bool', ['int']);
const LogiLedFlashSingleKey = lib.func('__stdcall', 'LogiLedFlashSingleKey', 'bool', ['int', 'int', 'int', 'int', 'int', 'int']);
const LogiLedPulseSingleKey = lib.func('__stdcall', 'LogiLedPulseSingleKey', 'bool', ['int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'bool']);
const LogiLedStopEffectsOnKey = lib.func('__stdcall', 'LogiLedStopEffectsOnKey', 'bool', ['int']);
const LogiLedSetLightingForTargetZone = lib.func('__stdcall', 'LogiLedSetLightingForTargetZone', 'bool', ['int', 'int', 'int', 'int', 'int']);
const LogiLedShutdown = lib.func('__stdcall', 'LogiLedShutdown', 'void', []);

export default {
    LogiLedInit,
    LogiLedInitWithName,
    LogiLedGetConfigOptionNumber,
    LogiLedGetConfigOptionBool,
    LogiLedGetConfigOptionColor,
    LogiLedGetConfigOptionKeyInput,
    LogiLedSetTargetDevice,
    LogiLedGetSdkVersion,
    LogiLedSaveCurrentLighting,
    LogiLedSetLighting,
    LogiLedRestoreLighting,
    LogiLedFlashLighting,
    LogiLedPulseLighting,
    LogiLedStopEffects,
    LogiLedExcludeKeysFromBitmap,
    LogiLedSetLightingFromBitmap,
    LogiLedSetLightingForKeyWithScanCode,
    LogiLedSetLightingForKeyWithHidCode,
    LogiLedSetLightingForKeyWithQuartzCode,
    LogiLedSetLightingForKeyWithKeyName,
    LogiLedSaveLightingForKey,
    LogiLedRestoreLightingForKey,
    LogiLedFlashSingleKey,
    LogiLedPulseSingleKey,
    LogiLedStopEffectsOnKey,
    LogiLedSetLightingForTargetZone,
    LogiLedShutdown,
} as Gsdk;
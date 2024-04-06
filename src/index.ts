import koffi from "koffi";
import path from "path";
import { fileURLToPath } from "url";
import { DeviceType } from "./device.js";
import { KeyName } from "./keyboard.js";
import { getJsEnv, getLibDir, getLibFunctions } from "./libUtils.js";

export class GsdkConstants {
    //LED SDK constants
    static readonly LOGI_DEVICETYPE_MONOCHROME_ORD = 0;
    static readonly LOGI_DEVICETYPE_RGB_ORD = 1;
    static readonly LOGI_DEVICETYPE_PERKEY_RGB_ORD = 2;
    static readonly LOGI_DEVICETYPE_MONOCHROME = 1 << this.LOGI_DEVICETYPE_MONOCHROME_ORD;
    static readonly LOGI_DEVICETYPE_RGB = 1 << this.LOGI_DEVICETYPE_RGB_ORD;
    static readonly LOGI_DEVICETYPE_PERKEY_RGB = 1 << this.LOGI_DEVICETYPE_PERKEY_RGB_ORD;
    static readonly LOGI_DEVICETYPE_ALL = this.LOGI_DEVICETYPE_MONOCHROME | this.LOGI_DEVICETYPE_RGB | this.LOGI_DEVICETYPE_PERKEY_RGB;
    static readonly LOGI_LED_BITMAP_WIDTH = 21;
    static readonly LOGI_LED_BITMAP_HEIGHT = 6;
    static readonly LOGI_LED_BITMAP_BYTES_PER_KEY = 4;
    static readonly LOGI_LED_BITMAP_SIZE = this.LOGI_LED_BITMAP_WIDTH * this.LOGI_LED_BITMAP_HEIGHT * this.LOGI_LED_BITMAP_BYTES_PER_KEY;
    static readonly LOGI_LED_DURATION_INFINITE = 0;
}
export interface Gsdk {
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
    pulseSingleKey(
        keyName: KeyName,
        startRedPercentage: number,
        startGreenPercentage: number,
        startBluePercentage: number,
        finishRedPercentage: number,
        finishGreenPercentage: number,
        finishBluePercentage: number,
        msDuration: number,
        isInfinite: boolean
    ): boolean;
    stopEffectsOnKey(keyName: KeyName): boolean;
    setLightingForTargetZone(deviceType: DeviceType, zone: number, redPercentage: number, greenPercentage: number, bluePercentage: number): boolean;
    shutdown(): void;
}

const currentFile = getJsEnv() === "cjs" ? __filename : fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const libPath = path.resolve(currentDir, "..", getLibDir());
const lib = koffi.load(libPath);
const libFunctions: Gsdk = getLibFunctions(lib);

export default libFunctions;

# logitech-g-led-node
Node.js implementation of Logitech's Led Illumination SDK

## Changelog
- v1.0.1:
  - Build with declarations
- v1.0.0:
    - Windows x64 support

## Usage
```ts
import sdk from "../src/sdk";

function sleep(x: number) {
    return new Promise(r => setTimeout(r, x));
}

// You need logitech G hub to be running in the background
// Also your device shouldn't be on onboard memory mode
async function main() {
    try {
        const initResult = sdk.LogiLedInit();
        await sleep(1 * 1000);
        if (!initResult) {
            throw new Error("could not initialize logi led sdk");
        }

        sdk.LogiLedSaveCurrentLighting();
        sdk.LogiLedPulseLighting(100, 0, 0, 200, 200);

        await sleep(1 * 1000);
        sdk.LogiLedRestoreLighting();
    }
    catch (e: any) {
        console.error(e.message);
    }
}

main();
```

## Interface
```ts
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
```

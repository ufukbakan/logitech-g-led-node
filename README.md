# logitech-g-led-node
Node.js implementation of Logitech's Led Illumination SDK

## Changelog
- v2.0.0:
  - Interface method naming improvements
- v1.0.1:
  - Build with declarations
- v1.0.0:
    - Windows x64 support

## Usage
```ts
import gLed from "../src";

function sleep(x: number) {
    return new Promise(r => setTimeout(r, x));
}

// You need logitech G hub to be running in the background
// Also your device shouldn't be on onboard memory mode
async function main() {
    try {
        const initResult = gLed.init();
        await sleep(1 * 1000);
        if (!initResult) {
            throw new Error("could not initialize logi led sdk");
        }

        gLed.saveCurrentLighting();
        gLed.pulseLighting(100, 0, 0, 200, 200);

        await sleep(1 * 1000);
        gLed.restoreLighting();
    }
    catch (e) {
        console.error(e.message);
    }
}

main();
```

## Interface
```ts
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
```

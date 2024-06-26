# logitech-g-led-node
Node.js implementation of [Logitech's Led Illumination SDK](https://www.logitechg.com/en-us/innovation/developer-lab.html)

## Changelog
- v1.1.0
  - Windows x32 support
- v1.0.0:alpha:
  - Windows x64 support

## Prerequirements
![Enabling application illumination control](example/images/prereq1.png)
![Disabling on-board memory mode](example/images/prereq2.png)

## Usage
```ts
import gLed from "logitech-g-led-node";

function sleep(x: number) {
    return new Promise(r => setTimeout(r, x));
}

// You need logitech G hub to be running in the background
// Also your device shouldn't be on onboard memory mode
async function main() {
    try {
        const initResult: boolean = gLed.init();
        await sleep(1000); // Logitech SDK documentation recommends sleep after init
        if (!initResult) {
            throw new Error("could not initialize logi led sdk");
        }

        gLed.saveCurrentLighting();
        gLed.pulseLighting(100, 0, 0, 500, 250); // r,g,b + Pulse for 500ms, each pulse finishes in 250 ms

        await sleep(1500);
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

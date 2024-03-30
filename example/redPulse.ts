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
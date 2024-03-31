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
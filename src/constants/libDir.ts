import os from "os";

export const libDir = {
    windows: {
        x64: "lib/x64/LogitechLedEnginesWrapper.dll",
        x86: "lib/x86/LogitechLedEnginesWrapper.dll"
    }
} as const;

console.log(os.platform());
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GsdkConstants = void 0;
class GsdkConstants {
    //LED SDK constants
    static LOGI_DEVICETYPE_MONOCHROME_ORD = 0;
    static LOGI_DEVICETYPE_RGB_ORD = 1;
    static LOGI_DEVICETYPE_PERKEY_RGB_ORD = 2;
    static LOGI_DEVICETYPE_MONOCHROME = 1 << this.LOGI_DEVICETYPE_MONOCHROME_ORD;
    static LOGI_DEVICETYPE_RGB = 1 << this.LOGI_DEVICETYPE_RGB_ORD;
    static LOGI_DEVICETYPE_PERKEY_RGB = 1 << this.LOGI_DEVICETYPE_PERKEY_RGB_ORD;
    static LOGI_DEVICETYPE_ALL = this.LOGI_DEVICETYPE_MONOCHROME | this.LOGI_DEVICETYPE_RGB | this.LOGI_DEVICETYPE_PERKEY_RGB;
    static LOGI_LED_BITMAP_WIDTH = 21;
    static LOGI_LED_BITMAP_HEIGHT = 6;
    static LOGI_LED_BITMAP_BYTES_PER_KEY = 4;
    static LOGI_LED_BITMAP_SIZE = this.LOGI_LED_BITMAP_WIDTH * this.LOGI_LED_BITMAP_HEIGHT * this.LOGI_LED_BITMAP_BYTES_PER_KEY;
    static LOGI_LED_DURATION_INFINITE = 0;
}
exports.GsdkConstants = GsdkConstants;

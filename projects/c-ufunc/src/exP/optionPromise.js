"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionPromise = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
var optionPromise = function (none, some) { return function (value) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _some, _a, _b, _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(typeof some === 'function')) return [3 /*break*/, 2];
                return [4 /*yield*/, some(value)];
            case 1:
                _a = _d.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, some];
            case 3:
                _a = _d.sent();
                _d.label = 4;
            case 4:
                _some = _a;
                if (!(_some !== null && _some !== void 0)) return [3 /*break*/, 5];
                _b = _some;
                return [3 /*break*/, 10];
            case 5:
                if (!(typeof none === 'function')) return [3 /*break*/, 7];
                return [4 /*yield*/, none(value)];
            case 6:
                _c = _d.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, none];
            case 8:
                _c = _d.sent();
                _d.label = 9;
            case 9:
                _b = (_c);
                _d.label = 10;
            case 10: return [2 /*return*/, _b];
        }
    });
}); }; };
exports.optionPromise = optionPromise;
//# sourceMappingURL=optionPromise.js.map
"use strict";
/* eslint-disable functional/no-try-statement */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatchPromise = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates a promises value.
 * @param fn <Value>() => Promise<Value>: Function to be evaluated.
 * @returns Promise
 */
var tryCatchPromise = function (fn) {
    return function (value) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var e_1, error;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fn(value)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    error = new Error(e_1);
                    return [2 /*return*/, Promise.reject(error)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.tryCatchPromise = tryCatchPromise;
//# sourceMappingURL=tryCatchPromise.js.map
"use strict";
/* eslint-disable functional/no-try-statement */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = void 0;
/**
 * Tries to execute a function.
 * @param fn  -Function to be executed.
 * @returns function value if no errors thrown, else returns an Error object.
 */
var tryCatch = function (fn) {
    return function (value) {
        try {
            return fn(value);
        }
        catch (e) {
            return new Error(e);
        }
    };
};
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.js.map
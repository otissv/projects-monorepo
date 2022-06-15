"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
/* eslint-disable functional/no-expression-statement */
/**
 * Freezes an object and all its properties.
 *
 * @param o | Record<string | number, any>:  Object to be frozen.
 * @returns   Returns frozen object.
 *
 *  @usage
 * import \{ deepFreeze \} from "ufunc/deepFreeze"
 *
 * @example
 */
var deepFreeze = function (obj) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(function (prop) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) &&
            obj[prop] !== null &&
            (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
            !Object.isFrozen(obj[prop])
        // eslint-disable-next-line functional/no-conditional-statement
        ) {
            (0, exports.deepFreeze)(obj[prop]);
        }
    });
    return obj;
};
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=deepfreeze.js.map
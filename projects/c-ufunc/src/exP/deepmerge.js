"use strict";
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable no-prototype-builtins */
/* eslint-disable functional/no-loop-statement */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = void 0;
var tslib_1 = require("tslib");
var deepMerge = function (target) {
    var state = tslib_1.__assign({}, target);
    var reducer = function (target, source) {
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (typeof source[prop] === 'function') {
                    target[prop] = source[prop](state);
                }
                else if (source[prop] != null &&
                    target[prop] &&
                    typeof source[prop] === 'object') {
                    reducer(target[prop], source[prop]);
                }
                else {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    };
    return function (source) { return reducer(tslib_1.__assign({}, target), source); };
};
exports.deepMerge = deepMerge;
//# sourceMappingURL=deepmerge.js.map
"use strict";
// const P1 = Promise.resolve(1);
// const P2 = Promise.resolve(2);
// const P3 = Promise.resolve(3);
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAll = void 0;
var tslib_1 = require("tslib");
var promiseAll = function () {
    var promises = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        promises[_i] = arguments[_i];
    }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(promises.map(function (p) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, p];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })).catch(function (error) {
                        return Promise.reject(error);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.promiseAll = promiseAll;
//# sourceMappingURL=promiseAll.js.map
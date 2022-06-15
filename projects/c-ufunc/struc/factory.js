"use strict";
//TODO: Make lazy
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
var factory = function (value) { return ({
    flatMap: function (f) { return f(value); },
    fold: function () { return value; },
    log: function () { return (0, exports.factory)(value); },
    map: function (f) { return (0, exports.factory)(f(value)); },
}); };
exports.factory = factory;
//# sourceMappingURL=factory.js.map
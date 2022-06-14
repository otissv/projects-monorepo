"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger = function (printer) { return function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    return function (value) {
        // eslint-disable-next-line functional/no-expression-statement
        printer.apply(void 0, messages);
        return value;
    };
}; };
exports.logger = logger;
//# sourceMappingURL=logger.js.map
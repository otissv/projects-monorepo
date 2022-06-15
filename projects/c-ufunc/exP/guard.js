"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = void 0;
var tslib_1 = require("tslib");
var isFunction_1 = require("../isFunction");
var guard = function () {
    var guards = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        guards[_i] = arguments[_i];
    }
    return function () {
        var _a, _b;
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        if (guards.length === 1) {
            return (0, isFunction_1.isFunction)(guards[0]) ? guards[0].apply(guards, value) : guards[0];
        }
        else {
            var checker = (0, isFunction_1.isFunction)(guards[0][0])
                ? (_a = guards[0])[0].apply(_a, value) : guards[0][0];
            var result = (0, isFunction_1.isFunction)(checker) ? checker.apply(void 0, value) : checker;
            return result
                ? (0, isFunction_1.isFunction)(guards[0][1])
                    ? (_b = guards[0])[1].apply(_b, tslib_1.__spreadArray(tslib_1.__spreadArray([], value, false), [result], false)) : guards[0][1]
                : exports.guard.apply(void 0, guards.slice(1)).apply(void 0, value);
        }
    };
};
exports.guard = guard;
// const head = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Head. List is empty'],
//   (list: readonly unknown[]) => list[0],
// );
// const tail = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Tail. List is empty'],
//   (list: readonly unknown[]) => list.slice(1),
// );
// const last = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Tail. List is empty'],
//   (list: readonly unknown[]) => list[list.length - 1],
// );
// const fizbuzz = guard<string | number>(
//   [(a: number) => a % 5 === 0 && a % 3 === 0, 'FizzBuzz'],
//   [(a: number) => a % 3 === 0, 'Fizz'],
//   [(a: number) => a % 5 === 0, 'Buzz'],
//   (a: number) => a,
// );
// const greeting = guard(
//   [(name: string) => name === 'Teacher', 'Hey Professor!'],
//   [(name: string) => name === 'Director', 'Hello Director.'],
//   [
//     (name: string) => name === 'Ricky',
//     (name: number) => `Still here ${name}? `,
//   ],
//   [(value: unknown) => isFunction(value), (fn: Function) => `Hey, ${fn()}`],
//   'Hello',
// );
//# sourceMappingURL=guard.js.map
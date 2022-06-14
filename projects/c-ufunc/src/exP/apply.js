"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
// console.log(complimentPerson(person));
var apply = function (list1) { return function (list2) { return list2.flatMap(function (f) { return list1.map(f); }); }; };
exports.apply = apply;
// Array.prototype.ap = function ap(m) {
//     return m.flatMap(f => this.map(f));
// };
// const bases = ['ice cream', 'banana', 'strawberry'];
// const toppings = ['nuts', 'chocolate sauce', 'sprinkles'];
// const combine = (a: string) => (b: string) => `${a} with ${b}`;
// const basesWith = bases.map(combine);
// const combos = apply(toppings)(basesWith);
// ["ice cream with nuts", "ice cream with chocolate sauce", "ice cream with sprinkles", "banana with nuts", "banana with chocolate sauce", "banana with sprinkles", "strawberry with nuts", "strawberry with chocolate sauce", "strawberry with sprinkles"]
//# sourceMappingURL=apply.js.map
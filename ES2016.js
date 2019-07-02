// ES2016/ES7 features

/*
 * Array.prototype.includes
 * @Params: searchElement, ?fromIndex
 * searchElement — the element that you are looking for
 * fromIndex — from which position the search will start. Default: 0
 */

let array = ["a", "b", "a", "c", "d"];
console.log(array.includes("a")); //true
console.log(array.includes("a", 3)); // false

/*
 * Exponentiation Operator (**)
 * base ** exponent
 */

console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(NaN ** 3); // NaN
console.log(2 ** NaN); // NaN

// ES2019/ES10 features

/*
 * Array.flat()
 * flattens the array 1 level depth
 * @Params: Infinity
 * flattens the array nth level depth
 */

const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11]]]];
console.log(array.flat()); //  [1, 2, 3, 4, 5, 6, Array(4)]
console.log(array.flat().flat()); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2)]
console.log(array.flat(Infinity)); // (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

/*
 * Array.flatMap()
 * maps each element using a mapping function, then flattens the result into a new array
 */

const arr = [1, 2, 3];
console.log(arr.map(n => [n, n * 2])); // [Array(2), Array(2), Array(2)]
console.log(arr.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]

/*
 * Object.fromEntries()
 * transforms a list of key-value pairs into an object
 */

const obj = { key1: 10, key2: 20, key3: 30 };
const entries = Object.entries(obj);
console.log(entries); // [Array(2), Array(2), Array(2)]
console.log(Object.fromEntries(entries)); // {key1: 10, key2: 20, key3: 30}

/*
 * String.trimStart() & String.trimEnd()
 * trimStart() - removes whitespace from the beginning
 * trimEnd() - removes whitespace from the end
 */

const fullName = "     Traian Mihali      ";
console.log(fullName.trimStart()); // "Traian Mihali      "
console.log(fullName.trimEnd()); // "     Traian Mihali"

/*
 * Optional catch binding
 */

try {
  throw new Error("Something failed");
} catch {
  console.log("Catch block without param");
}

/*
 * Function.toString()
 * returns a string representation of a function
 */

function foo() {
  //print something
  console.log("Hello");
}

console.log(foo.toString());
/*
function foo() {
  //print something
  console.log("Hello");
}
*/

/*
 * Symbol.description
 * read-only property
 * returns the description of the new Symbol object
 */

const symbol = Symbol("mySymbol");
console.log(symbol.description); // mySymbol

/*
 * Well Formed JSON.Stringify()
 * prevents JSON.stringify from returning ill-formed Unicode strings
 */

JSON.stringify("\uDF06\uD834");

/*
 * Array.sort stability
 * for short (length <= 10) arrays, insertion sort is used for efficiency
 * for arrays with more than 10 elements, unstable QuickSort is replaced with TimSort algorithm
 */

const posts = [
  { id: 1, likes: 10 },
  { id: 2, likes: 11 },
  { id: 3, likes: 12 },
  { id: 4, likes: 10 },
  { id: 5, likes: 11 },
  { id: 6, likes: 12 },
  { id: 7, likes: 10 },
  { id: 8, likes: 10 },
  { id: 9, likes: 11 },
  { id: 10, likes: 11 },
  { id: 11, likes: 12 }
];

console.log(posts.sort((a, b) => a.likes - b.likes));
/*
0: {id: 1, likes: 10}
1: {id: 4, likes: 10}
2: {id: 7, likes: 10}
3: {id: 8, likes: 10}
4: {id: 2, likes: 11}
5: {id: 5, likes: 11}
6: {id: 9, likes: 11}
7: {id: 10, likes: 11}
8: {id: 3, likes: 12}
9: {id: 6, likes: 12}
10: {id: 11, likes: 12}
*/

/*
 * Extend ECMA-262 syntax into a superset of JSON.
 * proposal: https://github.com/tc39/proposal-json-superset
 */

const LS = "\u2028";
const PS = eval("'\u2029'");

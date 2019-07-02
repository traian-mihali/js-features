// ES2017/ES8 features

/*
 * Object.values()
 */

const person = { name: "Traian", city: "Cluj", countryCode: "RO" };
console.log(Object.values(person)); // ["Traian", "Cluj", "RO"]

/*
 * Object.entries()
 */
console.log(Object.entries(person)); // [Array(2), Array(2), Array(2)]
/* 
0: (2) ["name", "Traian"]
1: (2) ["city", "Cluj"]
2: (2) ["countryCode", "RO"]
*/

/*
 * String padding (padStart and padEnd)
 */

// 'string'.padStart(maxLength, ?fillString)
console.log("comment".padStart(9, "//"));
// 'string'.padEnd(maxLength, ?fillString)
console.log("loading".padEnd(10, "."));

/*
 * Object.getOwnPropertyDescriptors()
 * returns all own property descriptors of an object.
 */
console.log(Object.getOwnPropertyDescriptors(person));
/*
{name: {…}, city: {…}, countryCode: {…}}
city: {value: "Cluj", writable: true, enumerable: true, configurable: true}
countryCode: {value: "RO", writable: true, enumerable: true, configurable: true}
name: {value: "Traian", writable: true, enumerable: true, configurable: true}
*/

/*
 * Trailing commas in function parameter lists and calls
 */
function foo(
  param1,
  param2 //, comma allowed here
) {
  // function body
}

/*
 * Async functions (async and await)
 */

async function fetchData(url) {
  const response = await fetch(url);
  data = await response.json();
  return data;
}
fetchData("https://jsonplaceholder.typicode.com/users");

/*
 * Shared memory and atomics
 * According to the specifications (https://tc39.es/ecmascript_sharedmem/shmem.html):
 * "Shared memory is being exposed in the form of a new SharedArrayBuffer type;
 * the existing TypedArray and DataView types are adapted in such a way that they can be used to create views on shared memory.
 * The new global Atomics object provides atomic operations on shared memory locations, including operations that can be used to create blocking synchronization primitives"
 */

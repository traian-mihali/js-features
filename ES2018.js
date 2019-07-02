// ES2018/ES9 features

/*
 * Object Rest/Spread Properties
 * allow you to collect the remaining properties of an obj
 */

const object = { key1: 1, key2: 2, key3: 3, key4: 4, key5: 5 };

const { key1, key2, ...keys } = object;
console.log(key1); // 1
console.log(key2); // 2
console.log(keys); // {key3: 3, key4: 4, key5: 5}

/*
 * Asynchronous Iteration
 */

 for await(const line of readLines(filePath))
    console.log(line)

/*
 * Promise.prototype.finally()
 */

fetch("https://api.resource")
  .then(result => result.json())
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));

/*
 * RegExp changes
 */

// s (dotAll) flag for regular expressions - '.' matches any character, including line terminators

console.log(/foo.bar/s.test("foo\nbar")); // true

// RegExp named capture groups

const REGEX = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const results = REGEX.exec("2019-07-03");
console.log(results[1]); // 2019
console.log(results[2]); // 07
console.log(results[3]); // 03

const regex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const res = regex.exec("2019-07-03");
console.log(res.groups.year); // 2019
console.log(res.groups.month); // 07
console.log(res.groups.day); // 03

// RegExp Lookbehind Assertions
//  Positive (?<=…)
console.log("$foo@bar#baz".replace(/(?<=@)bar/g, "123"));
// Negative (?<!…)
console.log("$foo@bar#baz".replace(/(?<!@)foo/g, "123"));

// RegExp Unicode Property Escapes
const regexGreekSymbol = /\p{Script=Greek}/u;
console.log(regexGreekSymbol.test("π")); // true

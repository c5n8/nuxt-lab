// I am building a validation library, and I learn many syntax approach to provide the best possible api for developers. One of them is currying. For example a function that check if a value is a number, and greater than another value.

// <code>
// function isNumber(value) {
// ..return typeof value === 'number'
// }

// function isGreaterThan(limit) {
// ..return function (value) {
// ....if (!isNumber(value)) {
// ......return false
// ....}
// ....
// ....return value > limit
// ..}
// }

// isGreaterThan(5)(3) // true

// // the alternatives
// isGreaterThan5(3)
// isGreaterThan(3, 5)
// isGreaterThan(5, 3)
// isGreaterThan({ limit: 5, value: 3})
// </code>

// It may will make more sense when pipeline operator arrive.For

// <code>
// function check(value) {
// ..if (value |> isGreaterThan(5)) {
// ....console.log(`${value} is greater Than 5`)
// ..}
// }
// </code>

// To put it simply, curry when you need dynamic function name.

// <code>
// isGreaterThan5(3)
// // becomes
// 3 |> isGreaterThan(5)
// </code>

// If you have another alternative api for above case, please let me know. Thanks.

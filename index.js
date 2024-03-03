// EXAMPLE 1 - Check if a Function is Defined in JavaScript

function greet() {
  return 'hello world';
}

if (typeof greet === 'function') {
  // 👇️ this runs
  console.log('✅ function is defined');

  console.log(greet()); // 👉️ hello world
} else {
  console.log('⛔️ function is NOT defined');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Function is Defined using a `try/catch` block

// try {
//   const result = greet();
//   console.log(result); // 👉️ hello world
// } catch (err) {
//   console.log('The function is not defined');
// }

// function greet() {
//   return 'hello world';
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Variable is of type Function using `instanceof`

// function sum(a, b) {
//   return a + b;
// }

// if (sum instanceof Function) {
//   // 👇️ this runs
//   console.log('✅ The variable is of type function');
// } else {
//   console.log('⛔️ The variable is NOT of type function');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Variable is of type Function using string comparison

// function isTypeFunction(f) {
//   const functionTypes = [
//     '[object Function]',
//     '[object AsyncFunction]',
//   ];
//   return functionTypes.includes(
//     Object.prototype.toString.call(f),
//   );
// }

// // ✅ synchronous function
// function subtract(a, b) {
//   return a - b;
// }

// // ✅ asynchronous function
// async function sum(a, b) {
//   return a + b;
// }

// console.log(isTypeFunction(sum)); // 👉️ true
// console.log(isTypeFunction(subtract)); // 👉️ true
// console.log(isTypeFunction('abc')); // 👉️ false

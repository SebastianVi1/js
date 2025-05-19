// try {
//     block of code to try
// } catch(err) {
//     Block of code to handle errors
// } finnally {
//      code to execute regardless the try/catch result
// }

let number = 200;
let number2 = 100;

if (number > number2) {
    throw "number error" //trow an exception
}

// Six different values can be returned by the error name property:

// Error Name	      l          Description
// -------------------l---------------------------------------------------------
// EvalError	      l          An error has occurred in the eval() function
// RangeError	      l          A number "out of range" has occurred
// ReferenceError	  l          An illegal reference has occurred
// SyntaxError	      l          A syntax error has occurred
// TypeError	      l          A type error has occurred
// URIError	          l          An error in encodeURI() has occurred
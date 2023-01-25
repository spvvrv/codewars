// Write a function that returns only the decimal part of the given number.
// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.
// https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

function getDecimal(n) {
  if (n < 0) {
    n = Math.abs(n);
    return n - Math.floor(n);
  } else {
    return n - Math.floor(n);
  }
}

getDecimal(-1.2);


// function getDecimal(n){
//     return Math.abs(n%1);
//   }

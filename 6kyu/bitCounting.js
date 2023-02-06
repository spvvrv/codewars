// function countBits(n) {
//   let binary = [];
//   let result = 0;

//   while (n / 2 > 0) {
//     binary.push(n % 2);
//     n = Math.floor(n / 2);
//   }
//   for (let i = 0; i < binary.length; i++) {
//     result += binary[i];
//   }
//   return result;
// }

// console.log(toBinary(1234));


let countBits = function(n) {
  return n.toString(2).split('0').join("").length;
};
countBits(0);

/* here the
1. n.toString(2) method converts n into a binary string.
2. split('0') makes array out of the binary string splitting only at 0's
 and hence returning an array of only 1 present in binary of n.
3. join('') joins all one and making a string of 1's.
4. length finds length of the string actually counting number of 1's in n.
*/
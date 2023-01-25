// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// https://www.codewars.com/kata/find-the-missing-element-between-two-arrays

function findMissing(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (let el of arr1) {
    sumArr1 += el;
  }
  for (let elem of arr2) {
    sumArr2 += elem;
  }
  return sumArr1 - sumArr2;
}

findMissing([1, 2, 3], [1, 3]);

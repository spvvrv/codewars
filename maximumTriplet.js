// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(numbers) {
  let nums = Array.from(
    new Set(
      numbers
        .sort(function (a, b) {
          return a - b;
        })
        .reverse()
    )
  );
  let max = nums[0] + nums[1] + nums[2];
  return max;
}

maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]);

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let split = x.split("");
  let arr = [];
  for (let n of split) {
    if (n < 5) {
      arr.push("0");
    } else {
      arr.push("1");
    }
  }
  return(arr.join("").toString());
}

fakeBin("45385593107843568"); //01011110001100111

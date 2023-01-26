// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// https://www.codewars.com/kata/odd-even-string-sort

function sortMyString(S) {
  let evenS = S.split("")
    .filter((x, i) => i % 2)
    .join("");
  let oddS = S.split("")
    .filter((x, i) => !(i % 2))
    .join("");
  return oddS + " " + evenS;
}

sortMyString("CodeWars");

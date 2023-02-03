// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

function palindrome(string) {
  const regexp = /[\W,_]/g;
  return (
    string.toString().toLowerCase().replace(regexp, "") ===
    string
      .toString()
      .toLowerCase()
      .replace(regexp, "")
      .split("")
      .reverse()
      .join("")
  );
}

palindrome("Under_scores; Serocsrednu");

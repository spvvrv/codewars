// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let arr = x.split("");
  return(arr.filter((n) => n !== " ").join(""));
}

noSpace("asdf fgrtg g");

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n) {
  let binary = [];

  while (n / 2 > 0) {
    binary.push(n % 2);
    n = Math.floor(n / 2);
  }
  return(Number(binary.reverse().join("").toString()));
}

toBinary(11);

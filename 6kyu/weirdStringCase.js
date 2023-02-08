// https://www.codewars.com/kata/weird-string-case

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((v, i) =>
      v
        .split("")
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join(" ");
}

toWeirdCase("This is a test");

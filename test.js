function printHill(lines) {
  let result = "";
  for (let i = 0; i < lines; i++) {
    console.log((result += "*"));
  }
}

printHill(5);

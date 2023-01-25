// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

function nicknameGenerator(name) {
  let vowels = "aeiou";
  if (name.length < 4) {
    return "Error: Name too short";
  } else {
    name = name.split("");
  }
  if (
    name[2] === "a" ||
    name[2] === "e" ||
    name[2] === "i" ||
    name[2] === "o" ||
    name[2] === "u"
  ) {
    return name[0] + name[1] + name[2] + name[3];
  } else {
    return name[0] + name[1] + name[2];
  }
}

nicknameGenerator("Jeannie");

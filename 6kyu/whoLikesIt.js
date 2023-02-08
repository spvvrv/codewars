// https://www.codewars.com/kata/who-likes-it

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    const [name1] = names;
    return `${name1} likes this`;
  } else if (names.length === 2) {
    const [name1, name2] = names;
    return `${name1} and ${name2} like this`;
  } else if (names.length === 3) {
    const [name1, name2, name3] = names;
    return `${name1}, ${name2} and ${name3} like this`
  } else if (names.length > 3) {
    const [name1, name2, ...others] = names;
    return `${name1}, ${name2} and ${others.length} others like this`;
  }
}

likes(["Max", "John", "Mark"]);



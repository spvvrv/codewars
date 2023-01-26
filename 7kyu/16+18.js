// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  let maxLength = Math.max(num1Str.length, num2Str.length);
  num1Str = num1Str.padStart(maxLength, "0");
  num2Str = num2Str.padStart(maxLength, "0");

  let str = "";
  for (let i = 0; i < maxLength; i++) {
    let string = +num1Str[i] + +num2Str[i];
    str += string;
  }
  return Number(str);
}

add(1222, 30277);

// Просто найди максимальную длину, сохранив её в переменную, а потом ОБЕ строки перезапиши, используя этот метод.



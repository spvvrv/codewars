// Функция сложения без +

// function sum(a, b) {
//   let fullLength = [...Array(a), ...Array(b)];
//   return fullLength.length;
// }

// sum(2, 60);

// Смотри, если тебе надо создавать массив определённой длины, то следует использовать конструктор класса Array. Он работает так - если в него передан один аргумент, и это целое положительное число, то будет создан массив этой длины с пустыми элементами.

// А если передать два значения и более, то будет создан массив с этими значениями.

// const arrA = Array(a);

const sum = (a, b) => [...Array(a), ...Array(b)].length;

sum(4, 60);

// const add = (a, b) => 'a'.repeat(a).concat('b'.repeat(b)).length;

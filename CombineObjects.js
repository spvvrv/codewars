// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
//https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine(...objects) {
    const result = {};
    for (const obj of objects) {
      for (const key in obj) {
        if (result.hasOwnProperty(key)) {
          result[key] += obj[key];
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
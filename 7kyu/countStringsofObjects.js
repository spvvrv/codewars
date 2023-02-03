// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

//https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript

object = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
};

function strCount(obj){
    let sum = 0;
      for (let key in obj) {
        if (typeof obj[key] === "string") sum++;
        if (typeof obj[key] === "object") sum += strCount(obj[key])
      }
      return sum
    }

strCount(object);

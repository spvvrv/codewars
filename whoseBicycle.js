// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

const ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8,
};

function whoseBicycle(diary1, diary2, diary3) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let key in diary1) {
    sum1 += diary1[key];
  }
  console.log(sum1);
  for (let key in diary2) {
    sum2 += diary2[key];
  }
  console.log(sum2);
  for (let key in diary3) {
    sum3 += diary3[key];
  }
  console.log(sum3);

  if (sum1 > sum2 && sum1 > sum3) {
    return "I need to buy a bicycle for my first son.";
  } else if (sum2 >= sum1 && sum2 > sum3) {
    return "I need to buy a bicycle for my second son.";
  } else if (sum3 >= sum1 && sum3 >= sum2) {
    return "I need to buy a bicycle for my third son.";
  }
}

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
  }
);

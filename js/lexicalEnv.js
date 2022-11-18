function customCounter2(a, b) {
  let i = a;

  return function () {
    return (i += b);
  };
}

const myCounter = customCounter2(1, 5);
const result1 = myCounter(); // => 6
const result2 = myCounter(); // => 11
const result3 = myCounter(); // => 16
console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);

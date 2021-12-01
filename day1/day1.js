const fs = require("fs/promises");

const testArr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const part1 = () => {
  return fs.readFile("./day1/day1input.txt", "utf8").then((result) => {
    const arr = result.split("\n").map((value) => parseInt(value));
    let count = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > arr[i - 1]) count++;
    }
    return count;
  });
};

const part2 = () => {
  return fs.readFile("./day1/day1input.txt", "utf8").then((result) => {
    const arr = result.split("\n").map((value) => parseInt(value));
    // const arr = [...testArr];
    const windowArr = [];
    for (let i = 1; i < arr.length - 1; i++) {
      windowArr.push(arr[i - 1] + arr[i] + arr[i + 1]);
    }
    console.log(windowArr);
    let count = 0;
    for (let i = 1; i <= windowArr.length; i++) {
      if (windowArr[i] > windowArr[i - 1]) count++;
    }
    return count;
  });
};

part1().then((output) => console.log(output)); // 1393
part2().then((output) => console.log(output)); // 1359

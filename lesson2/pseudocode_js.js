function getSum(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

function mergeStrings(strings) {
  let mergedStrings = "";
  strings.forEach((string) => {
    mergedStrings += string;
  });
  return mergedStrings;
}

function everyOther(integers) {
  let iterator = 0;
  let result = [];

  while (iterator < integers.length) {
    result.push(integers[iterator]);
    iterator += 2;
  }
  return result;
}

function findThirdMatch(string, charToMatch) {
  let counter = 0;
  for (let iterator = 0; iterator < string.length; iterator += 1) {
    if (string[iterator] === charToMatch) {
      counter += 1;
    }
    if (counter === 3) {
      return iterator;
    }
  }
  return null;
}

function merge(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index]);
    result.push(array2[index]);
  }
  return result;
}

console.log(getSum(1, 2));
console.log(mergeStrings(["blue", "moon", "sways", "gently"]));
console.log(everyOther([1, 4, 7, 2, 5]));
console.log(findThirdMatch("axbxcdxex", "x"));
console.log(merge([1, 2, 3], [4, 5, 6]));

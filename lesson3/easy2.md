## Question 1

Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```js
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
```

**_Solution:_**

```js
advice.replaceAll("important", "urgent");
```

## Question 2

The `Array.prototype.reverse` method reverses the order of elements in an array, and `Array.prototype.sort` can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shorn below. Write two distinct ways of reversing the array without mutating the original array. Use `reverse` for the first solution, and `sort` for the second.

```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

**Bonus Question:** Can you do it using the `Array.prototype.forEach()` method?
**_Solution:_**

```js
numbers.slice().reverse();
[...numbers].sort((num1, num2) => num2 - num1);
```

**_Bonus_**

```js
let reversedNumbers = [];
numbers.forEach((number) => {
  reversedNumbers.unshift(number);
});
```

## Question 3

Given a number and an array, determine whether the number is included in the array.

```js
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true
```

**_Solution:_**

```js
numbers.includes(number1);
numbers.indexOf(number2) !== -1;
```

## Question 4

Starting with the string:

```js
let famousWords = "seven years ago...";
```

show two different ways to put the expected "Four score and " in front of it.

```js
let frontString = "Four score and ";
frontString + famousWords;
frontString.concat(famousWords);
```

## Question 5

Given an array of numbers `[1, 2, 3, 4, 5]`, mutate the array by removing the number at index 2, so that the array becomes `[1, 2, 4, 5]`.

**_Solution:_**

```js
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
```

## Question 6

Suppose we build an array like this:

```js
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
```

This code will create a nested array that looks like this:

```js
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
```

Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future lesson.

Create a new array that contains all the above values, but in an un-nested format:

```js
["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];
```

**_Solution:_**

```js
// forEach
let editedArray = [];
flintstones.forEach((element) => {
  editedArray = editedArray.concat(element);
});

// spread
let editedArray = [].concat(..flintStones);

// reduce
let editedArray = flintStones.reduce((accum, elem) => {
  return accum.concat(element);
}, []);

// flat
let editedArray = flintStones.flat();
```

## Question 7

Consider the following object:

```js
let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};
```

create an array from this object that contains only two elements: Barney's name and Barney's number:

```js
["Barney", 2];
```

**_Solution:_**
`Object.entries()` returns the properties and their corresponding values in key-value pairs in an array.

```js
let keyValuePairs = Object.entries(flintstones); // gets array of key-value pair arrays
// find the pair in the array where the first value (the key) is equal to "Barney"
// remove it from the array of pairs and return it
keyValuePairs.filter((pair) => pair[0] === "Barney").shift();
```

## Question 8

How would you check whether the objects assigned to variables `numbers` and `table` below are arrays?

```js
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
```

**_Solution:_**

```js
Array.isArray(numbers);
Array.isArray(table);
```

## Question 9

Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```js
let title = "Flintstone Family Members";
```

**_Solution_**

```js
let padding = Math.floor((40 - title.length) / 2);
let centeredTitle = title.padStart(padding + title.length, " ");
```

## Question 10

Write a one-line expression to count the number of lower-case t characters in each of the following strings:

```js
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
```

**_Solution:_**

```js
[...statement1.matchAll("t")].length; // matchAll
statement2.split("").filter((char) => char === "t").length; // split and filter
```

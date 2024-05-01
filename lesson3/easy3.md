## Question 1

Write three different ways to remove all of the elements from the following array:

```js
let numbers = [1, 2, 3, 4];
```

**_Solution:_**

```js
// loop and pop
while (numbers.length > 0) {
  numbers.pop();
}

// splice
numbers.splice(0, numbers.length);

// set the length to 0
numbers.length = 0;
```

## Question 2

What will the following code output?

```js
console.log([1, 2, 3] + [4, 5]);
```

**_Solution:_**

```js
1, 2, 34, 5;
```

`[1, 2, 3]` gets coerced to `"1,2,3"` and `[4, 5]` gets coerced to `"4,5"`. the strings then get concatenated and we get `"1,2,34,5"`.

## Question 3

What will the following code output?

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
```

**_Solution:_**

```
hello there
```

on line 2 str2 got initialized to the value of str1. str2 then got reassigned to an entirely new string, `"goodbye!"` on line 3. This does not affect the string value assined to str1. Strings are primitive values and are immutable. line 4 outputs the unmutated str1, which is `"hello there"`

## Question 4

What will the following code output?

```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```

**_Solution:_**

```
[{ first: 42 }, { second: "value2"}, 3, 4, 5]
```

To start off, `arr1` and `arr2` are not pointing to the same array (on line 2, the `slice` method invocation basically created a copy of the original array and assigned it to `arr2`). However, the first index of both arrays stores a pointer to the same object `{ first: "value1" }`. On line 3, this said object is being mutated. So when line 4 outputs `arr1`, the change will reflect.

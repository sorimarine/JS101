### Example 1

```js
let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2
```

- on line 1, `myVar` is declared and initialized with the number 1.
- on line 3, the function `myFunc` was declared.
- on line 7, `myFunc` was invoked, so we'll step through the function:
  - the global variable `myVar` is reassigned to the number `2`;
- on line 8, we log `myVar`, which is currently `2`, so it will print out the `2`

### Example 2

```js
let myVar = [1];

function myFunc() {
  myVar = [2];
}

myFunc();
console.log(myVar); // [2]
```

- on line 1, `myVar` is declared and initialized to the array `[1]`
- on line 3, the function `myFunc` is declared
- on line 7, `myFunc` is invoked, so we'll step inside the function:
  - on line 4, the global variable `myVar` is reassigned to the array `[2]`
- on line 8, we log `myVar`, which currently points to the array `[2]`.
- It will log out [2]

### Example 3
```js
let myVar = [1];

function myFunc() {
  myVar[0] = 2;
}

myFunc();
console.log(myVar); // [2]
```

- on line 1, `myVar` is declared and initialized to the array `[1]`;
- on line 3, the function `myFunc` is declared
- on line 7, `myFunc` is invoked, so we'll step inside the function:
  - on line 4, the global variable `myVar` is being mutated. The element at the first index of the array it points to is being reassigned to the number `2`.
- on line 8, we log `myVar`, which currently points to the same (but mutated) array as before. It is now `[2]`, so it'll log that out.

### Example 4
```js
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar); // 1
```

- on line 1, the global `myVar` is declared and intialized
- on line 2, the function `myFunc` is declared
- on line 7, `myFunc` is invoked, so we'll step inside the function:
  - on line 4, the function scoped `myVar` is being reassigned the value 2. This does not have any impact on the global variable `myVar`
- on line 8, we log the global variable `myVar`, which is currently `1` to the console.


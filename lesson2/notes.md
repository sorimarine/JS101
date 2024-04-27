# Lesson 2

---

## Truthiness

- **False**:

  - `false`
  - `undefined`
  - `null`
  - `0`
  - `""`
  - `NaN`

- **Short-Circuiting**

---

## Walk-through: Calculator

- `readline-sync`

---

## Pseudocode

### Formal Pseudocode

- `START`
- `SET`
- `GET`
- `PRINT`
- `READ`
- `IF/ELSE IF/ELSE`
- `WHILE`
- `END`

### Pseudocode Practice

- **_a function that returns the sum of two numbers_**:

  - Informal

    ```
    Given two numbers.

    Add the first value to the second value and return the result.
    ```

  - Formal

    ```
    START

    # Given two numbers.

    SET number1 = first number;
    SET number2 = second number;
    SET sum = number1 + number2;

    PRINT sum
    ```

  - JavaScript

    ```js
    function getSum(number1, number2) {
      let sum = number1 + number2;
      return sum;
    }
    ```

    ```

    ```

- **_a function that takes an array of strings, and returns a string that is all those strings concatenated together_**

  - Informal

    ```
    Given an array of strings.

    Initialize an empty string to store the result; call it result.
    Iterate over the array one by one:
    - for each iteration, concatenate the current string to the result string.

    Return the result string.
    ```

  - Formal

    ```
    # Given an array of strings called "strings"

    SET resultString = ""
    SET iterator = 1

    WHILE iterator < length of strings:
        SET resultString = resultString + value within strings array at space "iterator"

    PRINT resultString

    ```

  - JavaScript

    ```js
    function mergeStrings(strings) {
      let mergedStrings = "";
      strings.forEach((string) => {
        mergedStrings += string;
      });
      return mergedStrings;
    }
    ```

- **_A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:_**

  ```js
  everyOther([1, 4, 7, 2, 5]); // => [1,7,5]
  ```

  - Informal

    ```
    Given an array of integers; call it "integers".

    Initialize an empty array; call it "result".
    Initialize and set the iterator to the first space of the integers array.
    While the iterator does not reach beyond the bounds of the array:
      - Insert the value at the space iterator of the integers array into the result array
      - Increase the iterator by 2
    return the result array
    ```

  - Formal

    ```
    START

    # Given an array of integers, called "integers"

    SET iterator = 1
    SET result = []

    WHILE iterator <= length of integers
      PUSH value within integers array into result array
      iterator = iterator + 2

    PRINT result
    ```

  - JavaScript

    ```js
    function everyOther(integers) {
      let iterator = 0;
      let result = [];

      while (iterator < integers.length) {
        result.push(integer[iterator]);
        iterator += 2;
      }
      return result;
    }
    ```

- \*\*\_a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is `'x'` and the string is `'axbxcdxex'`, the function should return 6 (the index of the 3rd `'x'`). If the given character does not occur at least 3 times, return `null`.

  - Informal

    ```
    Given a string and a character

    Initialize a counter and set it to 0; call it counter.
    Iterate over the string while keeping track of the iterator:
      - If the character at the iterator's position of the string matches the given character, add 1 to the counter
      - If the counter is 3, return the iterator
    return null
    ```

  - Formal

    ```
    START

    # Given a string (called string) and a character (called charToMatch)

    SET counter = 0
    SET iterator = 1st position of the string
    WHILE iterator is less than length of string:
      IF character at iterator position of the string is equal to charToMatch:
        counter = counter + 1
      IF counter === 3:
        RETURN iterator
      iterator = iterator + 1
    RETURN null

    END
    ```

  - JavaScript
    ```js
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
    ```

- **_a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:_**

  ```js
  merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
  ```

  - Informal

    ```
    Given two arrays of numbers, with the same length

    initialize a result array that will be return at the end

    Iterate over the length of the given arrays:
      - push the value at the iterator position of array one into result array
      - push the value at the iterator position of array two into result array
    return the result array
    ```

  - Formal

    ```
    START

    Given two arrays of numbers (array1, array2)

    SET result = empty array
    SET iterator = 1st position
    WHILE iterator is within the length of the given arrays:
      - PUSH value at iterator position of array one into result array
      - PUSH value at iterator position of array two into result array
      iterator += 1
    RETURN result
    ```

  - JavaScript
    ```js
    function merge(array1, array2) {
      let result = [];
      for (let i = 0; i < array1.length; i += 1) {
        result.push(array1[i]);
        result.push(array2[i]);
      }
      return result;
    }
    ```

### 15. Precedence

- an operator that has higher precedence than another is said to bind more tightly to its operands.
- it's best practice to use parentheses to make it easier to read

### 17. Explicit Type Coercion

**_parseInt_**

- converts to int by dropping decimal parts
- "12oz" => 12
- "+12oz" => 12
- takes in radix as optional second argument. default is base-10

**_parseFloat_**

- converts string into number until it encounters a character that can't be converted
- "12 grams" => 12
- "12.2 grams" => 12.2

**_Coercing Numbers using the + operator_**

- the unary `+` operator works like the `Number` function.

```
+"" => 0
+"1" => 1
+"2.3" => 2.3
+[] => 0
+"abc" = NaN
```

**_Coercing values to strings_**

- `toString` method
  - works on all data types except `null` and `undefined`.
  - returns a string representation of the value
  ```js
  let number = 42;
  number.toString(); // "42"
  ```
  - `42.toString() // error`
  - `(42).toString() // "42"`
  - `42..toString() // "42"`
  - `[1, 2, 3].toString() // "1,2,3"`
  - `[1, null, 2, undefined, 3] // "1,,2,,3"`
  - by default, an object's toString method returns `[object object]`
- `String` function can be used to perform the same function as the `toString` method
  - `String(42) // "42"`
  - `String([1, 2, 3]) // "1,2,3"`
  - `String({a: "foo", b: "bar"}) // [object, object]`
  - `String(null) // "null"`
  - `String(undefined) // "undefined"`
  - unlike `toString` method, `String` function can be used on `null` and `undefined`

**_Template Literals_**

- inside template literals, JavaScript implicitly coerces interpolation expressions like `${something}` to string values. No explicit coercion needed.

### 18. Implicit Type Coercion

- Generally try to avoid

**_Implicit Coercion with the `==` Operator_**

- avoid using it bro
- always better to be more explicit and clear
- When a number is compared with a string using `==`, the string is coerced into a number
- When boolean is compared with any other value, it's coerced into a number and compared again using the `==` operator.
- When an object is compared with a primitive value, it's coerced into a primitive value and compared again using the `==` operator.
- `undefined == null` evaluates to true
- Shouldn't be comparing things of different types anyway. might need to redesign your code.

**_Implicit Coercion with the `+` Operator_**

- When one of the operand is a string, the other operand gets coerced into a string and concatenated
- When both operands are a combination of numbers, booleans, `null`, or `undefined`, they get converted to numbers and added together

```js
null + true; // 1
null + false; // 0
true + 1; // 2
1 + undefined; // NaN
```

- When one operand is an object, both operands get converted to strings and concatenated

```js
[1] +
  (2)[1] + // "12"
  "2"[(1, 2)] + // "12"
  3; // "1,23"
[] + 5; // "5"
[] + true; // "true"
42 + {}; // "42[object object]"
```

**_Relational Operators_**
`<`, `>`, `<=`, `=>`

- when both operands are strings, they're compared lexicographically
- otherwise, Javascript converts them into numbers before comparing them

```js
11 > "9"; // true.
123 > "a"; // 'a' is coerced into NaN; comparison to NaN always false.
true > null; // true. 1 > 0
true > false; // true. 1 > 0
null <= false; // true. 0 <= 0
undefined >= 1; // false. NaN >= 1
```

**_Best Practices_**

- **always use explicit type coercions**
- **always use strict equality and inequality operators (`===` and `!==`**)

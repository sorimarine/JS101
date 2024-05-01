## Question 1

Will the code below raise an error?

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
```

**_Solution:_**
No. The index 6 of the `numbers` array will be assigned the number `5` and indexes 3 through 5 will be empty.

**Bonus**:

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // what will this line return?
```

**_Bonus Solution:_**
_It will return `undefined`. However, it's important to note that the slot is considered `empty` and does not have a value, not even `undefined`_.

## Question 2

How can you determine whether a given string ends with an exclamation mark (`!`)?

```js
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```

**_Solution:_**

```js
let MARK = "!";
console.log(str1[str1.length - 1 === MARK]);
console.log(str2.charAt(str2.length - 1) === MARK);
console.log(str1.at(-1) === MARK);
console.log(str2.endsWith(MARK));
```

## Question 3

Determine whether the following object of people and their age contains an entry for `'Spot'`:

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```

**_Solution:_**

```js
let propertyName = "Spot";
ages.hasOwnProperty(propertyName);
```

## Question 4

Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
```

**_Solution:_**

```js
munstersDescription[0].toUpperCase() + munstersDescription.slice(1);
```

## Question 5

What will the following code output?

```js
console.log(false == "0");
console.log(false === "0");
```

**_Solution:_**

```js
true; // false => 0. '0' => 0. 0 === 0
false; // false !== '0"
```

## Question 6

We have most of the Munster Family in our `ages` object;

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
```

Add entries for Marilyn and Spot to the object:

```js
let additionalAges = { Marilyn: 22, Spot: 237 };
```

**_Solution:_**

```js
{ ...ages, ...additionalAges } // one way
Object.assign(ages, additionalAges ) // another
```

## Question 7

Determine whether the name `Dino` appears in the strings below -- check each string separately:

```js
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
```

**_Solution:_**

```js
str1.includes("Dino");
str2.indexOf("Dino") !== -1; // returns -1 if the string's not found
str1.match("Dino") !== null; // returns null if the string's not found
```

## Question 8

How can we add the family pet, `"Dino"`, to the following Array?

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
```

**_Solution_**

```js
flintStones = flintStones.concat("Dino"); // using concat
flintStones.push("Dino"); // using push
flintStones[flintStones.length] = "Dino"; // using assignment at index
```

## Question 9

In the previous problem, our first answer added `'Dino'` to the array like this:

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
```

How can we add multiple items to our array (`'Dino'` and `'Hoppy'`)
**_Solution:_**

```js
flintStones.push("Dino", "Hoppy");
```

## Question 10

Return a new version of this sentence that ends just before the word `house`. Don't worry about spaces or punctuation: remove everything starting from the beginning of `house` to the end of the sentence.

```js
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
```

**_Solution:_**

```js
advise.slice(0, advice.indexOf("house"));
```

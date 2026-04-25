# Javascript

### Source - https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=m4XOx5h1KSOklsJP

# How Js works?

Everything in JS happens inside an execution context.
<br>

There are 2 components of the execution context: <br>

> Variable Environment / Memory component - where data is stored in key:value pair
> <br>
> Code Environment / Thread of Execution - where actual lines of code are

### Javscript is a synchronous, Single threaded language

Code lines are executed line by line in a sequence

## What happens when you run JS code

> when you run a js code, an execution context is created.
> when a function is called: a new execution context is created.

> ![alt text](./images/image-1.png)

-> Call Stack maintains the order of execution of execution contexts

> Call Stack is aka: Execution context stack, Program Stack, Control stack, Runtime stack, machine stack

# HOISTING IN JS

#### var Hoisting

var declarations are hoisted and initialized with undefined.

This leads to the classic hoisting behavior.
```js
console.log(a); // undefined
var a = 10;

// What happens internally:
var a; // hoisted
console.log(a);
a = 10;
```
### let and const Hoisting

They are also hoisted, but NOT initialized.

They remain in the Temporal Dead Zone (TDZ) until the line where they are declared.

Accessing them before declaration throws a ReferenceError.

```js
console.log(x); // ❌ ReferenceError
let x = 10;

Internally (conceptually):
// x is hoisted but in TDZ
let x; // not initialized → TDZ
console.log(x); // ReferenceError
x = 10;
```

### 2. Function Hoisting
**Function Declarations — Fully Hoisted**

You can call them before they appear in the code.
```js
greet(); // ✔ Works

function greet() {
  console.log("Hello!");
}

Internally:
function greet() {} // hoisted fully
greet();
```

### Function Expressions — NOT Fully Hoisted

If using var:

```js
hello(); // ❌ TypeError (hello is undefined)

var hello = function () {
  console.log("Hi");
};


Because:

var hello; // hoisted
hello = undefined;
hello(); // TypeError

### Arrow Functions — Behave Like Function Expressions
sayHi(); // ❌ ReferenceError (if let/const)

const sayHi = () => {
  console.log("Hi");
};
```

### 3. Hoisting Priority

| Type                          | Hoisted? | Initialized?           | Error if Accessed Early? |
|-------------------------------|----------|--------------------------|---------------------------|
| `var`                         | Yes      | Yes (`undefined`)        | No                        |
| `let`                         | Yes      | No (TDZ)                 | `ReferenceError`          |
| `const`                       | Yes      | No (TDZ)                 | `ReferenceError`          |
| Function Declaration          | Yes      | Yes (fully)              | No                        |
| Function Expression (`var`)   | Yes      | Yes (`undefined`)        | `TypeError`               |
| Function Expression (`let`)   | Yes      | No                       | `ReferenceError`          |
| Function Expression (`const`) | Yes      | No                       | `ReferenceError`          |
| Arrow Function (`var`)        | Yes      | Yes (`undefined`)        | `TypeError`               |
| Arrow Function (`let`)        | Yes      | No                       | `ReferenceError`          |
| Arrow Function (`const`)      | Yes      | No                       | `ReferenceError`          |


### 4. Temporal Dead Zone (TDZ)

The time between:

Creation of variable binding (during compilation)
and Actual initialization in code

Variables in TDZ cannot be accessed.

```js
console.log(b); // ReferenceError
let b = 20;
```

# Undefined vs Not Defined in JavaScript

Understanding the difference between **undefined** and **not defined** is important for debugging and interviews. Although they sound similar, they represent completely different situations in JavaScript.

---

## ⭐ What is `undefined`?

A variable is **declared** but **not assigned any value**.

### Example

```js
let a;
console.log(a); // undefined

Why?

The variable exists in memory (hoisted).

No value has been assigned yet, so JavaScript automatically sets it to undefined.

Another example:

console.log(x); // undefined
var x = 10;

⭐ What is not defined?

A variable is never declared anywhere in the code.

Example
console.log(b); // ReferenceError: b is not defined
```

✅ Summary

undefined: Variable exists, but no value is assigned.

not defined: Variable does not exist in the current scope.

## Javascript is a losely typed language.

```js
var a = 10;
console.log(a)  --> 10
a="Hello World"
console.log(a)  --> Hello World

// any type of ds can be used in a var/let/const (interchangebly)
```

# THE SCOPE CHAIN

```js
function a() {
  console.log(b); //-- b is accessible
  c();
  function c() {
    console.log(b); //-- b is accessible, it is global
  }
  var x = 69;
}
var b = 10;
a();
console.log(x); //-- Error: "x is not defined"
```

### Anything in the global scope can be accessed anywhere in the code.

### but if something is defined in the scope of a function, it is accessible inside the function or any function inside the fn ... howeverit cannot be accessed outside the function

# Data Types:

## Primtive Types

```js
// String: Text data.
let name = "Gemini"; // Double quotes
let city = "Delhi"; // Single quotes

// Number: Both integers and decimals (floats).
let age = 21;
let price = 99.99;

//  Boolean: Logical entities. Only two values: true or false.
let isStudent = true;
let isTired = false;

// Undefined: A variable that has been declared but not assigned a value yet.
let score; // value is currently 'undefined'

// Null: Represents "intentional absence" of any object value. You set this manually to say "this is empty."
let emptyBox = null;

// The Advanced Types (Use rarely, but good to know)BigInt: For numbers larger than the standard Number type can safely hold (integers larger than $2^{53} - 1$).JavaScriptlet
hugeNumber = 9007199254740991n; // Notice the 'n' at the end
// Symbol: Used to create unique identifiers for objects (we will revisit this when we learn Objects).
```

# Objects

```js
// # OBJECTS:
// While primitives (like strings and numbers) represent a single value, an Object represents a collection of related data and functionality.

//1. Anatomy of objects- We define objects using Object Literal syntax: { key: value }.

const car = {
  // Properties (Data)
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  isElectric: true,

  // Methods (Actions/Functions)
  start: function () {
    console.log("Vroom! (quietly)");
  },
};

// 2. Accessing Data (The Two Ways)
// -> Dot Notation (.): The clean, standard way.

console.log(car.brand); // "Tesla"
// Limit: You cannot use spaces or variables in the key name.

// -> Bracket Notation ([]): The flexible way.

console.log(car["model"]); // "Model 3"
// Superpower: You can use variables inside the brackets!

let searchKey = "year";
console.log(car[searchKey]); // 2024

// 3. Modifying Objects
// Objects are mutable (changeable), even if you declare them with const. You can't change the box (the variable reference), but you can mess with the contents.

car.color = "Red"; // Adds a new property
car.year = 2025; // Updates an existing one
delete car.model; // Removes a property

// 4. Objects are "Reference" Types

// Primitives (Copy by Value):
let a = 10;
let b = a; // b gets a COPY of 10
a = 20;
console.log(b); // 10 (b is safe)

// Objects (Copy by Reference):
let x = { value: 10 };
let y = x; // y DOES NOT get a copy. It gets a specific link (reference) to x.
x.value = 20;
console.log(y.value); // 20 (y changed too!)

// # The typeof Operator
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42); // Output: "number"
console.log(typeof true); // Output: "boolean"
```

## Built-in Objects

These are the pre-made "toolkits" JavaScript gives you so you don't have to reinvent the wheel. The roadmap explicitly lists these as a key node. <br>

```md
- Math: A collection of math tools.

Math.random(): Random number between 0 and 1.

Math.max(10, 20): Returns the larger number (20).

- Date: Handling time is hard; this object does it for you.

 new Date(): Current timestamp.

String, Number, Boolean: These are "wrapper objects" that give primitives their methods (like "hello".toUpperCase()). <br>
```

## Lexical environment means the local memory along with lexical environment of the parent. (in every environment there is a refrence to its parent's lexical environment.)

![alt text](./images/image2.png)

# Type Casting in Js

1. Type Conversion vs. Coercion:

--- Type Conversion (Explicit): You manually tell JavaScript to change the type (e.g., "Turn this string into a number").

--- Coercion (Implicit): JavaScript does it automatically behind your back because you did something weird (e.g., trying to subtract text from a number).

2. Implicit Type Casting (Coercion)
   This happens when you mix types in an operation. It is often the source of bugs.

> String Concatenation (+): If you add anything to a string, JS turns the other thing into a string.

```js
let result = "3" + 2;
// Result: "32" (String)
```

Numeric Operations (-, \*, /): JS tries to be helpful and turns strings into numbers.

```js
let result = "10" - 2;
// Result: 8 (Number)
```

3. Explicit Type Casting
   We use the built-in global functions (which look like the types themselves) to transform data.

```js
//1. CONVERT TO STRING:
let val1 = String(123); // "123"
let val2 = String(true); // "true"
let val3 = String(null); // "null" (Safe!)

//Alternative: value.toString() (But be careful: this crashes if value is null or undefined).

//2. CONVERT TO NUMBER
// The Tool: Number(value)
// The Parsing Tools: parseInt() (integers) and parseFloat() (decimals).

let n1 = Number("42"); // 42
let n2 = Number("42.5"); // 42.5
let n3 = Number(""); // 0 (Watch out for this!)
let n4 = Number("Hello"); // NaN (Not a Number) - The error flag

let n5 = Number(true); // 1
let n6 = Number(false); // 0
// If you see NaN, it means "Not a Number". It's JavaScript screaming, "I tried to do math with text, and I failed."

// 3. Converting to Boolean
// Used for logic checks (e.g., "Did the user type anything?").

// The Tool: Boolean(value)
Boolean(0); // false
Boolean(1); // true
Boolean("Gemini"); // true
Boolean(""); // false (Empty strings are false)
Boolean(null); // false
```

```md
The "Boolean" Trap: if statements automatically coerce values to true or false.

Falsy values: 0, "" (empty string), null, undefined, NaN, false.

Truthy values: Everything else (including "0" and []).
```

# Equality Comparisons

## 1. Loose Equality (==)

This is the "forgiving" operator. It allows coercion. It tries to convert types to match before comparing.

```md
5 == "5" → true (Because it converts the string "5" to number 5 first).

0 == false → true (Because 0 is falsy).
Warning: This causes many bugs. Most developers avoid it.
```


## 2. Strict Equality (===)

This is the "strict" operator. It does NOT allow coercion. It checks two things:
> Are the Types the same?
>Are the Values the same?

```md
5 === "5" → false (Type Number vs Type String).

5 === 5 → true
```

## 3. Object.is
It acts almost exactly like === but handles two weird edge cases better:
```md
NaN === NaN is actually false (weird, right?).

Object.is(NaN, NaN) is true (correct).
```

## #Equality Algorithms:
## 4. isLooselyEqual (==)

The Rule: If types differ, convert them to match, then compare.
```md
Real World: This is why "5" == 5 is true. 
```

## 5. isStrictlyEqual (===)
The Rule: If types differ, return false immediately. Do not convert.

```md
Exception: It says NaN === NaN is false. (This is the only weird part).
```

## 6. SameValue (Object.is)
The Rule: Exact match, no exceptions. <br>

```Fixes the Exception: It correctly says NaN equals NaN.

Edge Case: It distinguishes between positive zero +0 and negative zero -0 (rarely matters, but good to know).
```

## 7. SameValueZero (The Hidden Hero)
The Rule: Like "SameValue", but it treats +0 and -0 as the same thing.

```
Where it's used: You cannot call this directly. JavaScript uses it internally for Data Structures like Arrays (specifically the .includes() method) and Sets.
```
<br>

# Data Structures in JavaScript
## 1. Indexed Collections:
>Indexed collecections were data is ordered by an integer index (0,1,2,3... )
### ( i ) Arrays
Standard javascript arrays are dynamic, i.e they can hold items of any type and change size automatically.

- Key Features:

  - Zero-indexed (first item is at 0). <br>
  - Can contain mixed types (numbers, strings, objects).<br>
  - Iterable (can be used in loops).

<br>

```js

let stack = ["HTML", "CSS", "JS"];

// Accessing elements
console.log(stack[0]); // "HTML"

//  Modifying

stack.push("React"); // Adds to end
stack.pop();         // Removes from end
stack.unshift("Git"); // Adds to start
stack.shift();        // Removes from start
stack[2] = "Tailwind"; //updates value

// 4. Searching
console.log(stack.indexOf("CSS")); // 1
console.log(stack.includes("Python")); // false
```
> A Crucial Warning: "Holes" in Arrays
JavaScript arrays are flexible. If you add an item at an index that skips a few spots, JavaScript will create "empty slots" (holes) in between.

```js 
let fruits = ["Apple", "Banana"];

// Jumping ahead to index 5
fruits[5] = "Mango";

console.log(fruits);
// Output: ["Apple", "Banana", empty × 3, "Mango"]
console.log(fruits[2]); // undefined
```

### ( ii ) Typed Arrays
Unlike standard arrays, these are array-like buffers specifically designed to handle raw binary data. They are rarely used in general web dev but are critical for WebGL, Canvas, or processing audio/video.

- Key Features:

  - Fixed length (cannot resize like normal arrays).<br>
  - All items must be the same type (e.g., only 8-bit integers).<br>
  - Much faster for heavy mathematical computations.

<br>

```js

// Creates a buffer for 8 integers (8-bit signed)
let buffer = new Int8Array(8);

buffer[0] = 10;
buffer[1] = 255; // Overflow! Int8 only fits -128 to 127.
console.log(buffer); // Int8Array(8) [10, -1, 0, 0, ...]

console.log(buffer[8]); // undefined
```
## 2. Structured Data
**JSON (JavaScript Object Notation)** <br>
JSON is a text-based format for representing structured data. It is the standard for API communication.

- Key Rules:
  - Keys Must be wrapped in "".
  - No functions or undefined values allowed inside.
  - Double quotes for strings (no single quotes).

```js
const user = {
    id: 1,
    name: "Gemini",
    isAdmin: true
};

// 1. JSON.stringify() -> Converts JS Object to JSON String (for sending to server)
const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: '{"id":1,"name":"Gemini","isAdmin":true}'

// 2. JSON.parse() -> Converts JSON String back to JS Object (for using in code)
const receivedData = '{"id":2, "name":"User2"}';
const userObj = JSON.parse(receivedData);
console.log(userObj.name); // "User2"
```

## 3. Keyed Collections
These are collections that use "keys" to organize data, similar to Objects but with specialized behaviors.

### ( i ) Map
A map is a collection of keyed data items, similar to an Object. However, the main difference is that Map keys can be of any type (objects, functions, primitives) whereas Object keys are always Strings or Symbols.

**Methods: .set(), .get(), .has(), .delete(), .size.**

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function() {};

// Setting values
myMap.set(keyString, "Value associated with string");
myMap.set(keyObj, "Value associated with object");
myMap.set(keyFunc, "Value associated with function");

// Getting values
console.log(myMap.size); // 3
console.log(myMap.get(keyObj)); // "Value associated with object"
```

### ( ii ) Set
A Set is a collection of values where each value may only occur once. If you try to add a duplicate, it is ignored.

Use Case: Removing duplicates from an array.

**Methods:  .add(), .has(), .delete(), .size.**

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Ignored! 5 is already there.

console.log(mySet); // Set(2) { 1, 5 }

// TRICK: Remove duplicates from an array
const numbers = [1, 2, 2, 3, 3, 3];
const uniqueNumbers = [...new Set(numbers)]; // [1, 2, 3]
```

### ( iii ) WeakMap
**A WeakMap is like a Map, but with two major differences:**
- Keys must be Objects (not primitives like strings/numbers).
- Weak References: If the key object is deleted elsewhere in your code, it is automatically removed from the WeakMap by the Garbage Collector. It prevents memory leaks.

```js
let user = { name: "John" };

const weakMap = new WeakMap();
weakMap.set(user, "Secret Data");

// If we delete the user object...
user = null;

// ...the "Secret Data" inside weakMap is automatically cleaned up from memory.
// You cannot iterate over a WeakMap (no .forEach, no .size).
```

### ( iv ) WeakSet
**Similar to WeakMap, but for Sets.**
- Values must be Objects.
- Weak References: If the object is deleted elsewhere, it disappears from the Set.

```js
let visitedSet = new WeakSet();

let user1 = { id: 1 };
let user2 = { id: 2 };

visitedSet.add(user1);
visitedSet.add(user2);

console.log(visitedSet.has(user1)); // true

user1 = null; // user1 is now removed from the WeakSet automatically.
```
<br>

# Loops & Iterators
### 1. <u> Ffor loop </u>
```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
}
```

### 2. <u>While loop </u>
```js
let battery = 10;

while (battery > 0) {
    console.log("Phone is on. Battery:", battery);
    battery--; // Don't forget this, or you get an infinite loop!
}
```

### 3. <u>Do...While loop </u>
Guarantees the code runs at least once, even if the condition is false to begin with.

```js
let count = 100;

do {
    console.log("This prints once even though count is not < 5");
} while (count < 5);
```

### # The Modern Loops (The "JavaScript Way") ⬇️
These are cleaner and safer. You will use these 90% of the time in modern web dev.

### 4. <u>For...of loop </u>
The best way to loop through Arrays or Strings. It gives you the value directly.

```js
const colors = ["Red", "Green", "Blue"];

// "For every color OF the colors list..."
for (const color of colors) {
    console.log(color); 
}
// Output: Red, Green, Blue
```

### 5. <u>for...in loop</u>
Designed for Objects. It iterates over the Keys (property names).

```js
const user = { name: "Gemini", role: "Trainer", level: 99 };

// "For every key IN the user object..."
for (const key in user) {
    console.log(key, "->", user[key]); 
}
// Output:
// name -> Gemini
// role -> Trainer
// level -> 99
```
### 5. <u>Control Keywords</u>
- break: "Stop the loop immediately and leave."
- continue: "Skip the rest of this round and start the next one."

```js
const user = { name: "Gemini", role: "Trainer", level: 99 };

// "For every key IN the user object..."
for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // Skip 2
    if (i === 5) break;    // Stop at 5 (don't reach 6, 7...)
    console.log(i);
}
// Output: 0, 1, 3, 4
```
<br>

# Control Flow in Js

## 1. Conditional Statements
These allow the code to make decisions based on whether something is true or false.

### a. <u> if...else </u>
The most fundamental building block of logic.

* Logic: "If this condition is true, do X. Otherwise, do Y."

* else if: Used to check multiple conditions in a chain.

```js
const hour = 14;

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}
```

### b. <u> switch </u>
A cleaner alternative to many else if statements when you are comparing one variable against multiple fixed values.

* Key Rule: It uses Strict Equality (===) internally.
* break: Critical keyword. If you forget it, the code "falls through" to the next case automatically.
* default: Acts like the final else (runs if nothing matches).

```js
const role = "admin";

switch (role) {
    case "admin":
        console.log("Full Access Granted");
        break; // Stop here!
    case "editor":
        console.log("Edit Access Granted");
        break;
    case "guest":
        console.log("Read Only Access");
        break;
    default:
        console.log("Unknown Role - Access Denied");
}
```

## 2. Exceptional Handling
This protects your program from crashing when unexpected errors occur (like a server being down or bad user input).

### a. <u> throw statement </u>
Used to manually trigger an error. You can throw a string, number, or object, but it is best practice to throw an Error object.

```js
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative!"); // Stops execution immediately
    }
    return true;
}
```
### b. <u> B. try / catch / finally </u>
The safety net for your code.

- try: "Attempt to run this risky code."

- catch: "If the risky code crashes, run this block instead (don't kill the app)."

- finally: "Run this block no matter what happened (success or failure)."

```js
try {
    // 1. Risky code
    let data = JSON.parse("Invalid JSON String"); 
    console.log("Success!"); // This line will never run
} catch (err) {
    // 2. Error handling
    console.log("Something went wrong:", err.message);
} finally {
    // 3. Cleanup (always runs)
    console.log("Operation complete.");
}

```

### c. <u> Error Objects </u>
JavaScript has a built-in Error object that provides details about what went wrong.

- Properties:

- name: The type of error (e.g., "ReferenceError", "SyntaxError").

- message: The description you passed when creating it.

- stack: A trace of where the error happened (useful for debugging).

```js
const myError = new Error("Something broke");

console.log(myError.name);    // "Error"
console.log(myError.message); // "Something broke"
```
<br>

# Expressions and Operators

### a. <u> Assignment Operators </u>
These assign values to variables. You already know =, -=, +=, *=, etc.

```js
let score = 10;
score += 5; // score is now 15
score *= 2; // score is now 30
```

### b. <u> Arithmetic Operators </u>
- Standard math: +,-,*,/
- % modulous - gives remainder
- ** (Exponentiation): Power of. 2 ** 3 is 8 (2^3).
- ++ / --   : Increment or decrement by 1.

```js
console.log(10 % 3); // 1 (Because 10 divided by 3 is 3 with a remainder of 1)
console.log(2 ** 4); // 16
```

### c. <u> Comparison Operators </u>
- == / != (Loose equality/inequality - allows coercion)

- === / !== (Strict equality/inequality - checks type)

- , <, >=, <= (Greater/Less than)

### d. <u> Comparison Operators </u>
Used to combine multiple boolean checks.
- && (AND): Returns true only if both sides are true.
- || (OR): Returns true if at least one side is true.
- ! (NOT): Flips true to false (and vice versa).

```js
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

### e. <u> Unary Operators </u>

Operators that work on only one operand.

- typeof: Returns the type (e.g., typeof "hi" -> "string").

- +(Unary Plus): Tries to convert the operand to a number.
  - +"5" becomes the number 5.

- (Unary Negation): Negates the value.

   - -x (if x was 5, it becomes -5).

- delete: Removes a property from an object.

### f. <u> Conditional (Ternary) Operator </u>

This is a shortcut for if...else. It's the only operator that takes three operands.

- Syntax: condition ? valueIfTrue : valueIfFalse

```js
let age = 20;
//                  Condition  ?   True val  : False val
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

### g. <u>Bitwise & BigInt Operators (Advanced) </u>

- **Bitwise (&, |, ^, ~, <<, >>)** : Operate on the binary bits of numbers (e.g., comparing 0101 and 0011). You rarely use these in web dev unless you are doing graphics or low-level encoding.

- **BigInt**: Operators for massive numbers (suffixed with n). You can't mix BigInts with regular numbers in math!

### h. <u>String Operators </u>

- **A. Concatenation** : The + operator has a dual personality. If you use it with numbers, it adds. If you use it with strings, it joins (glues them together).

    - Rule: If any operand is a string, the result is a string.
```js
let firstName = "Gemini";
let greeting = "Hello, " + firstName + "!"; // "Hello, Gemini!"
```

- **B. Concatenation Assignment (+=)**: Just like x += 5 adds 5 to a number, text += " more" appends text to the end of a string.
```js
let story = "Once upon a time...";
story += " The End.";
console.log(story); // "Once upon a time... The End."
```

- **C. String Comparison (>, <)**: 

You can compare strings alphabetically (lexicographically).

    - "Z" is greater than "A".

    -"Banana" is greater than "Apple" (because B comes after A).

    -   Warning: Capital letters are "smaller" than lowercase letters (ASCII rule). "a" > "Z" is true.

### g. <u>Comma Operators</u>

- **The Rule:** It evaluates every expression from left to right, but it returns only the last one.

- **USE CASE - 1** : The "Weird" Assignment (Rare)
You almost never see this in production code, but it works:
```js

// JS calculates 1+1, then 5+5, then assigns 10 to x
let x = (1 + 1, 5 + 5); 

console.log(x); // 10 (The last value)
```

- **USE CASE - 2** : The for Loop (Common)
This is the only place comma operators are regularly used. It allows you to update two variables at once inside a loop.

```js
// i goes UP, j goes DOWN
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// ...
```

# Functions in Js

## 1. Function Parameters

### A. Default Parameters (ES6)
Allows you to initialize parameters with default values if no value or undefined is passed.

```js
function welcome(user = "Guest") {
    console.log(`Hello, ${user}!`);
}

welcome("Gemini"); // "Hello, Gemini!"
welcome();         // "Hello, Guest!"
```

### B. Rest Parameters (...args)
Allows a function to accept an indefinite number of arguments as an array.
- Syntax: Three dots ... followed by the name.
- Rule: It must be the last parameter.

```js
function sumAll(...numbers) {
    // 'numbers' is now an array: [10, 20, 30]
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(10, 20, 30)); // 60
```

## 2. Arrow Functions
A shorter syntax for writing function expressions. They are syntactically anonymous and do not have their own this, arguments, or super.

- **Implicit Return:** If the code is one line, you can remove {} and return.

```js
// Traditional Way
const add = function(a, b) {
    return a + b;
};

// Arrow Function (Explicit Return)
const addArrow = (a, b) => {
    return a + b;
};

// Arrow Function (Implicit Return - The "One-Liner")
const multiply = (a, b) => a * b;
```

## 3. IIFEs (Immediately Invoked Function Expressions)
A function that runs as soon as it is defined.
- **Pattern:** (Function Definition)();
- **Why use it?** To create a private scope and avoid polluting the global namespace with variables.

```js
(function() {
    let secretCode = 1234;
    console.log("I run immediately, and nobody can access secretCode from outside!");
})();

// console.log(secretCode); // Error: secretCode is not defined 
```

## 4. The arguments Object
An array-like object accessible inside functions that contains the values of the arguments passed to that function.

- **Limitation:** It does NOT work in Arrow Functions.

```js
function showArgs() {
    console.log(arguments.length);
    console.log(arguments[0]);
}

showArgs("A", "B", "C"); 
// Output: 
// 3
// "A"
```

## 5. Scope & Function Stack
This explains "where" variables live and "how" functions are tracked.

### a. <u> Scope </u>
- Global Scope: Variables defined outside any function. Accessible everywhere.
- Function Scope: Variables defined inside a function. Accessible only inside that function.
- Block Scope (let/const): Variables defined inside {} (like in an if or loop) are trapped there.
### b. <u> Function Stack (Call Stack) </u>
JavaScript is single-threaded. It uses a "Stack" data structure (Last In, First Out) to track which function is currently running.

1. Function A calls Function B.
2. A pauses, B goes on top of the stack.
3. B finishes, pops off the stack.
4. A resumes.

## 6. Advanced Scope Concepts

### a. <u> Recursion</u>
Recursion is when a function calls itself to solve a problem. It’s useful for tasks that have a repetitive structure (like tree traversal or math factorials).
- The Golden Rule: Every recursive function must have a Base Case (a stop condition). Without it, the function will call itself forever and crash the browser (Stack Overflow).
```js
function countDown(number) {
    // 1. Base Case: Stop when we hit 0
    if (number <= 0) {
        console.log("Blast off!");
        return;
    }

    // 2. Action: Print the number
    console.log(number);

    // 3. Recursive Call: Call itself with a smaller number
    countDown(number - 1);
}

countDown(3);
// Output:
// 3
// 2
// 1
// Blast off!
```

### b. <u> Lexical Scoping</u>
"Lexical" means "where you wrote it." Lexical Scoping means a function's access to variables is determined by its physical location in the source code.
- The Rule: An inner function can access variables from its outer (parent) function.
- The Direction: Scopes look UP. The inner scope can see the outer scope, but the outer scope cannot see inside the inner scope.
```js
const globalVar = "I am Global";

function outer() {
    const outerVar = "I am Outer";

    function inner() {
        const innerVar = "I am Inner";
        
        // inner() can see everything above it
        console.log(innerVar); // "I am Inner"
        console.log(outerVar); // "I am Outer" (Success!)
        console.log(globalVar); // "I am Global" (Success!)
    }
    
    inner();
    
    // console.log(innerVar); // ERROR! Outer cannot see inside Inner.
}

outer();
```

### c. <u> Closures</u>
This is widely considered the most important concept in JavaScript interviews.
- Definition: A closure is a function that "remembers" the variables from its outer scope, even after that outer function has finished executing.
- The Metaphor: Think of a closure like a "backpack." When a function leaves the room (scope) where it was born, it takes a backpack containing all the variables that were present at its birth.

```js
function createCounter() {
    let count = 0; // This variable should die when the function finishes...

    return function() {
        count++; // ...but this inner function keeps 'count' alive in a closure!
        console.log("Count is:", count);
    };
}

const myCounter = createCounter(); // createCounter runs and finishes.
// At this point, 'count' should be garbage collected, but it survives.

myCounter(); // Count is: 1
myCounter(); // Count is: 2
myCounter(); // Count is: 3
```

## 7. Built-in Functions
Standard functions provided globally by the browser/Node environment.
- parseInt("10"): Parses a string to an integer.
- parseFloat("10.5"): Parses a string to a decimal.
- isNaN(value): Checks if a value is NaN.
- eval(): Executes a string as code. (WARNING: Never use this. It is a massive security risk.)

<br>

# DOM APIs (Document Object Model)
The DOM is the bridge between your JavaScript code and the HTML/CSS visible in the browser. When a web page is loaded, the browser creates a Tree Structure of every element on the page. JavaScript can read, change, add, or delete these elements.

## 1. The document Object
The document object is your entry point. It represents the entire web page.

console.log(document): Prints the HTML of the current page.

document.title: Gets or sets the title of the tab.

## 2. Selecting Elements
Before you can change an element, you must "find" or "select" it.

### A. <u>The Modern Way (querySelector)</u>
This is the standard today. It uses CSS-style selectors (like #id or .class).
- document.querySelector("#header"): Selects the first element with id="header".
- document.querySelectorAll(".btn"): Selects all elements with class="btn" (returns a NodeList, similar to an array).

### B. <u>The Old Way (Specific Methods)</u>
You will still see these in older code.

- document.getElementById("main"): Faster, but only works for IDs.
- document.getElementsByClassName("row"): Returns a live collection (can be tricky).

```js
// HTML: <h1 id="title">Hello World</h1>

const title = document.querySelector("#title");
console.log(title); // <h1 id="title">Hello World</h1>
```

## 3. Manipulating Elements
Once you have selected an element, you can modify it.

### A. <u>Changing Content</u>
- .innerText: The visible text (ignores hidden text). (Recommended)
- .textContent: All text, including styling spacing.
- .innerHTML: Parses HTML tags (Use carefully! Risks security attacks like XSS).

```js
const heading = document.querySelector("h1");
heading.innerText = "Welcome, Gemini!";
```

### B. <u>Changing Styles</u>
- **NOTE:** CSS properties with dashes (e.g., background-color) become camelCase in JS (backgroundColor).

```js
const box = document.querySelector(".box");
box.style.backgroundColor = "red";
box.style.fontSize = "20px";
```

### C. <u>Changing Classes (The Best Way)</u>
Instead of manually changing styles, it's cleaner to toggle CSS classes.
- element.classList.add("active")
- element.classList.remove("hidden")
- element.classList.toggle("dark-mode")

## 4. Creating & Appending Elements
You can build HTML from scratch using JS.

1. document.createElement("div"): Creates a new empty tag.

2. element.append(newChild): Adds it to the DOM (inside a parent).

```js
// 1. Create
const newBtn = document.createElement("button");
newBtn.innerText = "Click Me";

// 2. Find Parent
const body = document.querySelector("body");

// 3. Attach
body.append(newBtn);
```
<br>

# Strict Mode
JavaScript was originally built in a hurry, so it allows some sloppy code (like using variables without creating them). Strict Mode fixes this. It turns "silent mistakes" into "loud errors".
#### How to use it?
Simply add the string 'use strict'; at the very top of your script or function.
```js
'use strict';

// 1. Prevents using undeclared variables
x = 3.14; // ERROR! (Without strict mode, this would accidentally create a global variable)

// 2. Prevents deleting undeletable things
delete Object.prototype; // ERROR!
```
Pro Tip: Modern JS modules and Classes enable strict mode automatically. You don't need to type it if you are using React or modern build tools.

<br>

# The this Keyword
This is widely considered the most confusing part of JavaScript. The value of this depends on how the function is called, not where it is written.

## a. Global Context (Using it alone)
When used alone, this refers to the Global Object.
- In a browser: this === window.
- In Node.js: this === global.

```JavaScript
console.log(this); // Window { ... }
```
## B. Inside a Method
When a function is part of an object (a method), this refers to the object itself.

```JavaScript
const person = {
    firstName: "Gemini",
    sayHi: function() {
        // 'this' is the person object
        return "Hi, " + this.firstName;
    }
};

console.log(person.sayHi()); // "Hi, Gemini"
```

## C. Inside a Regular Function
This is where it gets tricky.

- Non-Strict Mode: this defaults to the Global Object (window).
- Strict Mode: this is undefined.

```JavaScript
function showThis() {
    console.log(this);
}

showThis(); // Window (or undefined in strict mode)
```

## D. In Arrow Functions
Arrow functions do NOT have their own this. They inherit this from the parent scope (Lexical Scoping).

```js
const obj = {
    name: "Gemini",
    // Arrow function traps 'this' from the outer scope (Window)
    oops: () => {
        console.log(this.name); 
    }
};

obj.oops(); // undefined (because Window usually doesn't have a .name)
```

## E. In Event Handlers
When you click a button, this refers to the element that received the event (the HTML element).

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log(this); // The <button> element itself!
    this.style.backgroundColor = "blue";
});
```

## F. Function Borrowing
Imagine you have two objects. One has a cool method, and the other one wants to use it without copying the code.

```JavaScript
const wizard = {
    name: "Merlin",
    heal: function() {
        return this.name + " casts a healing spell!";
    }
};

const warrior = {
    name: "Arthur"
    // Arthur has no 'heal' method!
};

// "Function Borrowing"
// We use wizard.heal, but we force 'this' to be warrior
console.log(wizard.heal.call(warrior)); 
// Output: "Arthur casts a healing spell!"
```

## G. The Big Three: Call, Apply, Bind
They all do similar things, but with slight differences in how they handle arguments and when they run.

### A. <u>call()</u>
- Action: Runs the function immediately.
- Arguments: Passed one by one (comma separated).
- Memory Aid: Call uses Commas.   
```js
function introduce(level, kingdom) {
    console.log(`I am ${this.name}, Level ${level} of ${kingdom}.`);
}

const hero = { name: "Zelda" };

// Run immediately:
introduce.call(hero, 99, "Hyrule");
// Output: "I am Zelda, Level 99 of Hyrule."
```
### B. <u>apply()</u>
- Action: Runs the function immediately.
- Arguments: Passed as a single Array.
- Memory Aid: Apply uses Arrays.
- Use Case: Great when you have a list of data in an array and want to pass it to a function that expects separate arguments.
```js
const args = [50, "Mushroom Kingdom"];
introduce.apply(hero, args);
// Output: "I am Zelda, Level 50 of Mushroom Kingdom."
```
### C. <u>bind()</u>
- Action: Does NOT run the function immediately.
- Result: It returns a new function with this permanently "bound" (locked) to the object.
- Use Case: Essential for React event handlers or timers (setTimeout).
```js
const hero = { name: "Link" };

// 1. Create a bound version (it doesn't run yet)
const boundIntro = introduce.bind(hero);

// 2. Run it later whenever we want
boundIntro(10, "Hyrule"); 
// Output: "I am Link, Level 10 of Hyrule."
```

<br>

# Asynchronous JavaScript
By default, JavaScript is Synchronous and Single-Threaded. This means it can only do one thing at a time.
- Problem: If you ask JS to fetch data from a server (which takes 2 seconds), the entire website would freeze for 2 seconds. You couldn't click anything.
- Solution: Asynchronous JavaScript allows us to start a task, move on to other code, and come back to the task when it's finished.

## 1. The Event Loop
This is the mechanic that allows single-threaded JS to look like it's multitasking.
- Call Stack: Where standard code runs immediately (LIFO).
- Web APIs: Where heavy tasks (like setTimeout or fetch) are sent to "wait".
- Callback Queue: When a heavy task is done, it waits here.
- The Event Loop: It constantly checks: "Is the Stack empty If yes, move the first item from the Queue to the Stack."

## 2. Callbacks (The Old Way)
A callback is just a function you pass into another function to be executed later.
```js
console.log("1. Start");

// This mimics a server request taking 1 second
setTimeout(() => {
    console.log("2. Data Received");
}, 1000);

console.log("3. End");
```
#### Output: Start -> End -> Data Received. (Notice how it didn't wait!)

### -> <u>Callback Hell</u>
If you need to do things in order (Login -> Get ID -> Get Friends), you end up nesting callbacks inside callbacks.
```js
login((user) => {
    getId(user, (id) => {
        getFriends(id, (friends) => {
            // This triangle shape is "Callback Hell"
        });
    });
});
```

## 3. Promises (The Fix)
A Promise is an object that represents the eventual completion (or failure) of an async operation. It has three states:
1. Pending: In progress.
2. Fulfilled (Resolved): Success!
3. Rejected: Failed.

Instead of nesting, we can chain them using .then().

```js
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Success!");
    else reject("Failure.");
});

myPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

## 4. Async / Await (The Modern Way)
This is "syntactic sugar" built on top of Promises. It makes async code look like synchronous code (readable!).
- **async**: Put this in front of a function to force it to return a Promise.
- **await**: Put this in front of a Promise to pause the code until the Promise finishes.

```JavaScript
async function fetchData() {
    try {
        // The code literally PAUSES here until 'fetch' is done
        let response = await fetch("https://api.github.com/users/gemini");
        console.log("Data received!");
    } catch (error) {
        console.log("Something went wrong");
    }
}
```

## 5. setTimeout (The "Snooze Button")
This function runs a block of code once after a specified delay.
- Syntax: setTimeout(function, delayInMilliseconds)
- Behavior: It does not pause your code. It schedules the task and moves on immediately (asynchronous).
```js
console.log("1. Message sent");

// Wait 2 seconds (2000ms), then run
const timerId = setTimeout(() => {
    console.log("2. Message delivered!");
}, 2000);

console.log("3. Waiting...");
```
#### Output: 1. Message sent -> 3. Waiting... -> (2 seconds later) -> 2. Message delivered!

#### Canceling a Timeout: 
If you change your mind before the timer fires, you can stop it using the ID returned by setTimeout.
```js
clearTimeout(timerId); // The scheduled code will NEVER run
```

## 6. setInterval (The "Metronome")
This function runs a block of code repeatedly at a specific interval.
- Syntax: setInterval(function, intervalInMilliseconds)
- Warning: It will run forever unless you stop it!


```JavaScript
let count = 0;

const loopId = setInterval(() => {
    count++;
    console.log(`Count is: ${count}`);

    // Stop after 3 seconds
    if (count === 3) {
        clearInterval(loopId);
        console.log("Stopped!");
    }
}, 1000);
```
<br>

# Working with APIs
API (Application Programming Interface) sounds complex, but it's just a waiter in a restaurant.
- You (The Frontend): "I want a list of users."
- The API (The Waiter): Takes your order to the kitchen.
- The Server (The Kitchen): Prepares the data.
- The API: brings the data (JSON) back to you.

Without APIs, your website would be static and boring. With APIs, you can load live weather, stock prices, or user profiles. 

## 1. XMLHttpRequest (The Old Way)
Before 2015, this was the only way to get data. Despite the name, it works with JSON, not just XML.
- Pros: It works in ancient browsers (like Internet Explorer).
- Cons: It is messy, verbose, and relies on "Callback Hell."

Code Example (Don't memorize this, just look at how long it is):

```JavaScript
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

request.onload = function() {
    if (request.status === 200) {
        console.log("Success:", JSON.parse(request.response));
    } else {
        console.log("Error");
    }
};
```

## 2. Fetch API (The Modern Way)
This is what you will use 99% of the time. It is built directly into the browser and uses Promises (which we just learned!).
- Pros: Clean, readable, and promise-based.
- Cons: Requires a two-step process to get the JSON.

Code Example (The Standard Pattern):

```JavaScript
// Step 1: Make the request
fetch("https://jsonplaceholder.typicode.com/users")
    // Step 2: Convert the response to JSON (this returns a new Promise)
    .then(response => response.json())
    // Step 3: Handle the actual data
    .then(data => console.log(data))
    // Step 4: Handle errors
    .catch(error => console.error("Error:", error));
```

### The "Async/Await" Version (Even Cleaner)
This is how professional React developers write it today.

```JavaScript
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Something went wrong");
    }
}
```

<br>

# Classes in JavaScript
A Class is a blueprint. An Object is the house built from that blueprint.

## . The Basic Syntax
To create a class, we use the class keyword.

- constructor(): A special method that runs automatically when you create a new object (instance). It initializes the properties.
- Methods: Functions defined inside the class (no function keyword needed).

```JavaScript
class Car {
    // 1. The Setup (runs once per object)
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    // 2. The Method
    drive() {
        console.log(`${this.brand} is moving!`);
    }
}

// 3. Creating Instances
const myCar = new Car("Tesla", 2024);
const oldCar = new Car("Ford", 1990);

myCar.drive(); // "Tesla is moving!"
```

## 2. Inheritance (extends)
This is the main reason to use classes. It allows you to create a child class that inherits all features from a parent class.
- extends: Links the child to the parent.
- super(): Calls the parent's constructor. You must call this before using this in a child constructor.

```JavaScript
// Parent
class User {
    constructor(name) {
        this.name = name;
    }
    
    login() {
        console.log(`${this.name} logged in.`);
    }
}

// Child
class Admin extends User {
    deleteUser(user) {
        console.log(`Admin ${this.name} deleted ${user}`);
    }
}

const admin = new Admin("Gemini");
admin.login(); // Inherited from User!
admin.deleteUser("Spammer"); // Exclusive to Admin
```
## 3. Static Methods
A static method belongs to the Class itself, not the objects created from it. You call it directly on the Class name.

- Use Case: Utility functions (like Math.random()).

```JavaScript
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// console.log(Calculator.add(5, 5)); // 10
// const calc = new Calculator();
// calc.add(5, 5); // ERROR! 'calc' doesn't have this method.
```

## 4. Getters and Setters
These allow you to define "smart properties." You can run code (like validation) whenever someone tries to read or change a value.

```JavaScript
class Profile {
    constructor(name) {
        this._name = name;
    }

    // Getter (read)
    get name() {
        return this._name.toUpperCase();
    }

    // Setter (write)
    set name(newName) {
        if (newName.length < 3) {
            console.log("Name is too short!");
            return;
        }
        this._name = newName;
    }
}

const p = new Profile("bob");
p.name = "Al"; // Console: "Name is too short!"
console.log(p.name); // "BOB" (The getter made it uppercase)
```
<br>

# Iterators & Generators
Normally, when you run a function in JavaScript, it runs from top to bottom until it hits return or finishes. You can't stop it in the middle.

**Generators** break this rule. They are functions that can be paused and resumed.

## 1. Iterators (The Protocol)
Before we look at the function, you need to understand the rule behind it. An Iterator is just any object that lets you traverse through a collection of data one by one.

It must have a .next() method that returns an object with two properties:
- value: The current item.
- done: A boolean (true if finished, false if more data exists).

## 2. Generators (The Implementation)
Writing manual iterators is messy. Generator Functions make it easy.

Syntax
1. function*: The asterisk * tells JavaScript this is a generator.
1. yield: This is the "Pause Button". It spits out a value and pauses execution.
1. .next(): This is the "Play Button". It resumes execution until the next yield.

Code Example:

```JavaScript
// 1. Define with asterisk
function* simpleGenerator() {
    console.log("Start");
    yield 1; // Pauses here and returns 1
    
    console.log("Resumed!");
    yield 2; // Pauses here and returns 2
    
    console.log("End");
    // Implicit 'return undefined' here makes done: true
}

// 2. Create the generator object (It doesn't run yet!)
const gen = simpleGenerator();

// 3. Step through it manually
console.log(gen.next()); // Output: "Start", { value: 1, done: false }
console.log(gen.next()); // Output: "Resumed!", { value: 2, done: false }
console.log(gen.next()); // Output: "End", { value: undefined, done: true }
```
## 3. Why is this useful?
### A. Infinite Streams (ID Generators)
Since generators pause, you can create infinite loops that don't crash your browser. They only run when you ask for the next item.

```JavaScript
function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const ids = idMaker();

console.log(ids.next().value); // 0
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
// It generates them on-demand!
```
### B. Custom Iterables (for...of)
Generators work automatically with for...of loops.

```JavaScript
function* getColors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

// The loop automatically calls .next() for you until done: true
for (const color of getColors()) {
    console.log(color); 
}
// Output: Red, Green, Blue
```
## 4. yield* (Delegation)
If you have a generator inside another generator, you use yield* to "pass the mic" to the inner one.

```JavaScript
function* inner() {
    yield "B";
}

function* outer() {
    yield "A";
    yield* inner(); // Delegates to 'inner' until it finishes
    yield "C";
}

for (const letter of outer()) {
    console.log(letter); // A, B, C
}
```
<br>

# Modules in JavaScript
A Module is essentially a separate file. Instead of putting all your code in one giant script.js, you break it into smaller files (e.g., user.js, api.js, utils.js) and connect them.

## 1. ES Modules (ESM)
`This is the official, modern standard for JavaScript. It works natively in browsers (with <script type="module">) and is the standard for React, Vue, and modern Node.js.
`
### A. <u>Named Exports</u>
Used when you want to export multiple things from a file. You must import them using the exact same name inside curly braces {}.

File: `mathUtils.js`
```js
export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}
```
File: `main.js`

```JavaScript
import { pi, add } from './mathUtils.js'; // Exact names needed

console.log(add(pi, 10));
```

### B. <u>Default Exports</u>
Used when a file represents one main thing (like a React Component or a Class). You can name the import whatever you want.

File: `User.js`
```JavaScript
export default class User {
    constructor(name) {
        this.name = name;
    }
}
```
File: `main.js`

```JavaScript
import AnyNameIWant from './User.js'; // No curly braces!

const user = new AnyNameIWant("Gemini");
```
### C. <u>Renaming Imports (as)</u>
If you import two things with the same name from different files, you can rename them.

```JavaScript
import { add as addNumbers } from './math.js';
import { add as addStrings } from './strings.js';
```

## 2. CommonJS (CJS)
This is the older module system used primarily in Node.js (backend). While Node is moving toward ESM, you will still see CommonJS in millions of existing projects and tutorials.
- Key Difference: It is Synchronous (loads files one by one, halting execution until finished). ESM is Asynchronous (pre-loads imports).

### A. <u>Exporting</u>
You attach things to a special object called module.exports.

File: `config.js`

```JavaScript
const apiKey = "123-SECRET";
const dbUrl = "localhost:5000";

module.exports = {
    apiKey,
    dbUrl
};
```
### B. <u>Importing</u>
You use the require() function.

File: `server.js`

```JavaScript
const config = require('./config.js');

// OR destructuring
const { apiKey } = require('./config.js');

console.log(apiKey);
```

## 3. Dynamic Imports (Advanced)
Sometimes you don't want to load a huge module until you actually need it (e.g., loading a heavy chart library only when the user clicks "Show Stats").

This returns a **Promise**.

```JavaScript
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    // The file is only downloaded from the network NOW
    const module = await import('./heavyLibrary.js');
    module.showChart();
});
```
<br>

# Memory Management in JavaScript
The memory lifecycle is the same for every programming language:
1. **Allocation**: "I need space for this variable."
1. **Use**: "I am reading/writing to this variable."
1. **Release**: "I am done with this variable. You can have the space back."

JavaScript handles Step 1 and Step 3 for you. To understand how, we need to look at where data lives.

## 1. The Memory Model (Stack vs. Heap)
The computer's RAM is split into two distinct areas for your code.

### A. <u>The Call Stack (Order & Primitives)</u>
This is where static data lives. Static means the engine knows exactly how big the data is at compile time.
- What goes here? Primitive values (number, string, boolean, null, undefined, symbol) and references to objects.
- Characteristics: It is fast, organized, and follows Last-In, First-Out (LIFO). When a function finishes, its stack frame is popped off, and that memory is instantly freed.

### B. <u>The Memory Heap (Chaos & Objects)</u>
This is a large, unstructured region of memory for dynamic data.

- What goes here? Objects, Arrays, Functions.
- Characteristics: Since objects can grow (like adding items to an array), the engine doesn't know their size upfront. It allocates a "blob" of memory here and gives the Stack a pointer (address) to find it.
```js
const name = "Gemini"; // Stored in Stack (Primitive)
const human = {        // 'human' reference is in Stack...
    name: "Ramesh",    // ...but the actual Object data is in the Heap
    age: 21
};
```

## 2. Garbage Collection (The Janitor)
Since we don't manually free memory, JavaScript has a background process called the Garbage Collector (GC). Its job is to find objects that are no longer needed and delete them.

But how does it know what is "needed"?

The Concept: Reachability
The GC follows a simple rule: "If I can reach it, I keep it. If I can't, I sweep it."
- **Roots** : These are the starting points. Usually the Global Object (window in browsers) and the Call Stack of the currently running function.
- **References** : The GC follows references (arrows) from the roots to objects, then from those objects to other objects.
- **Unreachable** : Any object that cannot be reached from the roots is considered garbage.

## 3. Algorithms (How GC Works)
### A.<u> Reference Counting (The Old Way)</u>
This was an early, naive algorithm. It simply counted: "How many things are pointing to this object?"
- If pointers = 0, delete it.
- The Fatal Flaw: Circular References.

JavaScript
function tragedy() {
    let objectA = {};
    let objectB = {};
    
    // They point to each other!
    objectA.brother = objectB;
    objectB.sister = objectA;
    
    // Function ends. We can't reach them anymore.
    // BUT, their reference counts are both 1 (pointing to each other).
    // GC never cleans this up. Leak created.
}
### B.<u> Mark-and-Sweep (The Modern Standard) </u>
This is the algorithm used by modern browsers (V8 engine). It fixes the circular reference problem.

Mark Phase: The GC starts at the Roots (Global) and traverses the entire tree of objects. Every object it visits, it "marks" as alive.

Sweep Phase: It looks at memory. Anything that is NOT marked is considered garbage (even if it points to itself) and is deleted.

4. Common Memory Leaks
A memory leak happens when you think you are done with data, but the GC thinks you still need it.

### A. <u>Accidental Global Variables</u>
If you forget `let`, `const`, or `var`, JS creates a global variable. Globals never get collected because the Root (`window`) always points to them.

```JavaScript
function mistake() {
    leakingData = "I am huge data..."; // Attaches to window.leakingData
}
```
### B. <u>Forgotten Timers</u>
If you start a `setInterval` and forget to stop it, it (and everything it references) stays alive forever.

```JavaScript
const bigData = getData();
setInterval(() => {
    // Because this runs forever, 'bigData' is never removed from memory
    console.log(bigData); 
}, 1000);
```
- **Fix: Always use clearInterval().**

### C. <u>Closures (The Necessary Evil)</u>
We learned that closures "remember" their outer variables. If a closure lives for a long time (e.g., attached to a button click), the variables it remembers also live for a long time.

### D. <u>Detached DOM Elements</u>
If you store a reference to a DOM node in JavaScript, but then remove that node from the HTML document, it is still in memory!

```JavaScript
let button = document.getElementById('btn');
document.body.removeChild(button); 
// The button is gone from the screen.
// BUT, the 'button' variable still holds it in JS memory. GC cannot clean it.
```
- **Fix: Set button = null after removing it.**

## E. Memory LifeCycle
The Memory Lifecycle always consists of these three distinct steps:

### 1. <u>Allocation</u>
"I need space." When you declare a variable, create an object, or call a function, the operating system allocates a chunk of memory (RAM) for your program to use.
- In C/C++: You have to do this manually (e.g., malloc()).
- In JavaScript: This happens automatically when you create data.

### 2. <u>Use (Read/Write)</u>
"I am using this space." This is when your program actually does work with the memory. You read the value of a variable, change a property of an object, or pass a variable to a function.

### 3. <u>Release</u>
"I am done with this space." When the data is no longer needed, the memory must be freed so it can be used for other things.

- In C/C++: You must do this manually (e.g., free()). If you forget, your app leaks memory and eventually crashes.
- In JavaScript: This is handled automatically by the Garbage Collector. It looks for memory that is "unreachable" and frees it for you.

#### Code Example: The Lifecycle in Action
```js
// 1. ALLOCATION
// JavaScript asks the OS for memory to store the number 123
let number = 123; 

// JavaScript allocates memory for an object and its string
const user = {
    name: "Gemini"
};

// 2. USE
// We read the memory (number) and write to new memory (result)
let result = number + 1; 

// We read the object reference to access its property
console.log(user.name);

// 3. RELEASE
// We remove the reference to the object.
// The memory that held { name: "Gemini" } is now unreachable.
// The Garbage Collector will eventually find it and free that space.
user = null;
```

# Using Browser DevTools
How to open them: Press F12 or Ctrl + Shift + I (Cmd+Opt+I on Mac) on any webpage.

## 1. Debugging Issues (The "Sources" Tab)
Instead of littering your code with console.log("here"), console.log("here 2"), you should use the Debugger.

The Superpower: Breakpoints
A Breakpoint is a stop sign you put on a specific line of code. When the browser hits that line, it freezes time.
- What you can do while frozen:
- Hover over variables to see their current values.
- Step through code one line at a time (Step Over/Step Into).
- Change variable values in real-time to test fixes.

### How to do it:
1.  Go to the Sources tab.
1.  Open your JavaScript file.
1.  Click the line number (e.g., line 10) to add a blue marker.
1. Refresh or trigger the code. The browser will pause exactly there.

## 2. Debugging Memory Leaks (The "Memory" Tab)
Remember our lesson on the "Memory Heap" and "Garbage Collection"? This is where you see it.

### The Tool: Heap Snapshot
This takes a photo of all the objects currently in memory.
1. **Take Snapshot 1** : Before you do an action (e.g., opening a modal).
1. **Perform Action**: Open the modal, then close it.
1. **Take Snapshot 2** : Compare it to Snapshot 1.
1. **The Clue**: If the memory went UP and stayed UP even after you closed the modal, you have a Leak (Detached DOM nodes or lingering event listeners).

## 3. Debugging Performance (The "Performance" Tab)
If your site feels "laggy" or the animation is "choppy," this tool tells you why.

### The Tool: Flame Chart (The Recorder)
1. Click the "Record" button (circle icon).

1. Use your website for 5 seconds (scroll, click, etc.).

1. Stop recording.

1. The Result: You get a massive chart showing exactly how many milliseconds the CPU spent on every single function.

    - Yellow blocks: JavaScript taking too long.

    - Purple blocks: CSS/Rendering taking too long.

**Key Metric**: You want to stay under 16ms per frame to achieve a smooth 60 FPS (Frames Per Second).
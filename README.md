# Day-1

```js
// We use const for things that don't change
const myGoal = "Become a JS Developer";

// We use let for things that might change
let currentLesson = 1;

// Print them to see the output
console.log(myGoal, currentLesson);
```


# DATATYPES 
```js

//String: Text data
let name = "Gemini"; // Double quotes
let city = 'Delhi';  // Single quotes

//Number: Both integers and decimals (floats)
let age = 21;
let price = 99.99;

//Boolean: Logical entities. Only two values: true or false
let isStudent = true;
let isTired = false;

//Undefined: A variable that has been declared but not assigned a value yet
let score; // value is currently 'undefined'

//Null: Represents "intentional absence" of any object value. You set this manually to say "this is empty
let emptyBox = null;

//TypeOf Operator
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42);      // Output: "number"
console.log(typeof true);    // Output: "boolean"
```


Even though null is a Primitive type (as listed in your roadmap under "Primitive Types"), typeof null returns 'object'. This is a historical error in the language that can't be fixed now without breaking old websites. Just remember: logically, it is not an object.


# Day-2

#Objects (The Non-Primitive)
Unlike primitives (which hold just one value, like 5 or "Hello"), an Object is a collection of related data. Think of it like a physical backpack: the backpack is one "thing" (the Object), but inside it holds many items (properties) like a laptop, a book, and a water bottle.


```js
//Creating an Object
const student = {
    firstName: "Gemini",  // Key: firstName, Value: "Gemini"
    age: 20,              // Key: age, Value: 20
    isEnrolled: true      // Key: isEnrolled, Value: true
};

```
Accessing Data
There are two ways to get data out of the backpack:
. Dot Notation (Most common): student.firstName
. Bracket Notation (Dynamic): student["firstName"]


# Type Conversion vs. Coercion
The difference is simple but important:
Type Conversion (Explicit): You manually tell JavaScript to change the type (e.g., "Turn this string into a number").
Coercion (Implicit): JavaScript does it automatically behind your back because you did something weird (e.g., trying to subtract text from a number).

Implicit Type Casting (Coercion)
This happens when you mix types in an operation. It is often the source of bugs.
String Concatenation (+): If you add anything to a string, JS turns the other thing into a string.

```js
let result = "3" + 2;
// Result: "32" (String)

let result = "10" - 2;
// Result: 8 (Number)

```
The "Boolean" Trap: if statements automatically coerce values to true or false.
Falsy values: 0, "" (empty string), null, undefined, NaN, false.
Truthy values: Everything else (including "0" and []).

```js
//Explicit Type Casting

let count = Number("42");  // 42
let invalid = Number("xyz"); // NaN (Not a Number)

let text = String(123); // "123"

Boolean(0);       // false
Boolean("hello"); // true

```

# Equality Comparisons

1. Loose Equality (==)
This is the "forgiving" operator. It allows coercion. It tries to convert types to match before comparing.
5 == "5" → true (Because it converts the string "5" to number 5 first).
0 == false → true (Because 0 is falsy).
Warning: This causes many bugs. Most developers avoid it.

2. Strict Equality (===)
This is the "strict" operator. It does NOT allow coercion. It checks two things:
Are the Types the same?
Are the Values the same?
5 === "5" → false (Type Number vs Type String).
5 === 5 → true.

3. Object.is
This is a newer method mentioned in your roadmap. It acts almost exactly like === but handles two weird edge cases better:
NaN === NaN is actually false (weird, right?).
Object.is(NaN, NaN) is true (correct).


# Data Structures
1. Indexed Collections
Indexed collections are data structures where data is ordered by an integer index (0, 1, 2...)

A. Arrays
Standard JavaScript arrays are dynamic, meaning they can hold items of any type and change size automatically.

Key Features:
Zero-indexed (first item is at 0).
Can contain mixed types (numbers, strings, objects).
Iterable (can be used in loops).

```js
// 1. Creation
let stack = ["HTML", "CSS", "JS"];

// 2. Accessing elements
console.log(stack[0]); // "HTML"

// 3. Modifying
stack.push("React"); // Adds to end
stack.pop();         // Removes from end
stack.unshift("Git"); // Adds to start
stack.shift();        // Removes from start

// 4. Searching
console.log(stack.indexOf("CSS")); // 1
console.log(stack.includes("Python")); // false

```

B. Typed Arrays
Unlike standard arrays, these are array-like buffers specifically designed to handle raw binary data. They are rarely used in general web dev but are critical for WebGL, Canvas, or processing audio/video.

Key Features:
Fixed length (cannot resize like normal arrays).
All items must be the same type (e.g., only 8-bit integers).
Much faster for heavy mathematical computations.

```js
// Creates a buffer for 8 integers (8-bit signed)
let buffer = new Int8Array(8);

buffer[0] = 10;
buffer[1] = 255; // Overflow! Int8 only fits -128 to 127.
console.log(buffer); // Int8Array(8) [10, -1, 0, 0, ...]

```

2. Structured Data
JSON (JavaScript Object Notation)
JSON is a text-based format for representing structured data. It is the standard for API communication.

Key Rules:
Keys must be wrapped in double quotes "".
No functions or undefined values allowed inside.
Double quotes for strings (no single quotes).

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

3. Keyed Collections
These are collections that use "keys" to organize data, similar to Objects but with specialized behaviors.

A. Map
A Map is a collection of keyed data items, similar to an Object. However, the main difference is that Map keys can be of any type (objects, functions, primitives), whereas Object keys are always Strings or Symbols.
Methods: .set(), .get(), .has(), .delete(), .size

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

B. Set
A Set is a collection of values where each value may only occur once. If you try to add a duplicate, it is ignored.
Use Case: Removing duplicates from an array.
Methods: .add(), .has(), .delete(), .size.

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








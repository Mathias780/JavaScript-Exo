// ----------------------------------------------
// BASIC ARRAY CREATION
// ----------------------------------------------

// An array is just a list of values
let fruits = ["apple", "banana", "orange"];

// You can store anything inside: strings, numbers, even arrays
let randomStuff = [42, "hello", true, [1, 2, 3]];


// ----------------------------------------------
// ACCESSING ITEMS
// ----------------------------------------------

// Arrays start at index 0
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"

// If you try to access something that doesn't exist:
console.log(fruits[10]); // undefined


// ----------------------------------------------
// MODIFYING ITEMS
// ----------------------------------------------

fruits[1] = "kiwi";  // change "banana" → "kiwi"
console.log(fruits); // ["apple", "kiwi", "orange"]


// ----------------------------------------------
// ADDING ITEMS
// ----------------------------------------------

// Add at the END
fruits.push("mango");
console.log(fruits); // ["apple", "kiwi", "orange", "mango"]

// Add at the START
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "kiwi", "orange", "mango"]


// ----------------------------------------------
// REMOVING ITEMS
// ----------------------------------------------

// Remove LAST item
let removed = fruits.pop();
console.log(removed);  // "mango"
console.log(fruits);   // ["strawberry", "apple", "kiwi", "orange"]

// Remove FIRST item
fruits.shift();
console.log(fruits); // ["apple", "kiwi", "orange"]


// ----------------------------------------------
// FINDING LENGTH OF AN ARRAY
// ----------------------------------------------

console.log(fruits.length); // 3


// ----------------------------------------------
// LOOPING THROUGH AN ARRAY (for loop)
// ----------------------------------------------

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// ----------------------------------------------
// LOOPING THROUGH AN ARRAY (for...of) - easier
// ----------------------------------------------

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


// ----------------------------------------------
// CHECK IF VALUE EXISTS IN ARRAY
// ----------------------------------------------

console.log(fruits.includes("apple")); // true
console.log(fruits.includes("banana")); // false


// ----------------------------------------------
// ADD + REMOVE AT ANY POSITION (splice)
// ----------------------------------------------

// splice(startIndex, howManyToRemove, itemToAdd1, itemToAdd2, ...)
fruits.splice(1, 1, "pear"); 
// Removes the item at index 1, adds "pear"

console.log(fruits); // ["apple", "pear", "orange"]


// ----------------------------------------------
// JOINING ARRAY INTO A STRING
// ----------------------------------------------

let joined = fruits.join(", ");
console.log(joined); // "apple, pear, orange"


// ----------------------------------------------
// SPLITTING STRING INTO ARRAY (reverse of join)
// ----------------------------------------------

let text = "dog,cat,fish";
let animals = text.split(",");
console.log(animals); // ["dog", "cat", "fish"]

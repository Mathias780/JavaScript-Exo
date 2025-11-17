// ----------------------------
//   BASIC OBJECT SYNTAX
// ----------------------------

// An object is just a container that groups data together.
// It's like a folder with labels (called *keys*) and the values inside.

let person = {
    name: "Tommy",
    age: 22,
    city: "Paris"
}

console.log(person) // display the whole object



// ----------------------------
//   ACCESSING VALUES
// ----------------------------

// 1) Dot notation (the most used)
console.log(person.name)  // "Tommy"
console.log(person.age)   // 22

// 2) Bracket notation (useful when the key is dynamic or has spaces)
console.log(person["city"]) // "Paris"



// ----------------------------
//   MODIFYING VALUES
// ----------------------------

// Change existing data
person.age = 23

// Add a new property
person.hobbies = ["gaming", "coding"]

console.log(person)



// ----------------------------
//   DELETING A PROPERTY
// ----------------------------

delete person.city

console.log(person)



// ----------------------------
//   METHODS (functions inside objects)
// ----------------------------

let dog = {
    name: "Rex",
    age: 5,

    // A function inside an object = a method
    bark: function() {
        console.log("WOOF!")
    }
}

dog.bark() // call the method



// ----------------------------
//   NESTED OBJECTS
// ----------------------------

let user = {
    username: "Matty",
    preferences: {
        theme: "dark",
        language: "fr"
    }
}

console.log(user.preferences.theme) // "dark"



// ----------------------------
//   ARRAY OF OBJECTS
// ----------------------------

// You will see this a LOT in real dev
let students = [
    { name: "Lisa", score: 14 },
    { name: "Mark", score: 9 },
    { name: "Sophie", score: 18 }
]

// Example: print each student name
for (let s of students) {
    console.log(s.name)
}



// ----------------------------
//   OBJECTS + FUNCTIONS
//   (passing an object into a function)
// ----------------------------

function greetUser(u) {
    console.log("Hello " + u.username)
}

greetUser(user)



// ----------------------------
//   CHECKING IF A KEY EXISTS
// ----------------------------

console.log("age" in person)   // true
console.log("job" in person)   // false



// ----------------------------
//   GET ALL KEYS / VALUES
// ----------------------------

console.log(Object.keys(person))   // ["name", "age", "hobbies"]
console.log(Object.values(person)) // ["Tommy", 23, [...]]
console.log(Object.entries(person)) // array of everything

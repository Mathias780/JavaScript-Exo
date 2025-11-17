//---------------------------------- Exercice final — Mini système ---------------------------------------------//
// --------------------------
// Object of array of beginning
// --------------------------
let students = [
  { name: "Alice", age: 20 },
  { name: "Mark", age: 22 },
  { name: "Jade", age: 19 }
]

// --------------------------
// 1. Add a student
// --------------------------
function addStudent(arr, student) {
  arr.push(student)
}

// --------------------------
// 2. Delete a student by name
// --------------------------
function removeStudent(arr, name) {
  // We filter the array and keep only the students who are NOT this name
  return arr.filter(student => student.name !== name)
}

// --------------------------
// 3. calculate average Age
// --------------------------
function getAverageAge(arr) {
  let total = 0

  for (let student of arr) {
    total += student.age
  }

  return total / arr.length
}

// --------------------------
// TESTS
// --------------------------

// Add
addStudent(students, { name: "Lucas", age: 24 })
console.log("Après ajout :", students)

// Delete
students = removeStudent(students, "Mark")
console.log("Après suppression :", students)

// Average Age
console.log("Âge moyen :", getAverageAge(students))

//---------------------------------- Compter un type dans un tableau ---------------------------------------------//

// Object array of books
let books = [
  { title: "Dune", category: "SF" },
  { title: "Neuromancien", category: "SF" },
  { title: "Harry Potter", category: "Fantasy" },
  { title: "Le Hobbit", category: "Fantasy" },
  { title: "Fondation", category: "SF" }
]

// function that counts how many books are in one catagory
function countCategory(arr, category) {
  let count = 0

  for (let book of arr) {
    if (book.category === category) {
      count++
    }
  }

  return count
}

console.log(countCategory(books, "SF"))      // 3
console.log(countCategory(books, "Fantasy")) // 2

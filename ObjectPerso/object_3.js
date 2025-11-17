//---------------------------------------Ajouter une méthode----------------------------------------//
let student = {
    name: "Maria",
    age: 21,
    city: "Versaile",
    grade: 12,
    
    introduce() {
        //console.log(`My name is ${this.name} i am ${this.age} yeas old i live in ${this.city} my major grade is ${this.grade}/20.`)
        return `My name is ${this.name} i am ${this.age} yeas old i live in ${this.city} my major grade is ${this.grade}/20.`
    }
}

//student.introduce() //no need to use console.log here just retrun the methode outside of the object and paf.



//-------------------- CLEANER APPROACH---------------------//

console.log(student.introduce())
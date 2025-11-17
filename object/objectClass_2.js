/*
const person1 = {
    firstName: "jamie",
    age: 170
}

const person2 = {
    firstName: "ja",
    age: 23
}
const person3 = {
    firstName: "Amie",
    age: 42
}

//factory function

function createPerson(firstName, age) {

    return {
        firstName: firstName,
        age: age,
        greet() {
            console.log(`Hey ${this.firstName}`)
        }
    }
}


const person1 = createPerson("Jamie", 170)
const person2 = createPerson("Ja", 23)
const person3 = createPerson("Amie", 42)

person1.greet()
person2.greet()
person3.greet()
*/

//constructeur

function Person(fristName, age) {
    this.fristName = fristName
    this.age = age
    this.greet = function() {
        console.log(`Hello ${this.fristName}`)
    }
}

const person1 = new Person("Aby", 23)
const person2 = new Person("Zola",30)
const person3 = new Person("Tera", 45)

person1.greet()
person2.greet()
person3.greet()

/*
const person = {
    fristName: "John",
    age: 45
    languages: {
        french: "native",
        english: "inter"
    }
}
*/

//const { age, fristName: fullName, languages: { french: favoriteLanguage} } = person
//console.log(favoriteLanguage)

//console.log(age)
//console.log(fristName)
//console.log(fullName)


//const copy = person
//const copy = { ...person}
//const copy = Object.assign(person)

person.age = 20

console.log(copy)
console.log(copy)

//Afficher uniquement les clés
console.log(Object.keys(person))

//afficher uniquement les valeurs
console.log(Object.values(person))

//afficher les entrées
console.log(Object.entries(person))

//vérifier si l'objet a une propriété/clé
console.log(person.hasOwnProperty("age"))



for(let key in person) {
    console.log(key + ":" + person[key] )
}
// Conditions

//const age = 16


/*
if(age >= 18) {
  console.log("il est majeur")

} else if(age <=3) {
    console.log("bébé")
}else {
    console.log("Adolescent")
}

*/

//Condition imbriquées

/*
if(age >= 18) {
    console.log("Personne majeur")
}else {
    if(age <= 3) {
        console.log("Bébé")
    }else {
        console.log("Ado")
    }
}
*/

//const isAdult = false

// Valeurs falsy : null, 0, false, undefined, Nan, empty string

/*
if(!isAdult) {
    console.log("La valeur est fausse")
}
*/


const age = 25
const firstName = "Léo"

// la condition est vrai si les 2 condtitions sont vrai

/*
if(age > 18 && firstName === "Léo") {
    console.log("La condition est vrai")
}

if(age > 18 || firstName === "Léo") {
    console.log("une condition est vrai")
}

/*
if(number1 === number2) {
    console.log("Les valeurs sont égales")
}
*/

/*
if(number1 !== number2) {
    console.log("Les valeurs ne sont pas égales")
}
*/

const dice = 1 

switch(dice) {
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    case 3:
        console.log(3)
        break
    default:
        console.log("Valeur par défaut")
}


const isAdult = true
/*
if(isAdult) {
    console.log("Personne adulte")
}else {
    console.log("Persone Mineur")
}
*/
// ternaire 
const verifyAge = isAdult ? "Personne adulte" : "Enfant"

console.log(verifyAge)

//loop While

let count = 0

/*
while(count < 3) {
    console.log(verifyAge)
    console.log(count)
    count++
}
*/

// loop do while

//let amount = 11
/*
do {
    console.log(amount)
    amount++
} while(amount <= 10)
*/
// the loop for

for(let i = 0; i < 10; i++) {
    console.log(i)
}
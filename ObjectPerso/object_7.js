//---------------------------------- Destructuring Objects ---------------------------------------------//

let student = {
    firstName: "Bobby",
    age: 160,
    planet: "Mars"
}

let {firstName, planet} = student // we take the key name and planet form the object student

console.log(firstName)//object student -> key firstName -> value "Bobby" //console: Bobby
console.log(planet)//object student -> key planet -> value "Mars" //Console: Mars
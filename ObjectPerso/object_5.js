//---------------------------------------Mise à jour dynamique----------------------------------------//

let student = {
    name: "Blanche",
    age: 23,
    city: "Dax"

}

function uptadeStudent(obj, key, value) {
    obj[key] = value
}

console.log(student)//display : { name: 'Blanche', age: 23, city: 'Dax' }

uptadeStudent(student,"name","Mark")
uptadeStudent(student,"age",26)
uptadeStudent(student,"city","Lyon")

console.log(student) // display : { name: 'Mark', age: 26, city: 'Lyon' }
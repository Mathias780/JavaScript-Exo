//---------------------------------------Tableau d’objets----------------------------------------//
let students = [
    {name: "Ophelie",age: 20,city:"Bordeaux",admited: true},
    {name:"Mark",age: 19,city:"Libourne",admited:true},
    {name:"Jay",age:21,city:"Paris",admited:false}
]

let names = []

//let names = students.map(student => student.name);

for(let student of students) {
    console.log(student.name) // return each name one by one
    names.push(student.name)// return each name in an empty variable array so it can be used later 
}

console.log(names)
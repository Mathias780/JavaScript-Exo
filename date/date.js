//date actuel
const currentDate = new Date()
console.log(currentDate)


//date spécifique
const date = new Date("2025-10-15")

console.log(date)

//Afficher le mois
console.log(currentDate.getMonth())

//afficher l'année
console.log(currentDate.getFullYear())

//Afficher le jour
console.log(currentDate.getDate())

//Afficher le jour de la semaine
console.log(currentDate.getDay())

//Afficher l'heure
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())

//Formater la date
console.log(currentDate,toLocaleDateString("fr-FR", {
    year:"numeric",
    month:"long",
    day:"numeric"
}))

console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleTimeString())
console.log(currentDate.toLocaleString())

console.log(currentDate.getTime())
let age = parseInt(Prompt("Entrez votre age :"))
if(age < 1 || age > 20) {
    console.log("l'age doit etre entre 1 et 20")

}else if (age % 2 === 0) {
    console.log("Votre age est pair!")
}else {
    console.log("Votre age est impair")
}
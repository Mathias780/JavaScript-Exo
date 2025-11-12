let time = parseInt(Prompt("Entrez l'heure actuel :"));

const morning = [6 , 7, 8, 9, 10, 11, 12]
const afternoon = [13, 14 , 15, 16, 17, 18, 19, 20]
const night = [21, 22, 23, 0, 1, 2, 3, 4, 5]

if(time === morning ) {
    console.log("it is morning")
}else if (time === afternoon ) {
    console.log("it is afternoon")
}else if (time === night) {
    console.log("it is night time")
}else {
    console.log("Put the correct Hour time!")
}


//--------------------------------------- Fusionner deux objets (spread) ----------------------------------------//

let infosPerso = {
    realtionship: "couple",
    hobbies: ["reading","Cinema","Dancing","Drawing"],
    balanceBank: "234 $"
}

let infosPro = {
    name: "Lisa",
    city: "Barcolona",
    linkdin: "@LisaRoria"
}


let infosPerson = { //(...)spread operator
    ...infosPerso,
    ...infosPro
}

console.log(infosPerson)
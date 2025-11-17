function calculateAge(birthday) { //Birthday is a date
    let ageDifMs = Date.now() - birthday.getTime()
    let ageDate = new Date(ageDifMs)//miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970) // return the calculation from birth year to the acutal year that we are in and show the
}


let personBirthdate = new Date("2000-01-15")

console.log(calculateAge(personBirthdate))
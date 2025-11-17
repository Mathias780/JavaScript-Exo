function isDateValid(datestring) {
    return !isNaN(new Date(datestring)) // !isNan check if it's a number if it is true if not false. in this case check if the date follows the good format.
}

// DD/MM/YYYY
console.log(isDateValid("15/05/2019")) //false

// MM/DD/YYYY
console.log(isDateValid("09/15/2018")) //true

//YYYY/MM/DD
console.log(isDateValid("2019/05/15")) //true
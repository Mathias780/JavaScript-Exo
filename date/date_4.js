function daysUntil(targetDate) {

    let msPerDay = 1000 * 60 * 60 * 24 // calculate the structure of a day in milliseconds and store it in a variable
    let diffMs = targetDate.getTime() - Date.now(); // it gives me the time difference between a date (targetDate) and other 

    return Math.ceil(diffMs / msPerDay); // Round up to include partial days
}

let noelDate = new Date(2025, 11, 25 )

console.log(daysUntil(noelDate) + " Days until christmas")
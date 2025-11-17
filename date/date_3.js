function addOneWeek(date) {
    date.setDate(date.getDate() + 7)
    return date
}

let myDate = new Date(2025, 11, 17)

console.log(addOneWeek(myDate).toDateString())

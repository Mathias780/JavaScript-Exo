function addOneWeek(date) {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 7)
    return newDate
}

let myDate = new Date(2025, 11, 17)

console.log(addOneWeek(myDate).toDateString())

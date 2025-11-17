function formatCustomDate(date) {
    // format the date as: "Monday, October 12, 2024"
    
    // Validate input

    const options = {
        weekday: "long", // Full day name (Monday)
        year: "numeric", // Full year (2024)
        month: "long", // Full month name (October)
        day: "numeric" // Day of month (12)
    }

    return new Intl.DateTimeFormat("en-Us", options).format(date)
}

let myDate = new Date(2025, 10, 17)
console.log(formatCustomDate(myDate)) // Monday, November 17, 2025

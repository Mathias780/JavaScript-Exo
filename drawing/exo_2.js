let userInput = 10 // simulates the user input in this case they will be 10 row of cubes
let row = 1 // set one line of cubes and be our starter for the function just like exo 1 the it will reach the user input later in the function


while (row <= userInput) { // the row variable will always reach the value of the user input
    let lineText = ""
    let col = 1
    while(col <= 10) { // while this function is running col will always try to reach the value 10 and be equal to it
        if((row + col) % 2 === 0)  { //additioned row and col value together, if the rest after dividing is even make it black if not make it white
            lineText += "⬛" //if even black
        }else {
            lineText += "⬜"// if odd white
        }
        col++//add one until you reach 10
    }

    console.log(lineText) // display the box has commanded earlier in the file 

    row++ // stop the loop from running indefinitly
}
// I set the core values needed for the function
let userInput = 10 // simulates a userInput 
let row = 1 // the variable that will indicates how much cube will be on each horizontal line (x-axis)


// “while I exist (the function), I will loop row until it's less or equal to the userInput
while(row <= userInput) {
    let lineText = "" // an empty string sett the variable has null waiting for a value to fill it later in the function
    let col = 1 //create a variable that will be our columns and what will the user actually affect (y-axis)
    //now i create the inner loop that will process evrything and throw it back to the outer loop that will take the user input
    while(col <= row) {
        lineText += "⬛" // so here im additioning the past value of lineText and adding an emoji into it this what will be displayed into the consol im also using the shortcut += that means lineText = lineText value + the new value so instead of lineText = LineText + "⬛" i have the clean shortcut version
        col++ // add one each time the loops keep going to the col variable 
    }

    console.log(lineText) //contains the cube and all the others variable we set in functions are the mechanism that will make this simple string "cube" variable do all of that 
    row++ // important to make sure the loop dosent go a wire and keeps looping forever alaways show it after the print because the console.log need to know what was the orignal value of row
}
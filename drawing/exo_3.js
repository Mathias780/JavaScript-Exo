let userInput = 10 
let row = 1 


while(row <= userInput) {
    let lineText = ""
    let col = 1
    
    while(col <= userInput) { //like alawys the inner loop do a specific task and give it to the outer loop that compiles it

        if(row === 1) { //the syntax here is if row is stritcly equal to 1 then make it black
            lineText += "⬛"
        }else if(row === userInput) {
            lineText += "⬛" // if it's the last row, also draw in black
        }else if(col === 1 ) {
            lineText += "⬛" //it's looks if col is still at one if it is then applies what we tell him to do
        }else if(col === userInput) {
            lineText += "⬛" // same principales here but using the userinput so we get a black left border
        }else {
            lineText += "⬜" // fill all the other space with white cubes !
        }

        col++ // add one each time to col to reach the exact the number we want 
    }
    

    console.log(lineText)
    row++
}
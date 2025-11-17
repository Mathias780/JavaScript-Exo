//---------------------------------------------------------  Create and Append Elements ------------------------------------------------------//


const newBox = document.createElement("div")

newBox.textContent = "Hey im a new div"

newBox.classList.add("Box")


document.body.appendChild(newBox) //add it to the page
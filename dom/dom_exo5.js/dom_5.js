//---------------------------------------------------------  Remove an Element  ------------------------------------------------------//

const button = document.querySelector("button")
const background = document.getElementById("changeMe")

button.addEventListener("click", () => {
    background.remove()
})
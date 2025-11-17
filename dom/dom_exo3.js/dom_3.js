//---------------------------------------------------------  Add & Remove a Class  ------------------------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button")
    const background = document.getElementById("changeMe")

    button.addEventListener("click", () => {
        background.style.backgroundColor = "red"
    })
})

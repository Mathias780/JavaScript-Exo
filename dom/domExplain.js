/* ================================
   DOM MANIPULATION — QUICK BASICS
   ================================
   This file teaches you DOM manipulation
   directly inside the code. Read + run.
=================================== */

/* ----------------------------
   1. SELECTING ELEMENTS
---------------------------- */

// Select one element
const title = document.querySelector("h1");

// Select multiple elements (gives a NodeList)
const items = document.querySelectorAll(".item");

// Old-school methods (still used sometimes)
const byId = document.getElementById("main");
const byClass = document.getElementsByClassName("box");


/* ----------------------------
   2. MODIFYING TEXT + HTML
---------------------------- */

title.textContent = "DOM Manipulation in JS 🔥"; // changes text
// title.innerHTML = "<span>DOM Manipulation in JS 🔥</span>"; // injects HTML


/* ----------------------------
   3. MODIFYING STYLES
---------------------------- */

title.style.color = "hotpink";
title.style.fontSize = "2rem";


/* ----------------------------
   4. ADDING / REMOVING CLASSES
---------------------------- */

title.classList.add("highlight");
title.classList.remove("old-title");
title.classList.toggle("active"); // adds if absent, removes if present


/* ----------------------------
   5. CREATING ELEMENTS
---------------------------- */

const newBox = document.createElement("div");
newBox.textContent = "I'm a new div!";
newBox.classList.add("box");


/* ----------------------------
   6. INSERTING ELEMENTS
---------------------------- */

const container = document.querySelector(".container");

container.append(newBox);      // at the end
// container.prepend(newBox);  // at the start
// container.before(newBox);   // outside, before container
// container.after(newBox);    // outside, after container


/* ----------------------------
   7. REMOVING ELEMENTS
---------------------------- */

// newBox.remove(); // uncomment to destroy it


/* ----------------------------
   8. EVENTS (click, input, etc.)
---------------------------- */

title.addEventListener("click", () => {
    alert("You clicked the title. Proud of you.");
});

document.querySelector("#btn").addEventListener("click", () => {
    console.log("Button pressed like it owes you money.");
});


/* ----------------------------
   9. MODIFYING ATTRIBUTES
---------------------------- */

const img = document.querySelector("img");

img.setAttribute("src", "https://placekitten.com/300");
img.setAttribute("alt", "A majestic kitten");
img.removeAttribute("title");


/* ----------------------------
   10. INPUT VALUES
---------------------------- */

const input = document.querySelector("#username");

input.addEventListener("input", () => {
    console.log("User typed:", input.value);
});


/* ----------------------------
   DONE.
   You now understand 90% of DOM manipulation.
   The last 10% is just variations of these tools.
---------------------------- */
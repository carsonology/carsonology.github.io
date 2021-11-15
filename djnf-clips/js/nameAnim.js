'use strict';
console.log('Javascript working');

// SET UP CSS ANIMATION FOR NAME HEADER

// get full name (desktop) and first + last names (mobile) from DOM
const name = document.querySelectorAll("#name path");
const hithere = document.querySelectorAll("#hi-there path");

// set animation delay variable to 0 to start iteration
let animDelay = 0.5;

for (let letter of hithere) {
    let perimeter = letter.getTotalLength(); // get perimeter length of each svg letter
    letter.style.strokeDasharray = `${perimeter}px`; // set stroke dasharray to the perimeter
    letter.style.strokeDashoffset = `${perimeter}px`; // set stroke offset to the perimeter
    letter.style.animation = `line-anim 2s ease forwards ${animDelay}s`; // iterate animation delay for each letter
    animDelay += 0.1;
}
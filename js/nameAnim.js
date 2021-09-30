'use strict';
console.log('Javascript working');

// SET UP CSS ANIMATION FOR NAME HEADER

// get full name (desktop) and first + last names (mobile) from DOM
const name = document.querySelectorAll("#name path");
const firstName = document.querySelectorAll("#first-name path");
const lastName = document.querySelectorAll("#last-name path");

// set animation delay variable to 0 to start iteration
let animDelay = 0;

for (let letter of name) {
    let perimeter = letter.getTotalLength(); // get perimeter length of each svg letter
    letter.style.strokeDasharray = `${perimeter}px`; // set stroke dasharray to the perimeter
    letter.style.strokeDashoffset = `${perimeter}px`; // set stroke offset to the perimeter
    letter.style.animation = `line-anim 2s ease forwards ${animDelay}s`; // iterate animation delay for each letter
    animDelay += 0.1;
}

// reset animDelay to zero for mobile version
animDelay = 0;
// repeat above loop for first name for mobile purposes
for (let letter of firstName) {
    let perimeter = letter.getTotalLength();
    letter.style.strokeDasharray = `${perimeter}px`;
    letter.style.strokeDashoffset = `${perimeter}px`;
    letter.style.animation = `line-anim 2s ease forwards ${animDelay}s`;
    animDelay += 0.1;
}
// repeat again for last name
for (let letter of lastName) {
    let perimeter = letter.getTotalLength();
    letter.style.strokeDasharray = `${perimeter}px`;
    letter.style.strokeDashoffset = `${perimeter}px`;
    letter.style.animation = `line-anim 2s ease forwards ${animDelay}s`;
    animDelay += 0.1;
}
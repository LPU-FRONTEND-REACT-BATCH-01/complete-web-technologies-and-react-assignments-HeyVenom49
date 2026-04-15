"use strict";
// const num = 4;

// if (num < 0) console.log("less than 0");
// else if (num === 0) console.log("equal to 0");
// else console.log("greater than 0");

// let num = Number(prompt("enter a number:"));

let num = 4;

if (num <= 8) {
  for (let i = 0; i < num; i++) console.log(`It is ${num}`);
} else {
  for (let i = 0; i < num * num; i++) console.log(`It is ${num}`);
}

console.log([] == ![]);

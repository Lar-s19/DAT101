"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let part1Text = "";
for(let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array[i]; // -> Every index of part1Array
    if (i === part1Array.length - 1) { // -> if i is 19 (the last index) 
        part1Text += value.toString() + "." // -> "20."
    } else { // -> for every other index than the last
        part1Text += value.toString() + ", "; // -> "1, 2, 3, ..., 20, "
    }   
}
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part2Text = part1Array.join("- ");
printOut(part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Greeting = "Hello there, how are you?";
const textArray = part3Greeting.split(" "); // Split the string into an array of words
let part3Text = ""; // Initialize empty string to hold the result
for(let i = 0; i < textArray.length; i++) { // Loop through each index of textArray
    const word = textArray[i]; 
    // Here you can remove any unwanted characters like commas or question marks
    part3Text += "Index: " + i.toString() + " = " + word + newLine; // Adding a new line after each word
}
printOut(part3Text);

printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlsName = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
    let deleteIndex = -1;
    for (let i = 0; i < aArray.length ; i++) {
        const name = aArray[i];
        if (name === aName) {
        // here we can delete the name
        // We cannot delete it right here because it will mess up the loop, we will delete later
        // we save the index as a variable
            deleteIndex = i;
            break; // exit the loop since we found the name
        }
    }
    // Test if we found the name to delete
    if (deleteIndex >= 0) {
        printOut(aName + " is found, and deleted.")
        aArray.splice(deleteIndex, 1); // delete 1 element at the found index
    }else {
        printOut(aName + " is not found!");
    }   
}

removeNameFromArray(girlsName, "Marit");
printOut(girlsName);

printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textLine1 = "";
let textLine2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
    textLine1 += i + " ";
    textLine2 += j + " ";
}
printOut(textLine1 + newLine);
printOut(textLine2 + newLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberToGuess = 25; //input number to guess
let guessedNumber = 0; //initial guessed number

while (guessedNumber !== numberToGuess) {
    guessedNumber = Math.ceil(Math.random()*60); 
}
printOut("The number is " + guessedNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberToFind = 789123; // number to guess (between 1 and 1,000,000)
let initialGuess = 0; // initial guess
let totalGuesses = 0; // count the number of guesses

const startTime = Date.now(); // start time
while (initialGuess !== numberToFind) { // keep guessing until the number is found
    initialGuess = Math.ceil(Math.random() * 1000000); // guess a number between 1 and 1,000,000
    totalGuesses++; // count the guesses
}
const endTime = Date.now(); // end time
const elapsedTime = endTime - startTime; // calculate elapsed time in milliseconds

printOut("Guessed number: " + initialGuess); // print guessed number
printOut("Number of guesses: " + totalGuesses); // print number of guesses
printOut("Elapsed time (ms): " + elapsedTime); // print elapsed time
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const primes = [];
for (let number = 2; number <= 200; number++) {
    let isPrime = true;
    let x = 2
    const limit = Math.floor(Math.sqrt(number));
    while (x <= limit) {
        if (number % x === 0) {
            isPrime = false;
            break;
        }
        x++;
    }
    if (isPrime) primes.push(number);
}
printOut(primes.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
  const array = [];
  for (let columns = 1; columns <= 9; columns++) {
    array.push("K" + columns + "R" + row);         
  }
  printOut(array.join(" "));
}

printOut(newLine);  

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const students = 5;
let grade1 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade2 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade3 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade4 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade5 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let textPart6 = "";
if (grade1 >= 89) {
  textPart6 += "Student 1: " + grade1 + "% - A";
} else if (grade1 >= 77) {
  textPart6 += "Student 1: " + grade1 + "% - B";
} else if (grade1 >= 65) {
  textPart6 += "Student 1: " + grade1 + "% - C";
} else if (grade1 >= 53) {
  textPart6 += "Student 1: " + grade1 + "% - D";
} else if (grade1 >= 41) {
  textPart6 += "Student 1: " + grade1 + "% - E";
} else {
  textPart6 += "Student 1: " + grade1 + "% - F";
}
printOut(textPart6);
textPart6 = "Student 2: ";
if (grade2 >= 89) {
  textPart6 += grade2 + "% - A";
} else if (grade2 >= 77) {
  textPart6 += grade2 + "% - B";
} else if (grade2 >= 65) {
  textPart6 += grade2 + "% - C";
} else if (grade2 >= 53) {
  textPart6 += grade2 + "% - D";
} else if (grade2 >= 41) {
  textPart6 += grade2 + "% - E";
} else {
  textPart6 += grade2 + "% - F";
}
printOut(textPart6);
textPart6 = "Student 3: ";
if (grade3 >= 89) {
  textPart6 += grade3 + "% - A";
} else if (grade3 >= 77) {
  textPart6 += grade3 + "% - B";
} else if (grade3 >= 65) {
  textPart6 += grade3 + "% - C";
} else if (grade3 >= 53) {
  textPart6 += grade3 + "% - D";
} else if (grade3 >= 41) {
  textPart6 += grade3 + "% - E";
} else {
  textPart6 += grade3 + "% - F";
}
printOut(textPart6);

textPart6 = "Student 4: ";
if (grade4 >= 89) {
  textPart6 += grade4 + "% - A";
} else if (grade4 >= 77) {
  textPart6 += grade4 + "% - B";
} else if (grade4 >= 65) {
  textPart6 += grade4 + "% - C";
} else if (grade4 >= 53) {
  textPart6 += grade4 + "% - D";
} else if (grade4 >= 41) {
  textPart6 += grade4 + "% - E";
} else {
  textPart6 += grade4 + "% - F";
}
printOut(textPart6);

textPart6 = "Student 5: ";
if (grade5 >= 89) {
  textPart6 += grade5 + "% - A";
} else if (grade5 >= 77) {
  textPart6 += grade5 + "% - B";
} else if (grade5 >= 65) {
  textPart6 += grade5 + "% - C";
} else if (grade5 >= 53) {
  textPart6 += grade5 + "% - D";
} else if (grade5 >= 41) {
  textPart6 += grade5 + "% - E";
} else {
  textPart6 += grade5 + "% - F";
}
printOut(textPart6);

for (let i = 1; i < students; i++) {
  let grade = 0;
  switch (i) {
    case 1:
      grade = grade1;
      break;
    case 2:
      grade = grade2;
      break;
    case 3:
      grade = grade3;
      break;
    case 4:
      grade = grade4;
      break;
    case 5:
      grade = grade5;
      break;
  }
  let j = 0;
  do {
    let gradeCompare = 0;
    switch (j) {
      case 1:
        // swap with grade1
        if (grade < grade1) {
          let temp = grade;
          grade = grade1;
          grade1 = temp;
        }
        break;
      case 2:
        if (grade < grade2) {
          let temp = grade;
          grade = grade2;
          grade2 = temp;
        }
        break;
      case 3:
        if (grade < grade3) {
          let temp = grade;
          grade = grade3;
          grade3 = temp;
        }
        break;
      case 4:
        if (grade < grade4) {
          let temp = grade;
          grade = grade4;
          grade4 = temp;
        }
        break;
      case 5:
        if (grade < grade5) {
          let temp = grade;
          grade = grade5;
          grade5 = temp;
        }
        break;
    }
    j++;
  } while (j < students);
}

printOut("Grades sorted descending:");
printOut("Grade 1: " + grade1 + "%");
printOut("Grade 2: " + grade2 + "%");
printOut("Grade 3: " + grade3 + "%");
printOut("Grade 4: " + grade4 + "%");
printOut("Grade 5: " + grade5 + "%");

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// This part has least two possible solutions, one using strings and one using numbers.

const solveWithStrings = true; // Set to true to solve with strings, false to solve with numbers

if(solveWithStrings) {
  printOut("Solving with strings");
} else {
  printOut("Solving with numbers");
}

function matchNumber(aN1, aN2, aN3, aN4, aN5, aN6, aNumber) {
  let count = 0;
  if (aN1 === aNumber) count++;
  if (aN2 === aNumber) count++;
  if (aN3 === aNumber) count++;
  if (aN4 === aNumber) count++;
  if (aN5 === aNumber) count++;
  if (aN6 === aNumber) count++;
  return count;
}

function matchString(aString, aNumber) {
  // Count how many times aNumber appears in aString
  let count = 0;
  for (let i = 0; i < aString.length; i++) {
    if (parseInt(aString.charAt(i), 10) === aNumber) {
      count++;
    }
  }
  return count;
}

let throws = 0; // Number of throws
let fullStraight = false; // 1 2 3 4 5 6
let yahtzee = false; // All the same
let tower = false; // 2 + 4 of a kind
let threePairs = false; // 3 pairs e.g., 112233
do {
  const d1 = Math.ceil(Math.random() * 6); // Roll dice 1
  const d2 = Math.ceil(Math.random() * 6); // Roll dice 2
  const d3 = Math.ceil(Math.random() * 6); // Roll dice 3
  const d4 = Math.ceil(Math.random() * 6); // Roll dice 4
  const d5 = Math.ceil(Math.random() * 6); // Roll dice 5
  const d6 = Math.ceil(Math.random() * 6); // Roll dice 6
  throws++;
  // Do the matching, and check for the combinations
  let c1, c2, c3, c4, c5, c6;
  if (solveWithStrings) {
    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;
    c1 = matchString(diceString, 1);
    c2 = matchString(diceString, 2);
    c3 = matchString(diceString, 3);
    c4 = matchString(diceString, 4);
    c5 = matchString(diceString, 5);
    c6 = matchString(diceString, 6);
  } else {
    c1 = matchNumber(d1, d2, d3, d4, d5, d6, 1);
    c2 = matchNumber(d1, d2, d3, d4, d5, d6, 2);
    c3 = matchNumber(d1, d2, d3, d4, d5, d6, 3);
    c4 = matchNumber(d1, d2, d3, d4, d5, d6, 4);
    c5 = matchNumber(d1, d2, d3, d4, d5, d6, 5);
    c6 = matchNumber(d1, d2, d3, d4, d5, d6, 6);
  }
  // Now check for the combinations
  let cm1, cm2, cm4, cm6;
  if (solveWithStrings) {
    const matchingString = "" + c1 + c2 + c3 + c4 + c5 + c6;
    cm1 = matchString(matchingString, 1);
    cm2 = matchString(matchingString, 2);
    cm4 = matchString(matchingString, 4);
    cm6 = matchString(matchingString, 6);
  } else {
    cm1 = matchNumber(c1, c2, c3, c4, c5, c6, 1); // Count of numbers that appear once, used for full straight
    cm2 = matchNumber(c1, c2, c3, c4, c5, c6, 2); // Count of numbers that appear twice, used for three pairs
    cm4 = matchNumber(c1, c2, c3, c4, c5, c6, 4); // Count of numbers that appear four times, used for tower
    cm6 = matchNumber(c1, c2, c3, c4, c5, c6, 6); // Count of numbers that appear six times, used for yahtzee
  }
  // Check for full straight
  if (cm1 === 6 && !fullStraight) {
    // We have a full straight
    fullStraight = true;
    printOut(`Full straight: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  // Check for yahtzee
  if (cm6 === 1 && !yahtzee) {
    // We have yahtzee
    yahtzee = true;
    printOut(`Yahtzee: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  //check for tower
  if (cm4 === 1 && cm2 === 1 && !tower) {
    // We have a tower
    tower = true;
    printOut(`Tower: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  //check for three pairs
  if (cm2 === 3 && !threePairs) {
    // We have three pairs
    threePairs = true;
    printOut(`Three pairs: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
} while (!fullStraight || !yahtzee || !tower || !threePairs);
printOut(newLine);
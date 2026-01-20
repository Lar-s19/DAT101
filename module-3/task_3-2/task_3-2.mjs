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

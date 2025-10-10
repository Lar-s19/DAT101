"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("If i wake up at 7, " +"I can take the bus to school.");
    }else if (wakeUpTime == 8) {
      printOut("If i wake up at 8, " + "I have to take the train to school.");
    }else  {
        printOut("If i wake up later than 8, " + "I have to take a car to school.");      
    }

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -1; // Change this value to test the conditions. 
if (number > 0) {
  printOut(number + " is Positive");
} else if (number == 0){
  printOut("Zero");
} else{
  printOut(number + " is Negative");
}
printOut(newLine);
printOut("--- Part 6, 7 ---------------------------------------ss-------------------------------------------------------");
/* Put your code below here!*/
let imageSizeMP = Math.floor(Math.random()*8)+1; // Generates a random number between 0 and 8
printOut("Image size is " + imageSizeMP + "MP");
if (imageSizeMP < 4) {
  printOut("Image is too Small");
} else if (imageSizeMP > 6) {
  printOut("Image is too Large");
} else {
  printOut("Thank you");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.indexOf("r")!==-1) {
  printOut("It's " + monthName + " You must take vitamin D");
} else {
  printOut("It's " + monthName + " You don't need vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getDaysInMonth(month) {
  if (month === "February") {
    return 28;
  } else if (
    month === "April" || month === "June" || month === "September" || month === "November"
  ) {
    return 30;
  } else {
    return 31;
  } 
}
const monthDays = "Month " + monthName + " has " + getDaysInMonth(monthName) + " days.";  
printOut(monthDays);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function galleryAvailability(month) {
  if (month === "Mars" || month === "Mai") {
    printOut("The art gallery is temporarily closed in " + month + ".");
  } else if (month === "April") {
    printOut("In " + month + ", you have temporary access to the next building.");
  } else {
    printOut("The art gallery is open in " + month + ".");
  }
}
galleryAvailability(monthName);
printOut(newLine);

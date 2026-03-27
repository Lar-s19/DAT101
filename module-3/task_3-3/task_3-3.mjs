"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todayDate() {
    const today = new Date();
    const settings = {weekday: "long", day: "numeric", month: "long", year: "numeric"}; 
    const norwegian = today.toLocaleDateString("no-NB", settings);
printOut(norwegian);
return today;
}
todayDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const todayObj = todayDate();

function daysUntil2XKO() {
    const today = new Date();
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const targetUTC = Date.UTC(2025, 4, 14,);
    const diffDays = targetUTC - todayUTC;
    const daysLeft = Math.ceil(diffDays / (1000 * 60 * 60 * 24));
printOut(daysLeft + " days left until 2XKO release.");
return daysLeft;
}
const daysLeft = daysUntil2XKO();
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleMetrics(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius
    const area = Math.PI * radius * radius

    printOut("diameter is " + diameter.toFixed(2));
    printOut("circumference is " + circumference.toFixed(2));
    printOut("area is " + area.toFixed(2));
}
circleMetrics(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleMetrics(rectangle){
    const {width, height} = rectangle;
    const circumference = 2* (width + height);
    const area = width * height

    printOut("Width: " + width + " Height: " + height);
    printOut("Circumference " + circumference.toFixed(2));
    printOut("Area " + area.toFixed(2));
}

rectangleMetrics({width: 4, height: 3});

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemp(value, type) {
  const t = String(type).toUpperCase();
  let c, f, k;

  if (t === "C" || t === "CELSIUS") {
    c = value;
    f = c * 9 / 5 + 32;
    k = c + 273.15;
  } else if (t === "F" || t === "FAHRENHEIT") {
    f = value;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;
  } else if (t === "K" || t === "KELVIN") {
    k = value;
    c = k - 273.15;
    f = c * 9 / 5 + 32;
  } else {
    printOut("Unknown temperature type: " + type);
    return;
  }

  printOut(Math.round(c) + " C, " + Math.round(f) + " F, " + Math.round(k) + " K");
}

convertTemp(25, "C");   
convertTemp(100, "F");   
convertTemp(300, "K");  

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part7CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  if (aSpeed === null) {
    // Calculate speed
    if( !aTime || aTime === 0 || !aDistance ) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  } else if (aTime === null) {
    // Calculate time
    if( !aSpeed || aSpeed === 0 || !aDistance ) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  } else if (aDistance === null) {
    // Calculate distance
    if( !aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be null when calculating distance!");
      return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }
}
Part7CalculateSpeedDistanceTime(100, 2, null); // Calculate speed
Part7CalculateSpeedDistanceTime(100, null, 50); // Calculate time
Part7CalculateSpeedDistanceTime(null, 2, 50); // Calculate distance
Part7CalculateSpeedDistanceTime(null, null, 50); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
Part8AdjustString("Hello", 30, "*", true); // Insert at end
Part8AdjustString("World", 25, "#", false); // Insert at beginning
Part8AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut();
printOut(newLine);
function Part9TestMathExpression(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    // Calculate left side, one more number than right side
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    // Calculate right side
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Maths fun!");
}

Part9TestMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut();
let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);
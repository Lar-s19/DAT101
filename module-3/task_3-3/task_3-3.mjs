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
function factorial(n){
    if (n < 0){
        return "Does not exist.";
    }
    if (n === 0 || n === 1 ){
        return 1;
    }
    
    let result = 1;

    for (let i = 2; i <= n; i++){
        result *= i;
    }
    
    return result;
}
const n = 9 // This decides what the factorial is.
printOut("the factorial of " + n + " = " + factorial(n));
printOut(String(factorial(0)));
printOut(newLine);

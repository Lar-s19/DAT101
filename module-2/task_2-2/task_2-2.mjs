"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(2 + 3 * (2 - 4) * 6);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 25.34 * 1000;
const inches = meters / 25.4;
printOut(inches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3, hours = 12, minutes = 12, seconds = 45;
const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut(totalMinutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutes1 = 6322.52;
const days1 = Math.floor(totalMinutes1 / (24 * 60));
const hours1 = Math.floor((totalMinutes1 % (24 * 60)) / 60);
const minutes1 = Math.floor(totalMinutes1 % 60);
const seconds1 = Math.round((totalMinutes1 - Math.floor(totalMinutes1)) * 60);
printOut(days1 + " days, " + hours1 + " hours, " + minutes1 + " minutes, " + seconds1 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 54 Dollars, to Norwegian Kroner when exchange rate is 76 NOK = 8.6 USD
// Dollar to NOK
const dollar = 54;
const exchangeRate = 76 / 8.6;
const nok = dollar * exchangeRate;
printOut("54 Dollars = " + nok.toFixed(0) +" NOK");
// NOK to Dollar
const nokAmount = 477;
const dollarPerNok = 8.6 / 76;
const dollarsFromNok = nokAmount * dollarPerNok;
printOut("477 NOK = " + dollarsFromNok.toFixed(0) + " Dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/  
const quote = "Det er mye mellom himmel og jord som vi ikke forstår.";
const set19 = quote.charAt(19);
const SetString = quote.substring(35,43);
const index = quote.indexOf("jord")
printOut(quote);
printOut("There are " + quote.length + " characters in the quote.");
printOut("The nineteenth letter in the quote is "+ set19);
printOut("The characters in the starting position 35 and 8 is " + SetString);
printOut("The word Jord starts at " + index);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let femTre = (5>3);
let SjuLikSju = (7>=7);
let ABLik = ("a">"b"); 
let einA = ("1"<"a");
let ToFemMinusABCD = (2500 < "ABCD");
let arneTomas = ("Arne" !== "Tomas");
let toFem = (2===5);
let ABCD = ("ABCD" > "BCD");
printOut("5 > 3 = " + femTre + "<br>7> = 7 " + SjuLikSju + "<br>a>b = " + ABLik + "<br>1 < a = " + einA + "<br>2500 < ABCD = " + ToFemMinusABCD + "<br>Arne !== Tomas = " + arneTomas + "<br>2 === 5 = " + toFem + "<br>ABCD > BCD = " + ABCD + " False is true");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numText1 = "254";
numText1 = Number(numText1);
let numText2 = "57.23";
numText2 = Number(numText2);
let numText3 = "25 Kroner";
numText3 = parseInt(numText3);
printOut("254 = " + (numText1) + "<br>57.23 = " + (numText2) + "<br>25 Kroner = " + (numText3));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomNum = Math.floor(Math.random()*360+1);
printOut("Random Number is " + randomNum); 
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131
let weeks = 1*7
let TotalWeeks = Math.floor(totalDays / weeks)
let TotalDays = Math.floor(totalDays % weeks)
printOut(totalDays + " days is " + TotalWeeks + " weeks and " + TotalDays + " days.");
printOut(newLine);
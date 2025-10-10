
"use strict"
import {printOut} from "../../common/script/utils.mjs";

const text1 = "Gratulerer, du er akkurat gammel nok!";
const text2 = "Du kan gå på kino!";
const text3 = "Beklager, du er ikke gammel nok!";

const ageMovie = 16;
const ageBringAlong = 10;
let age1 = 19 // Gammel nok til å ta meed seg en person under 16.
let age2 = 14 // Person er ikke gammel nok til å gå alone.

if(age1 < age2){
    const age1Old = age1;
    age1 = age2;
    age2 = age1Old;
}


if (age1 <= ageMovie) { 
    printOut("Person 1 " + text2);
    if (age2 >= ageMovie)
        printOut(text2);
    else if (age1 >= ageBringAlong){
        printOut("person 1 " + text1);
        printOut("Person 2 " + text2);
    printOut("person 3 " + text3);
    } 
}else{
    printOut("Vi har null case for det!!.");
}
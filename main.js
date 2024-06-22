#! /usr/bin/env node
//step one
import { differenceInSeconds } from "date-fns";
//function for count down secomd
function* countdownTimer(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2 : counter inilize
let timerIterator = countdownTimer(10);
//function to create a count down timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    //if else condition 
    if (!result.done) {
        //current date and time calls
        const now = new Date();
        //calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        //calculate remainig seconds in time 
        const remainigSeconds = differenceInSeconds(countdownTimer, now);
        console.log(`Remainig Seconds: ${remainigSeconds}`);
        setTimeout(displayCountdown, 1000); //1 second is equal to 1000 ms
    }
    else {
        // display result count down complete
        console.log("Countdown Complete!");
    }
}
//invoke
displayCountdown();

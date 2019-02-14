"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Austin Inmon
   Date:  2.14.19

   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

// The varible set the value to 30 min. 
var minsLeft = 30;
//  The var sets the value to 0 seconds
var secsLeft = 0;
//  The time left on the clock will by multiply by 60 and added to the seconds left.
var timeLeft = (minsLeft * 60 + secsLeft);
//  The clock will count down by 1000 milliseconds.
var clockID = setInterval("countdown()", 1000);
// The function has a name of countdown. 
function countdown() {
    // The time will be divided and rounded to nears lowest digit.
    minsLeft = Math.floor(timeLeft / 60);
    //
    secsLeft = timeLeft - 60 * minsLeft;
    //  The leading zero will make sure that the leading digit will be a 0 unless min is above ten .
    var minsString = addLeadingZero(minsLeft);
    //  The leading zero will make sure that the leading digit will be a 0 unless sec is above ten .
    var secsString = addLeadingZero(secsLeft);
    //  Changes the minutes string to the proper value.
    document.getElementById('minutes').innerHTML = minsString;
    //  Changes the seconds string to the proper value.
    document.getElementById('seconds').innerHTML = secsString;
    //  Added the function of checkTimer. 
    checkTimer();
    // Counts down by one.
    timeLeft--;
}
// Function name stopClock. 
function stopClock() {
    // When the clokc hits zero and if form is not done, the message "Order Expired" will show.
    document.getElementById('TimeHead').insertAdjacentHTML("beforeend", "<br />(Order Expired)");
    // Keeps the clock from rerunning when clock hits zero. 
    clearInterval(clockID);
}

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}
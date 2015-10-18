//date.js
//function that tells us what day it is

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

//get today's day name
function whatDayIsIt(){
  return days[ new Date().getDay() ];
}

//passing whatDayIsIt to app.js
// module.exports = whatDayIsIt;

module.exports = {
  whatDayIsIt: whatDayIsIt
}

// console.log( whatDayIsIt() );
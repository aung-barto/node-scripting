var DateMethods = require('./date');
var fs = require('fs');
var request = require('superagent');

fs.readFile('./date.js', 'utf-8', function(err, data){
  console.log(err, data);  
});

//should get the date
console.log( DateMethods.whatDayIsIt() );
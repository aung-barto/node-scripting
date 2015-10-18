/*
var DateMethods = require('./date');
var fs = require('fs');
var request = require('superagent');

fs.readFile(
  './date.js', 
  'utf-8', 
  function(err, data){
    console.log(err, data);  
  }
);

//should get the date
console.log( DateMethods.whatDayIsIt() );
*/

var copy = require('./copy');

// console.log( process.argv );
// var ar = [11,12,13,14];
// var newAr = ar.map( function( currentEl ) {
//  return currentEl*currentEl;
// });
// console.log( newAr );
// var evenAr = ar.reduce(function(newArray, currentEl){
//  if ( currentEl % 2 === 0 ) {
//    newArray.push( currentEl );
//  }

//  return newArray;
// }, []);

// console.log( evenAr );

// ATTEMPT 1 ////////////////////////////////////////////////////////////////
// var args = process.argv.reduce(function(argsAsArray, currentEl, currentIndex){
//   if ( currentIndex > 1 ) {
//     argsAsArray.push( currentEl );
//   }

//   return argsAsArray;
// }, []);

// console.log( args );

// copy( args[0], args[1], args[2] );

// copy.apply( null, args );
/////////////////////////////////////////////////////////////////////////////

// ATTEMPT 2 ////////////////////////////////////////////////////////////////
var args = process.argv.reduce(function( argsAsObj, currentEl ){
  var current = currentEl.charAt(0);
  var next = process.argv[index + 1]&& process.argv[index + 1].charAt(0);
  if( current === '-' && next !== '-'){
    argsAsObj[ currentEl ] = process.argv[ index + 1];
    console.log( 'Found a flag!' + currentEl + ':' + argsAsObj[ currentEl ] );
  }
  return argsAsObj;

}, {});
console.log( args );
if ( Object.keys( args ).indexOf('-h') !== -1 ){
  var documentation = "\t\tUsage : node app [options]              \                              
  \t\tOptions:                                                     \             
    \t\t\t-f, -file           : file path to copy from             \        
    \t\t\t-o, -output         : path to copy to, NO trailing slash \ 
    \t\t\t-c, -copiedFilePage : [optional], name of copied file"
  console.log( documentation );
  return;
}
copy( args['-f'], args['-o'], args['-c']);




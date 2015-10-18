var fs = require('fs');
var mkdirp = require('mkdirp');

/*
//to copy:
fs.readFile('date.js', 'utf-8', function(err, data){
  //do stuff here
});

//to write:
fs.writeFile('date2.js', 'Hello World', function(err, data){
  //do stuff here
});

// from jsdoc: http://usejsdoc.org/

@copyFile
@param fileName {string} - the path of file to copy
@param outputPath {string} - the path of the dir to output to
@param copiedFileName {string} - OPTIONAL: what the copied file should be called
*/

// var fileName = 'date.js';
// var outputPath;
// var outputPath = 'date2.js';

/*
function copyFile(fileName, outputPath){
  //copyFile
  fs.readFile(fileName, 'utf-8', function(err, data){
  //do stuff here
    console.log( err, 'file read');
    fs.writeFile( outputPath, data, function(newData){
      console.log('file is written');
    })
  });
}

copyFile('date.js', 'date2.js');
*/

// Solution
function copyFile(fileName, outputPath, copiedFileName){
  if ( typeof fileName !== "string" ) {
    throw new Error('Needs a fileName to copy!');
  }
  if ( typeof outputPath !== "string" ) {
    throw new Error('Needs an outputPath to copy to!'); 
  }

  if ( typeof copiedFileName !== "string" ) {
    var copiedFileNameBits = fileName.split('.');
    if ( copiedFileNameBits.length === 0 ) {
      copiedFileName += '-copy';
    }
    else {
      var last = copiedFileNameBits.pop();
      copiedFileNameBits.push( 'copy' );
      copiedFileNameBits.push( last );
      copiedFileName = copiedFileNameBits.join('.');
    }
  }
  fs.readFile(fileName, 'utf-8', function(err, data){
    if (err){
      throw new Error( err );
    }
    // copy and paste into a new folder
    var newFilePath = outputPath + '/' + copiedFileName;
    mkdirp( outputPath, function(err){
      if (err){
        throw new Error( err );
      }
      fs.writeFile(newFilePath, data, function(err, writtenData){
        if (err){
          throw new Error( err );
        }
        console.log( 'Successfully copied. File lives in: ' + newFilePath );
      });
      
    });
  });
}

// copyFile('date.js', './Date', 'date2.js');


module.exports = copyFile;
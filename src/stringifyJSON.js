// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  //if/else for - isinstanceof Array; string; etc
  if (typeof obj === 'number') {
    result += obj;
  
  } else if (obj === null) {
    result += obj;
  
  } else if (typeof obj === 'boolean') {
    result += obj;

  } else if (typeof obj === 'string') {
    result = '"' + obj + '"';
  }

  


  if (obj instanceof Array) {
    console.log("it's an array");
    
  }

  return result;
};

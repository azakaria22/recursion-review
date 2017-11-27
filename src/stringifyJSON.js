// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  //if/else for - isinstanceof Array; string; etc
  if (obj instanceof Number) {
    result += obj;
  }


  if (obj instanceof Array) {
    console.log("it's an array");
    
  }

  return result;
};

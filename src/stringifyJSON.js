// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  //if/else for - isinstanceof Array; string; etc
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    result += obj;
  
  } else if (typeof obj === 'string') {
    result = '"' + obj + '"';
  
  } else if (obj instanceof Array) {
    result = '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        result += ',';
      }
    }
    result += ']';

  } else if (typeof obj === 'function' || obj === undefined) {
    console.log('in function and undefined');
    console.log('obj', obj);
    result = '{}';
    console.log('result', result);

  } else if (typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';      
    }

    if (result.length > 1) {
      result = result.slice(0, result.length - 1);
    }
    result += '}';
  } 

  return result;
};

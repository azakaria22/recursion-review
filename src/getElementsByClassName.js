// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
document.addEventListener('DOMContentLoaded', function(event) {
  var getElementsByClassName = function(className) {
    // your code here
    var result = [];

    for (var divobj in document.body) {
      if (divobj === className) {
          //result.push divObj
      }
    }

    if (element.childNodes) {
      getElementsByClassName(element.childNodes);
    }

    if (document.body.someDiv /* contains className */) {
        //result.push(document.body.someDiv);
        // var body = document.body;
    }

      //console.log(document.body.slice(document.body.indexOf(className), document.body.indexOf(className) + className.length));
    
      // $('.className');

    

    //first: search the body for each element with a class of className
    //then: if there are child nodes, call recursively on each
    //on each 'hit,' push to result array


    //use these in the code: document.body, element.childNodes, and element.classList

    return result;
  };

});

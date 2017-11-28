// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
  var getElementsByClassName = function(className) {
    var result = [];
    var searchNodes = function (parentNode) {
      if (parentNode.classList && parentNode.classList.contains(className)) {
        result.push(parentNode);
      }

      if (parentNode.childNodes) {
        parentNode.childNodes.forEach(function (node) {
          searchNodes(node);
        });
      }
    };

    searchNodes(document.body);

    return result;
  };
function drop(arr, func) {
  // Drop them elements. 
  var shiftArr= arguments[0];
  var argFunction = arguments[1];
  var newArr = [];
  
  for(i=0;i<arr.length;i++) {
    var shifted = shiftArr[i];
    if( argFunction(shifted) === true) {
      newArr.push(shifted);
    }
  }
  
  
  return newArr;
}

drop([1, 2, 3], function(n) {return n < 3; });
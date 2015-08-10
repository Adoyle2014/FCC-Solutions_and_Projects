function drop(arr, func) {
  // Drop them elements.
  var newArr = [];
  for(i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push(arr[i]);
    }
  }  
  return newArr;
}

drop([1, 2, 3], function(n) {return n < 3; });
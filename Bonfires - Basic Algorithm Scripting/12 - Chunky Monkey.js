function chunk(arr, size) {
  // Break it up.  
  var start = 0;
  var end = size;
  var strArr = [];
  var newArr = [];
  
  for(i = 0; i < (arr.length/size); i++) {
    var subArr = arr.slice(start, end);    
    start += size;
    end += size;
    newArr[i] = subArr;    
  }  
  arr = newArr;
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);
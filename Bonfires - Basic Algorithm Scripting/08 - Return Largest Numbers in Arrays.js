function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  var newArr = [];
  for(var i=0;i<arr.length;i++) {   
    var subArr = arr[i];
    for(var s=0;s<subArr.length;s++) {      
      if (largest < subArr[s]) {
        largest = (subArr[s]);        
      }        
    } 
    newArr.push(largest);
  }  
  arr = newArr;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
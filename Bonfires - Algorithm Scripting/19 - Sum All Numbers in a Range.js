function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var newArr = [];
  var total = 0;
  
  for(i = min; i < max+1; i++) {
    newArr.push(i);
  }
  
  total = newArr.reduce(function(a, b) {return a + b;});
  
  console.log(min);
  console.log(max);
  console.log(newArr);
  return(total);
}

sumAll([1, 4]);
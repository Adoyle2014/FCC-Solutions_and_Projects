function where(arr, num) {
  // Find my place in this sorted array.
  //sort array in ascending order
  arr.push(num);
  arr.sort(function(a,b){return a-b;});
  num = arr.indexOf(num);  
  return num;
}

where([40, 60], 50);
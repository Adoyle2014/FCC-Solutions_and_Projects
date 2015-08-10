function diff(arr1, arr2) {
  var newArr = [];
  
  // Same, same; but different.
  
  
  function array1Diff(val) {
    return arr1.indexOf(val) === -1;
  }
  function array2Diff(val) {
    return arr2.indexOf(val) === -1;
  }
  newArr1 = arr1.filter(array2Diff);
  newArr2 = arr2.filter(array1Diff);

  newArr = newArr1.concat(newArr2);

  return newArr;
}


diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 function destroyer(arr) {
  // Remove all the values
  var destroyerArgsAmount = arguments.length;
  var matchArr = arguments[0];       
  var newArr = [];

  var matchItems = []; 
  for(i = 1; i < destroyerArgsAmount; i++) {
    matchItems.push(arr[i]);
  }

  function arrayFilter(val) {
    return matchItems.indexOf(val) === -1;    
  }
    
  console.log(arr);
  arr = matchArr.filter(arrayFilter);      
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 
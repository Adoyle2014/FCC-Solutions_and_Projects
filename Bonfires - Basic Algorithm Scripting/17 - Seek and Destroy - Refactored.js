function destroyer(arr) {

    var newArr = arr.filter(function(elem) {
        for (var num = 1; num < arguments.length; num++) {
   if (elem === arr[num]) {
                return false; 
                 }
            }
      return true;
    });    
  return newArr;
}                             
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
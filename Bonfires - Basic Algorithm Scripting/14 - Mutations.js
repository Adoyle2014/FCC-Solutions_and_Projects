function mutation(arr) {
  var firstStr = arr[0].toString().toLowerCase();
  var secondStr = arr[1].toString().toLowerCase();
  var secondStrArr = secondStr.split("");
  var bool = true;
  for(i = 0; i < (secondStrArr.length); i++) {
    var search = firstStr.search(secondStrArr[i]);
    if(search === -1) {
      bool = false;      
    }
  }  
  
  return bool;
}

mutation(['hello', 'hey']);
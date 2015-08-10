function findLongestWord(str) {
  arr = str.split(" ");
  newStr = "";
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > newStr.length) {
      newStr = arr[i];
    }
  }
  str = newStr;
  return str.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
function mutation(arr) {
  var word = arr[0].toString().toLowerCase();
  var word2 = arr[1].toString().toLowerCase();
  
  var answer = true;
  
  for (var char in word2){
    if (word.indexOf(word2[char]) === -1){answer = false;}
  }
  return answer;
}

mutation(['hello', 'hey']);
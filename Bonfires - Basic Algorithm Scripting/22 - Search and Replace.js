function replace(str, before, after) { 
 var beforeInd = str.search(new RegExp(before,"i"));
  if(str[beforeInd].toUpperCase() === str[beforeInd]) {
    var cap = after[0].toUpperCase() + after.substring(1);
    return str.replace(before,cap);
  } else {
    return str.replace(before,after);
  } 
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
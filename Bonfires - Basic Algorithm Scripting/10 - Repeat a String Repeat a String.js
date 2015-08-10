function repeat(str, num) {
  // repeat after me
  newStr = "";
  for(i=0;i<num;i++) {
    newStr += str;
    
  }
  str = newStr;
  return str;
}

repeat('abc', 3);
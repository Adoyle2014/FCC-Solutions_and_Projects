function palindrome(str) {
  str = str.toLowerCase().replace(/(\W)/g, "");
  if(str === (str.split("").reverse().join(""))) {
    return true;
  }
  else 
  {
    return false;
  }
  
}



palindrome("eye");
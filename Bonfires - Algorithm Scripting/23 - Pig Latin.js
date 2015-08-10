function translate(str) {
  var firstConst = str.match(/^[^aeiou]+/i);  
  if(firstConst === null) {
    return str+"way";
  } else {
    return str.replace(/^[^aeiou]+/i, "") + firstConst + "ay";
  }  
}

translate("consonant");
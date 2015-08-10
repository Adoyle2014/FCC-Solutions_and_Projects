function convert(str) {
  // &colon;&rpar;
  var codes = {
    '&': '&amp;', 
    '<':'&lt;', 
    '>':'&gt;', 
    '"':'&quot;', 
    "'":'&apos;'};
  var newStr = str;
  for(var key in codes) {
    newStr = newStr.replace(new RegExp(key,"g"), codes[key]);
  }
  
  
  
  return newStr;
    
}

convert('Dolce & Gabbana');
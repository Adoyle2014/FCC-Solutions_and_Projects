function convert(num) {
  var roman = "";
  var unit = num%10;
  var tens = (num-unit)/10;
  switch(tens){
    case 0: roman += ""; break;
    case 1: roman += "X"; break;
    case 2: roman += "XX"; break;
    case 3: roman += "XXX"; break;
    case 4: roman += "XL"; break;
    case 5: roman += "L"; break;
    case 6: roman += "LX"; break;
    case 7: roman += "LXX"; break;
    case 8: roman += "LXXX"; break;
    case 9: roman += "XC"; break;
  }
  switch(unit){
    case 0: roman += ""; break;
    case 1: roman += "I"; break;
    case 2: roman += "II"; break;
    case 3: roman += "III"; break;
    case 4: roman += "IV"; break;
    case 5: roman += "V"; break;
    case 6: roman += "VI"; break;
    case 7: roman += "VII"; break;
    case 8: roman += "VIII"; break;
    case 9: roman += "IX"; break;
  }
  return roman;
 
  
  
}

convert(36);
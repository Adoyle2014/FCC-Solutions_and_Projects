function convert(num) {
  var divisors = [100, 50, 10, 5, 1];
  var letters = 'CLXVI';
  var romanArray = [];
  var remainder = num;
  var romanNumeral = "";
  
  for(i = 0; i<divisors.length; i++) {
    n = Math.floor(remainder/divisors[i]);
    romanArray.push(n);
    romanNumeral += letters[i].repeat(n);
    remainder = num%divisors[i];
  }    
  return romanNumeral.replace(/VIIII/g, "IX");   
}

convert(36);
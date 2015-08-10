function sumPrimes(num) {  
  var numArr = []; 
  var primeTotal = 0;
  
  //Set list of numbers to find primes from
  for (var counter = 0; counter <= num; counter++) {
    var notPrime = false;
    //Check for remainder or itself of i and counter
    for (i = 2; i <= counter; i++) {
      if (counter%i===0 && i!==counter) {
        notPrime = true;
      }
    }
    //If false is given for prime test, push the counter 
    //into the array
    if (notPrime === false) {
      numArr.push(counter);
    }
  }
  //Total the primes in the array
  for(i = 2; i < numArr.length; i++) {
    primeTotal += numArr[i];
  } 
  return(primeTotal);
}
sumPrimes(10);
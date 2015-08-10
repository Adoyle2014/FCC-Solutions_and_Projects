function sumPrimes(num) {
    
  var numArr = [];
 
  primeTotal = 0;
  
  for (var counter = 2; counter <= num; counter++) {

    var notPrime = false;
    for (i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                numArr.push(counter);
    }
}
  console.log(numArr);  
  
  return numArr.reduce(function (previous, current) {return previous + current;});
  
}

sumPrimes(67);
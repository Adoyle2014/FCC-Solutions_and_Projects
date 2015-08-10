function sumFibs(num) {
  var old = 0;
  var current = 1;
  var fib = 1;
  var sum = 0;
  

  while (fib <= num){
    if (fib %2 !== 0){
      sum = sum + fib;
    }
    fib = old+current;
    old = current;
    current = fib;
  }
  
  return sum;
}

sumFibs(4);
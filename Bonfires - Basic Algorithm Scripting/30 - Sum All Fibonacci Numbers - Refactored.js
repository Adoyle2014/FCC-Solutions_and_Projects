function sumFibs(num) {
  var fib = [];
  var total = 0;
  fib[0] = 0;
  fib[1] = 1;
  fibNum = 0;  
  for(i = 2;  fibNum < num + 1; i++) {    
    fib[i] = fib[i-2] + fib[i - 1];
    fibNum = fib[i];    
    if (fib[i-1] % 2 === 1) total+=fib[i-1];
  }
  return total;
}
sumFibs(4);
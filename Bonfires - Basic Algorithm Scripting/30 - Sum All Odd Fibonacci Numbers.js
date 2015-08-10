function sumFibs(num) {
  var fib = [];
  var total = 0;
  fib[0] = 0;
  fib[1] = 1;
  fibNum = 0;
  //returns num amount of fibs
  for(i = 2;  fibNum < num + 1; i++) {    
    fib[i] = fib[i-2] + fib[i - 1];
    fibNum = fib[i];    
  }
  fib.splice(-1,1);
  for(i = 0; i < fib.length; i++) {
    if(fib[i] % 2 === 0) {
      fib.splice(i, 1);        
    }    
  }  
  for(i = 0; i < fib.length; i++) {
    total += fib[i];
  }    
  return total;
}

sumFibs(8);
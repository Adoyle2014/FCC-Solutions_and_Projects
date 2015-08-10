function factorialize(num) {  
  for(i=num;--i;) {
    num *= i; 
  }
  return num;
}

factorialize(5);
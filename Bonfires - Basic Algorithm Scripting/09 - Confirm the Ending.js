function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
   return str.indexOf(target, str.length - target.length) !== -1;
  
  
  
  
}

end('Bastian', 'n');
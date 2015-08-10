function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 
  if(str.substr(-1,1) === target.substr(-1,1)) {
    return true;
  } else {
    return false;
  }  
  console.log(end);
}

end('Walking on water and developing software from a specification are easy if both are frozen', 'specification');
function smallestCommons(arr) {
  arr = arr.sort(function(a, b){return a-b;});
  var max = arr[0];
  var min = arr[1];
  var lcm = true;
  
  
  for (var i = arr[0]+1; i<=arr[1]; i++){
    max *= i;
  }
  
  
  for (var j = min; j <= max; j += arr[1]){
    for (var x = arr[0]; x<=arr[1]; x++){
      if (j % x !== 0){   //if j % x !== 0 then j is not a muliple of x
        lcm = false;
      }                   //end "if"
    }                     //end for (x)
    if (lcm){             //j passed the tests
      return j;
    }                    
    lcm = true;           //reset lcm for the next candidate "j"
  }                       //end for (j)
    
}


smallestCommons([1,5]);
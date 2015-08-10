function fearNotLetter(str) {
  
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length-1);
  var notFound = [];
  
  for(var i=first; i<=last; i++){
    var letter =  String.fromCharCode(i);
    if(str.indexOf(letter)===-1){
      notFound.push(letter);
    }
   
  }
  
  return ( notFound.length===0 ? undefined : notFound.join('') );
}

fearNotLetter('ae');
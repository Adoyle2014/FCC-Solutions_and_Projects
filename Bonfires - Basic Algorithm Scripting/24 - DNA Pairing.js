function pair(str) {
  var pairs = {
    A:'T', T:'A', C:'G', G:'C'
  };
  
  var strand = [];
  for(var l in str){
    strand.push([str[l], pairs[str[l]]]);
  }
  
 return strand;
 
}

pair("GCG");
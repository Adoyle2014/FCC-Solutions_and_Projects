function unite(arr1, arr2, arr3) {
  var items = [];
  
  function reducer(acc, current) {
    console.log(acc);
    if(acc.indexOf(current)===-1){
      acc.push(current);
    }
    return acc;
  }
  
  arr1.reduce(reducer, items);
  arr2.reduce(reducer, items);
  arr3.reduce(reducer, items);
  
  return items;
  
}
        
unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
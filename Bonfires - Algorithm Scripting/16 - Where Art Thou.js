function where(collection, source) {
  var arr = [];
  
  for(var key in source) {
    for(i = 0; i < collection.length; i++) {
      var collectionItem = collection[i];
      if(source[key] === collectionItem[key]) {
        arr.push(collection[i]);
      }
    }
  }  
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
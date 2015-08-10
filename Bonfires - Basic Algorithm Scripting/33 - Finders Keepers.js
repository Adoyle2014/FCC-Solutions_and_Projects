function find(arr, func, ctx) {
  var num = 0;
  var bool = false;
  arr.some(function(el, i) {
        return func.call(ctx, el, i, arr) ? ((num = el), true) : num = undefined;
    });
  
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
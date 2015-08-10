function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    function isTrue(value) {
      test = Boolean(value);
      return test;
    }
  
  var filtered = arr.filter(isTrue);
  return filtered;
}
  

bouncer([7, 'ate', '', false, 9]);
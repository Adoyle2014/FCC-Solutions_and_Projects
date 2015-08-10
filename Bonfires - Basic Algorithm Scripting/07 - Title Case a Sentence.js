function titleCase(str) {
  str = str.toLowerCase();
  var arr = str.split(" ");
  var strArr = [];
  for (var i=0; i<arr.length; i++) {
    word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    strArr[i] = word;
  }
  
  str = strArr.toString();
  str = str.replace(/,/g," ");
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
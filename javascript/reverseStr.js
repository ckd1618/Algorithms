function reverseString(str) {
  var newStr = '';
  for (var i = str.length-1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
console.log(reverseString('yoyo mastery'));
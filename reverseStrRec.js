function reverseString(str, i=str.length-1) {
  if (i === 0) return str[i];
  return str[i] + reverseString(str, i-1);
}
console.log(reverseString('yoyo mastery'));
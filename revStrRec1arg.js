function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str[0];
  }
}
reverseStringRecursive('yoyo master');
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (var i=1; i<array.length; i++) {
    for(var j=0; j<i; j++) {
      if (array[j]>array[i]) {
        var location = j;
        var valueOfI = array[i];
        for (var k=i-1; k>=location; k--) {
          array[k+1]=array[k];
        }
        array[location]=valueOfI;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  if (numbers.length===1) return numbers;
  var maxindex = numbers.length-2;
  for (var i=0; i<=maxindex; maxindex--) {
    for (var j=0; j<=maxindex; j++) {
      if (numbers[j] > numbers[j+1]) {
        var temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

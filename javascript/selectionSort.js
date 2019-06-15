const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numbers) {
  for (var i=0; i<numbers.length; i++) {
    var min = i;
    for (var j=i+1; j<numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    var temp = numbers[min];
    numbers[min] = numbers[i];
    numbers[i] = temp;
  }
  return numbers;
}

console.log(selectionSort(array));
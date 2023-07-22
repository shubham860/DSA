/**
 * quickSort
 * @params {array} array for sorting
 */

function quickSort_(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[array.length - 1]; // last element
  const leftArray = [],
    rightArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...leftArray, pivot, ...rightArray];
}

/**
 * quickSort
 * @params {array} array for sorting
 * Above algo doesn't contains space constraints and quick sort is used where there is space constraints
 * Check below for the optimised solution
 */

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function partition(array, low, high) {
  let pivot = array[0]; //first element
  let i = low, j = high;
  while (i <= j) {
    while (i< high && array[i] <= pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if(i<j) {
      swap(array, i, j); // swapping of i and j if it is greater and smaller then pivot repectively.
    } else break;
  }
  swap(array, low, j); // pivot swapping
  return j;
}

function quickSort(array, left, right) {
  if (array.length <= 1) {
    return;
  }
  if(left < right) {
    let index = partition(array, left, right);
    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);
  }
  return array;
}

const items = [3, 1, 2];

console.log("sorted Array -->", quickSort(items, 0, items.length - 1));

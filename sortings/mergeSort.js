/**
 * merge
 * @params {array} - array of length n
 * @params {number} - left - leftmost index of the array
 * @params {number} - right - rightmost index of the array
 * @params {number} - middle - middle element of the array
 */

function merge(array, left, right, middle) {
  const leftArrayLength = middle - left + 1;
  const rightArrayLength = right - middle;
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = array[i];
  }
  for (let j = 0; j < rightArrayLength; j++) {
    rightArray[j] = array[j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < leftArrayLength && j < rightArrayLength) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of left array
  while (i < leftArrayLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of right arrat
  while (j < rightArrayLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

/**
 * mergeSort
 * @params array - array of length n;
 * @params left - left index of array;
 * @params right - right index of array;
 */

function mergeSort(array, left, right) {
  if (left >= right) {
    return;
  }
  let middle = parseInt((left + right) / 2, 10);
  mergeSort(array, left, middle);
  mergeSort(array, middle + 1, right);
  merge(array, left, right, middle);
}

const array = [25, 17, 31, 13, 2];
mergeSort(array, 0, 5);

console.log("sorted Array ->", array);

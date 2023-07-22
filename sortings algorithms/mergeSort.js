/**
 * merge
 * @params {array} - array of length n
 * @params {number} - left - leftmost index of the array
 * @params {number} - right - rightmost index of the array
 * @params {number} - middle - middle element of the array
 */

function merge(array, leftArray, rightArray) {
  let i = 0,
    j = 0,
    k = 0;

  while (i < leftArray.length && j < rightArray.length) {
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
  while (i < leftArray.length) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of right array
  while (j < rightArray.length) {
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

function mergeSort(array) {
  let left = 0,
    right = array.length - 1;

  if (left >= right) {
    return array;
  }

  let middle = Math.floor((left + right) / 2);

  const leftArray = mergeSort(array.slice(left, middle + 1)); // Sort the left half
  const rightArray = mergeSort(array.slice(middle + 1, right + 1)); // Sort the right half
  merge(array, leftArray, rightArray); // Merge the two sorted halves

  return array; // Return the sorted array
}

const array = [25, 17, 31, 13, 2];
mergeSort(array);

console.log("sorted Array ->", array);

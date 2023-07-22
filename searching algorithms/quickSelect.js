/**
 * Quick Select - Based on quick sort to find kth element
 * {Array} array
 * {number} low 
 * {number} high
 * {number} kthElement
 */

function swapping(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  }


function partition(array, low, high) {
    let pivot = array[0];
    let i=low, j=high;

    while(i<=j) {
        while(i< high && array[i] <= pivot) {
            i++;
        }
        while(array[j] > pivot) {
            j--;
        }
        swapping(array, i, j);
    }
    swapping(array, low, j);
    return j;
};

function quickSelect(array, low, high, kthElement) {
    if(array.length <= 1) {
        return;
    }

    let index = partition(array, low, high);

    if(index === kthElement -1) {
        return index;
    }

    if(index < kthElement - 1) {
        return quickSelect(array, index + 1, high, kthElement);
    }else if(index > kthElement - 1) {
        return quickSelect(array, low, index - 1, kthElement);
    }
}

const array = [22, 43, 12, 45, 52, 86, 23, 62, 19, 84];

console.log('quickSelect', quickSelect(array, 0, array.length -1, 4));
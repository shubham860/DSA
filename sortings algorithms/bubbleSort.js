/**
 * Bubble sort Algorithm
 * @param {number[]} arr
 * @return {number[]}
 */

function swapping(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
};

function bubbleSort(array) {
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let swapped = false;
         // arrayLength - i - 1 is for optimisation as last element is already sorted in each iteration of i.
        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapping(array, j, j + 1);
            }
        }
        if (!swapped) {
            break;
        }
    }
}

const array = [3, 1, 2, 9, 15, 8, 20];
bubbleSort(array);
console.log('bubbleSort', array);
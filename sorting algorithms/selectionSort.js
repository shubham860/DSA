/**
 * Selection Sort
 * @params {array} array for sorting
 */

function swap(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
};

function selectionSort(array) {
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
}

const array = [3, 1, 2, 9, 15, 8, 20];
selectionSort(array);
console.log('selectionSort', array);
/**
 * Insertion Sort Algorithm Implementation
 * @param {Array} arr
 */

function insertionSort(arr) {
    const n = arr.length;
    for (let i=1; i<n; i++) {
        let key = arr[i], j = i-1;

        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j = j - 1
        }

        arr[j+1] = key;
    }
    return arr;
}

const sortedArray = insertionSort([25,17, 31, 13, 2]);

console.log('sortedArray -->', sortedArray);

/**
 * Bucket Sort
 * {array} Array
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

const bucketSort = (arr, n = arr.length) => {
    //Create a bucket array
    let bucket = Array.from({length: 10}, () => []);
    
    //Add the elements in a same range in bucket
    for(let i = 0; i < n; i++){
      let bucketIndex = Math.floor(arr[i]) * n;
      bucket[bucketIndex].push(arr[i]);
    }

    //Sort each bucket separately
    for(let i = 0; i < n; i++){
        insertionSort(bucket[i]);
    }
    
    // Get the sorted array
    // let index = 0;
    // for (let i = 0; i < n; i++) {
    //   for (let j = 0, size = bucket[i].length; j < size; j++) {
    //       arr[index++] = bucket[i][j];
    //   }
    // }
    arr = [].concat(...bucket);
    return arr
  }

console.log('Bucket sort', bucketSort([0.78, 0.91, 0.32, 0.45, 0.76, 0.43, 0.82, 0.94, 0.23]));
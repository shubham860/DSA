/**
 * Iterative Binary Search on Sorted Array 
 * {Array} array
 */

function iterativeBinarySearch(array, target) {
    let low = 0, high = array.length - 1, mid;

    for (let i=0; i<array.length; i++) {
        mid = Math.floor((low+high)/2);

        if(array[mid] === target) {
            return mid;
        }

        if(array[mid] > target) {
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log('BinarySearch', iterativeBinarySearch([1,2,4,5,6,7,8], 7));
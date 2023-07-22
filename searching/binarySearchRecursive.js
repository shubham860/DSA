/**
 * Recursive Binary Search on sorted array
 * {Array} array
 */

function recursiveBinarySearch(array, low, high, target) {
    if(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(array[mid] === target) {
            return mid;
        }

        if(array[mid] > target) {
            return recursiveBinarySearch(array, low, mid-1, target);
        }

        return recursiveBinarySearch(array, mid + 1, high, target);
    }
    return -1;
}
const array = [1,2,3,40,50,80,110];
console.log('recursiveBinarySearch', recursiveBinarySearch(array, 0, array.length -1, 80));
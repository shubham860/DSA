// Maximum difference between two elements such that larger element appears after the smaller number.
// Time Complexity : O(n)

function maxDifference(array) {
    let maxDiff = Number.MIN_SAFE_INTEGER;
    let minNumber = array[0];

    for (let i=1; i<array.length; i++) {
        if(array[i] - minNumber > maxDiff) {
            maxDiff = array[i] - minNumber;
        }else {
            minNumber = array[i];
        }
    }


    return maxDiff;
}

console.log(maxDifference([7, 9, 5, 1, 13, 2]))
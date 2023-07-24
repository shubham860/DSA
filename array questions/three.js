// Maximum absolute difference of value and index sums.
// Time Complexity : O(n) 
// Given an unsorted array A of N integers. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
// f(i, j) or absolute difference of two elements of an array A is defined as |A[i] – A[j]| + |i – j|,
// where |A| denotes the absolute value of A. 

function maximumAbsoluteDifference(array) {
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;

    for (let i=0; i<array.length; i++) {
            max1 = Math.max(max1, array[i] + i);
            max2 = Math.max(max2, array[i] - i);
            min1 = Math.min(min1, array[i] + i);
            min2 = Math.min(min2, array[i] - i);
    }

    return Math.max(max1 - min1, max2 - min2);
}

console.log(maximumAbsoluteDifference([34, -34, 57, -57]));
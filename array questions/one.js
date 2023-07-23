// Find minimum difference between any two elements
// Time Complexity : O(n * log n) 

function minDifference (array) {
    array = array.sort((a,b) => a-b);
    let minDifference = Number.MAX_VALUE;

    for(let i=0; i<array.length; i++) {
        if(array[i+1] - array[i] < minDifference) {
            minDifference = array[i+1] - array[i];
        }
    }

    return minDifference;
}

console.log('Minimum Difference: ', minDifference([4,2,6,7,1,8]));
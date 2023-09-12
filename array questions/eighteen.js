// Array
// Find continuous subarray with given sum  {1, 4, 20, 3, 10, 5}, sum = 33

function findSubarray(arr, targetSum) {
    let start = 0;
    let currentSum = arr[0];
    
    for (let end = 1; end < arr.length; end++) {

        // If currentSum becomes greater than targetSum, subtract arr[start] from currentSum and increment start
        while (currentSum > targetSum && start < end - 1) {
            currentSum = currentSum - arr[start];
            start++;
        }

        // If currentSum becomes equal to targetSum, return [start, end - 1]
        if (currentSum === targetSum) {
            return arr.slice(start, end);
        }
        
        // Add the current element to currentSum
        if (end < arr.length) {
            currentSum = currentSum + arr[end];
        }
    }

    // If no subarray with the given sum is found, return empty array
    return [];
}

console.log('continuousSubarray', continuousSubarray([1,4,20,3,10,5], 33))
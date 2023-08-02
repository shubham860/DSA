// Find maximum sum of triplets in an array such than i < j < k and a[i] < a[j] < a[k]


function maximumTripletSum(array) {
    let maximumSum = 0;
    let currentSum = 0;
    const smallestElement = Math.min(...array);
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] !== smallestElement) {
            let minNumber = Number.MAX_VALUE;
            let maxNumber = Number.MIN_VALUE;

            for (let j = i - 1; j >= 0; j--) {
                if (array[j] < array[i]) {
                    minNumber = array[j];
                    break;
                }
            }

            for (let k = i + 1; k < array.length; k++) {
                if (array[k] > maxNumber && array[k] > array[i]) {
                    maxNumber = array[k]
                }
            }
            currentSum = minNumber + maxNumber + array[i];
            maximumSum = Math.max(currentSum, maximumSum);
        }
    }
    return maximumSum;
}

console.log(maximumTripletSum([2, 5, 3, 1, 4, 9]))
console.log(maximumTripletSum([1, 2, 3, 4, 5, 6])); // Expected output: 15 (4 + 5 + 6)
console.log(maximumTripletSum([1, 2, 3])); // Expected output: 6 (1 + 2 + 3)
console.log(maximumTripletSum([100, 200, 300, 400, 500, 600])); // Expected output: 1500 (400 + 500 + 600)
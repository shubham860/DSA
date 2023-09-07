// Array
// Rearrange positive and negative numbers with constant extra space
// Order of elements is not important here.

function rearrange(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr
}
const nums = [3,1,-2,-5,2,-4];
rearrange(nums)
console.log(nums);
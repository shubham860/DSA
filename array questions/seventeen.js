// Array
// Rearrange positive and negative numbers with constant extra space
// Order of elements is important here.

function reArrangePosNeg(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        while (nums[i] < 0) 
            i++;
        while (nums[j] >= 0) 
            j--;
        if (i < j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
reArrangePosNeg(arr);
console.log(arr);  // expected output: [-12, -13, -5, -7, -3, -6, 11, 6, 5]
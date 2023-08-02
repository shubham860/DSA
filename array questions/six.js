// Find Maximum value of abs(i – j) * min(arr[i], arr[j]) in an array arr[]

function maxProduct(array) {
    let maxProduct = 0;
    let currentProduct = 0;
    let i=0; j=array.length-1;
    while(i<j) {
        if(array[i] < array[j]) {
            currentProduct = array[i] * Math.abs(i-j);
            i++;
        }else{
            currentProduct = array[j] * Math.abs(i-j);
            j--;
        }
        maxProduct = Math.max(maxProduct, currentProduct);
    }   
    return maxProduct;
}
 
console.log(maxProduct([8, 1, 9, 4])); // Expected Output: 16
console.log(maxProduct([3, 2, 1, 4])); // Expected Output: 6
console.log(maxProduct([5, 5, 5, 5])); // Expected Output: 15
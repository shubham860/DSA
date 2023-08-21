// Array
//  Merge two sorted arrays

// O((n+m)log(n+m)) with O(1) extra space 

function mergeSortedArrays(arr1, arr2) {
    if(arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];
  
    let m = arr1.length;
    let n = arr2.length;
  
    let i = m - 1, j = n - 1, index = m + n - 1;

    while(index >= 0) {
        if(j < 0 || (i >= 0 && arr1[i] > arr2[j])) {
            arr1[index] = arr1[i];
            i--;
        } else {
            arr1[index] = arr2[j];
            j--;
        }
        index--;
    }

    return arr1;

}

const array1 = [5,8,9];
const array2 =  [1,2,4,7,10];
console.log(mergeSortedArrays(array1, array2))
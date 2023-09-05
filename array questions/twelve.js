// merge k sorted arrays.

function merge(arr1, arr2) {
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

function mergeKArrays(listOfArrays) {
    let left=0, right=listOfArrays.length-1;

    if(listOfArrays.length) {
        if(listOfArrays.length === 1) {
            return listOfArrays[0]; 
        }
    
        if(listOfArrays.length === 2) {
            return merge(listOfArrays[0], listOfArrays[1]);
        }
    
        const middle = Math.floor((left+right)/2);
        const leftArray = mergeKArrays(listOfArrays.slice(left, middle+1));
        const rightArray = mergeKArrays(listOfArrays.slice(middle+1, right+1));
        return merge(leftArray, rightArray);
    }else {
        return [];
    }
} 

console.log(mergeKArrays([[1,4,5],[1,3],[2,6,3]]));
// Array
// Merge two sorted arrays

// O(m + n) Time and O(m + n) Extra Space


function mergeSortedArrays(array1, array2) {
   let finalArray=[];
   let i=0, j=0, k=0; 

   while(i<array1.length && j<array2.length) {
    if(array1[i] <= array2[j]) {
        finalArray[k] = array1[i];
        i++;
    }else {
        finalArray[k] = array2[j];
        j++;
    }
    k++;
   }

   while(i<array1.length) {
    finalArray[k] = array1[i];
    i++;
    k++;
   }

   while(j<array2.length) {
    finalArray[k] = array2[j];
    j++;
    k++;
   }

   return finalArray;
}

console.log(mergeSortedArrays([5,8,9], [4,7,8,12,13]));
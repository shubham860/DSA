// Array
// Median of two sorted arrays of same sizes

function medianSortedArray(array1, array2) {
    const finalArray = []
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

    const middleIndex = finalArray.length/2;
    if(finalArray.length % 2 === 0) {
        return (finalArray[middleIndex-1] + finalArray[middleIndex])/2
    }else {
        return finalArray[Math.floor(middleIndex)]
    }
}   



function calculateMedian(array1, array2) {
    return medianSortedArray(array1, array2);
}

console.log(calculateMedian([1,12,15,26,38], [2,13,17,30,45]));
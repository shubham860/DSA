// Array
// Rearrange an sorted array of positive integers in maximum minimum form in constant extra space
// [1 2 3 4 5 6 7 8 9]

function reArrangeMaxMin(array) {
    let minIdx = 0; maxIdx=array.length-1;
    let maxElement = array[array.length-1] + 1;

    for(let i=0; i<array.length; i++) {
        if(i%2==0) {
            array[i] += (array[maxIdx] % maxElement) * maxElement;
            maxIdx--;
        }else {
            array[i] += (array[minIdx] % maxElement) * maxElement;
            minIdx++;
        }
    }

    for(let i=0; i<array.length; i++) {
        array[i] = Math.floor(array[i]/maxElement);
    }
}


const arr = [1,2,3,4,5,6];
reArrangeMaxMin(arr);
console.log(arr)
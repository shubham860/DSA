/**
 * Counting Sort
 * @param {Array} array
 */

function findMinMax(array) {
    let min = array[0];
    let max = array[0];
    for(let i=1; i<array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }else if(array[i] > max) {
            max = array[i];
        }
    };
    return [min, max];
}

function countingSort(array) {
    const [min, max] = findMinMax(array);
    let count = new Array(max - min + 1).fill(0); 
    console.log(count);
    let output = new Array(array.length);
    
    // count the occurrence of each element in array
    for (let i = 0; i < array.length; i++) {
        count[array[i] - min]++;
    }

    console.log('count 2', count)
    
    // store count[i] = count[i] + count[i-1]
    for(let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    console.log('count', count)
    
    // store number occurrence of each element in array
    for (let i = array.length - 1; i >= 0; i--) {
        output[--count[array[i]-min]] = array[i];
    }
    
    return output;
}

const array = [3, 9, 5, 8];

console.log('countingSort:', countingSort(array));
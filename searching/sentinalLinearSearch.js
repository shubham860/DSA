/**
 * Sentinal Linear Search
 * {Array} array
 */

function sentinalLinearSearch(array, target) {
    const last = array[array.length - 1];
    array[array.length - 1] = target;
    let i = 0;
    while(array[i] !== target) {
        i++;
    }
    array[array.length - 1] = last;
    if(i < array.length - 1 || array[array.length - 1] === target) {
        return i;
    }
    return -1;
}

console.log('sentinalLinearSearch:', sentinalLinearSearch([1, 2, 3, 4, 5], 3));
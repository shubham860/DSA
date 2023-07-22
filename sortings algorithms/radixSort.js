/**
 * Radix Sort
 * @param {Array} array
 */

function digitCount(number) {
    if(number === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(number))) + 1;
};

function getDigit(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
};

function mostDigits(nums) {
    let maxDigit = 0;
    for (let i of nums) {
        maxDigit = Math.max(maxDigit, digitCount(i));
    }
    return maxDigit;
};

function radixSort(array) {
    const maxDigitCount = mostDigits(array);
    for(let i=0; i<maxDigitCount; i++) {
        let digitBucket = Array.from({length: 10}, () => []);

        for(let j=0; j<array.length; j++) {
            let digit = getDigit(array[j], i);
            digitBucket[digit].push(array[j]);
        }

        array = [].concat(...digitBucket);
    }

    return array;
}

console.log('Radix sort', radixSort([222, 1, 43, 5, 29, 42]));
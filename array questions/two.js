// Find maximum difference between any two elements
// Time Complexity : O(n)

function maxDifference(array) {
   let max= Number.MIN_SAFE_INTEGER, min=Number.MAX_SAFE_INTEGER;
   for(let i=0; i<array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }else if(array[i] < min) {
            min = array[i];
        }
   }

   return max - min;
}

console.log('Maximum Difference: ', maxDifference([4,3,6,7,0,8]));
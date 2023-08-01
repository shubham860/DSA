// Given an array arr[], find the maximum j – i such that arr[j] > arr[i].

function maxIndexDifference(array) {
    let maxDifference = 0;
    let i=0; j=array.length-1;
    while(i<=j){
        if(j-i > maxDifference) {
            if(array[j] >= array[i]) {
                maxDifference = j - i;
                i++;
                j=array.length - 1;
            } else {
                j--;
            }
        }else {
            j--;
        }
    }
    return maxDifference;
}

console.log(maxIndexDifference([34, 8, 10, 3, 2, 80, 30, 33, 1]));
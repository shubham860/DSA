// Maximum value of XOR among all triplets of an array

function maximumXorTriplet(array){
    let xorSet = new Set();

    for(let i=0; i<array.length; i++) {
        for(j=i; j<array.length; j++) {
            xorSet.add(array[i] ^ array[j]);
        }
    }

    let maxXorTriplet=0;

    for(let i of xorSet.values()) {
       for(let j=0; j<array.length; j++) {
        console.log(maxXorTriplet, i, array[j],  i^array[j])
        maxXorTriplet = Math.max(maxXorTriplet, i^array[j]);
       }
    }
    return maxXorTriplet;
}

console.log(maximumXorTriplet([1, 3, 8, 15]))
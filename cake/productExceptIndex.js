function getProductsOfAllIntsExceptAtIndex(intArray) {
    
    if (intArray.length < 2) throw new Error("invalid input")

    // initialize and output array
    // create an array of products of each subarray from start to end
    // create an array of products of each subarray from end to start
    // at each index multilply the appropriate subarray to find the product

    let products = new Array(intArray.length).fill(1);
    let increasingProducts = new Array(intArray.length).fill(1);
    let decreasingProducts = new Array(intArray.length).fill(1);
    increasingProducts[0] = intArray[0];
    decreasingProducts[intArray.length - 1] = intArray[intArray.length - 1]

    for (let i = 1; i < intArray.length; i++) {
        // populate our inc/dec prod arrays
        let d = intArray.length - i - 1; 
        let lastInc = increasingProducts[i - 1];
        let lastDec = decreasingProducts[d + 1];
        increasingProducts[i] = intArray[i] * lastInc;
        decreasingProducts[d] = intArray[d] * lastDec;
    }
    
    products[0] = decreasingProducts[1];
    products[products.length - 1] = increasingProducts[products.length - 2];

    for (let i = 1; i < intArray.length - 1; i++) {

        let leftProduct = increasingProducts[i - 1];
        let rightProduct = decreasingProducts[i + 1];
        
        products[i] =  leftProduct * rightProduct;
    }


    return products;
}


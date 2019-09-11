function productSum(array, depth = 1) {
	// initialize a sum
	// add a parameter for nested value which defaults to 1
	// add nums to the array as we reach them multiplied by
	// the depth, if we reach an array call our function recursively 
	// and increment the depth
	
	let sum = 0;
	
	for (const el of array) {
		if (Array.isArray(el)) {
			sum += productSum(el, depth + 1)
		} else {
			sum += el;
		}
	}
	
	return sum * depth;
}

console.log(productSum([[[[[5]]]]]))

function twoNumberSum(array, targetSum) {


  let hash = new Set();
	for (const num of array) {
		let diff = targetSum - num;
		
        if (hash.has(diff)) {
			return [Math.min(diff, num), Math.max(diff, num)]
		}		
		if (!hash.has(num)) {
			hash.add(num)	
        } 
	}
    console.log(hash)
	return [];
}

console.log(twoNumberSum([1,2,3,4,5,6], 8))

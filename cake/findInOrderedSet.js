// Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?

const findInOrderedSet = (array, target) => {
	let floor = 0;
	let ceiling = array.length - 1;	

	while (floor + 1 < ceiling) {
		let range = ceiling - floor;
		let halfRange = Math.floor(range / 2);
		let searchIdx = floor + halfRange;
		let searchVal = array[searchIdx];

		if (searchVal === target) return true;
		if (searchVal < target) {
			ceiling = searchIdx - 1;
		} else {
			floor = searchIdx + 1;	
		}
	}
	return false;
}

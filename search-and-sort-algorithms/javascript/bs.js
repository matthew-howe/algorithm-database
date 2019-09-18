const BS = (target, numbers) => {
	let floor = -1
	let ceiling = numbers.length

	while (floor + 1 < ceiling) {
		const range = ceiling - floor
		const halfRange = Math.floor(range / 2)
		const middleIdx = floor + halfRange
		const middleVal = numbers[floor + halfRange]

		if (middleVal === target) return true;
		if (middleVal > target) ceiling = middleIdx
		else floor = middleIdx
	}

	return false
}

console.log(BS(9, [1, 2, 4, 5, 6, 7, 8, 10, 16]))
console.log(BS(9, [1, 2, 4, 5, 6, 7, 8, 9, 16]))
console.log(BS(2, [1, 2, 4, 5, 6, 7, 8, 9, 16]))
console.log(BS(-1, [1, 2, 4, 5, 6, 7, 8, 9, 16]))

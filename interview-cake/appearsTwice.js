// I have an array of n + 1n+1 numbers. Every number in the range 1..n1..n appears once except for one number that appears twice.

// Write a function for finding the number that appears twice.

function findRepeat(numbers) {
	if (numbers.length < 2) {
		throw new Error(`Finding duplicate requires at least two numbers`);
	}

	const n = numbers.length - 1;
	const sumWithoutDuplicate = (n * n + n) / 2;
	const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);

	return actualSum - sumWithoutDuplicate;
}

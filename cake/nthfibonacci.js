// write a function the takes an integer n and returns the nth fibonacci number

// o(2^N)
const fibRecursive = (N) =>{
	if (N === 0) {
		return 0
	} else if (N === 1) {
		return 1
	} else {
		return fib(N - 2) + fib(N - 1);
	}
}

// O(n)
const fibIterative = (n) => {

	if (n < 0) throw new Error('Index was negative. No  negative index in a series.');
	if (n === 0 || n === 1) return n;

	let lastlast = 0;
	let last = 1;
	let current;

	for (let i = 1; i < n; i++) {
		current = lastlast + last;
		lastlast = last;
		last = current;
	}

	return current;

}

console.log(fibIterative(2));

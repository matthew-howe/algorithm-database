function caesarCipherEncryptor(string, key) {
	let abc = 'abcdefghijklmnopqrstuvwxyz';
	
	let output = '';
	for (let i = 0; i < string.length; i++) {
		let current = abc.indexOf(string[i])	
		let shiftIdx = (i + key) % 26
		let shifted = abc[shiftIdx]	
		output += shifted;
	}
	return output;
}

console.log(caesarCipherEncryptor('xyz', 2))

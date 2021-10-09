
// u have a function rand7() that generates a random integer from 1 to 7. Use it to write a function rand5() that generates a random integer from 1 to 5.

// rand7() returns each integer with equal probability. rand5() must also return each integer with equal probability.

function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
	const result = rand7();
	return result <= 5 ? result : rand5();
}


for (let i = 0; i < 10; i++) {
  console.log(rand5());
}

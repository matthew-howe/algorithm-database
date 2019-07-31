// You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

// rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.


function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
	while(true) {
		const roll1 = rand5();
		const roll2 = rand5();

		const outcomeNumber = (roll1-1) * 5 + (roll2-1) + 1;

		if (outcomeNumber > 21) continue;

		return outcomeNumber % 7 + 1;
	}
}


for (let i = 0; i < 14; i++) {
  console.log(rand7());
}

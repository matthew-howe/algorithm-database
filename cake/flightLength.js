// O(n^2)
const flyer = (flightLength, movieLengths) => {
	const N = movieLengths.length;
	for (let i=0; i<N; i++) {
		for (let j=i+1; j<N; j++) {
			if (movieLengths[i] + movieLengths[j] === flightLength) {
				return true;
			}
		}
	}
	return false;
}

// O(n)
const flyer2 = (flightLength, movieLengths) => {
	const hash = {}
	for (const movie of movieLengths) {
		if (!hash[movie]) {
			hash[movie] = {
				length: movie,
				count: 1
			}
		} else {
			hash[movie].count++
		}
	}
	
	for (const movie of movieLengths) {
		const diff = flightLength - movie;
		if (diff in hash) {
			if (movie !== diff) return true;
			else if (hash[movie].count > 1) return true;
		}
	}

	return false;

}


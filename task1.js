function sumNumbersInString(text) {
	const numbers = text.match(/\d+/g) || [];

	return numbers.reduce((sum, number) => sum + Number(number), 0);
}

console.log(sumNumbersInString("foo8bar8cat2tc2"));

const createGrid = (row, col) => {
	let start = 1;

	let result = '';

	while (start <= row * col) {
		result += `${Array.from({ length: col }, (_, i) => i + start).join(' ')}\n`;
		start += col;
	}
	return result;
};

console.log(createGrid(32, 32));

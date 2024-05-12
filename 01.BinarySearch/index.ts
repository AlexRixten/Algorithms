const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //sorted!
const searchedItem = 6;

const binarySearch = (arr: number[], element: number) => {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const middle = Math.ceil((start + end) / 2);
		const guess = arr[middle];

		if (guess === element) {
			return middle;
		}

		if (guess > element) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
	return null;
};

console.log(binarySearch(arr, searchedItem));

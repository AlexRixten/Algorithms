var arr = [1, 5, 3, 6, 10, 8, 7, 2, 9, 0, 4];

function findSmallest(arr) {
	var smallest = arr[0];
	var smallestIndex = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}
function selectionSort(arr) {
	var newArr = [];
	while (arr.length > 0) {
		var smallestIndex = findSmallest(arr);
		newArr.push(arr.splice(smallestIndex, 1)[0]);
	}
	return newArr;
}
console.log(selectionSort(arr));

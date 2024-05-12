var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //sorted!
var searchedItem = 6;
var binarySearch = function (arr, element) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var middle = Math.ceil((start + end) / 2);
        var guess = arr[middle];
        if (guess === element) {
            return middle;
        }
        if (guess > element) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    return null;
};
console.log(binarySearch(arr, searchedItem));

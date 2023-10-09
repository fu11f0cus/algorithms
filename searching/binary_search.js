let array = [1, 3, 4, 2, 8, 6, 4, 6, 12, 9];

function binarySearch(arr, el) {
    let start = -1;
    let end = arr.length;
    arr.sort((a, b) => a - b);

    while(end - start > 1) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === el) return mid;

        if (arr[mid] > el) {
            end = mid;
        }
        else {
            start = mid;
        }
    }
    return -1;
}

console.log(binarySearch(array, 12));
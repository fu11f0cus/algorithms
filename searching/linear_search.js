let array = [1, 2, 3, 2, 11, 4, 6, 7, 3, 5];

function linear_search(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}

console.log(linear_search(array, 11));
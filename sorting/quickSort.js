let array = [1, 2, 3, 34, 12, 3, 1, 5, 4, 6];

// for (let i = 0; i < 100; i++) {
//     array.push(i);
// }

function qSort(arr) {
    if (arr.length <= 1)
        return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...qSort(left), pivot, ...qSort(right)];
}

function isHappy(n) {
    let array = ("" + n).split("").map(Number);
    array.forEach((el, i, arr) => arr[i] = Math.pow(el, 2));
    let sum = 0;
    array.forEach(el => sum += el);
    while (sum !== 1) {
        console.log(sum);
        isHappy(sum);
    }
    if (sum == 1) {
        return true;
    }
}

console.log(isHappy(2));
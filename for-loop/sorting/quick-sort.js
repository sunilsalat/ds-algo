const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const middle = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }

        if (arr[i] > pivot) {
            right.push(arr[i]);
        }

        if (arr[i] === pivot) {
            middle.push(arr[i]);
        }
    }

    return quickSort(left).concat(middle, quickSort(right));
};

console.log(quickSort([-20, 5, 4, -1, 4, 20, 6, 3, 2, 9, 7]));

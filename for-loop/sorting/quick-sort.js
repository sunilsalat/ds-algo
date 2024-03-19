const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const middle = [];

    console.log(pivot);

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

    const result = [...quickSort(left), ...middle, ...quickSort(right)];

    return result;
};

console.log(quickSort([4, -1, 34, 9, -9, 103]));

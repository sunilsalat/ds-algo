const binarySearchRecursion = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    let midTerm = arr[Math.floor(arr.length / 2)];

    if (value === midTerm) {
        return true;
    }

    if (arr.length === 2) {
        return false;
    }

    if (value > midTerm) {
        start = arr.indexOf(midTerm);
        end = arr.length;
    } else {
        start = 0;
        end = arr.indexOf(midTerm);
    }

    return binarySearchRecursion(arr.slice(start, end + 1), value);
};

console.log(
    binarySearchRecursion(
        [1, 3, 5, 6, 9, 14, 29, 57, 89, 100, 102, 104, 198, 216],
        29
    )
);

const binarySearch = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            return true;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};

console.log(binarySearch([1, 2, 5, 6, 9, 14, 17, 19, 20], 4));

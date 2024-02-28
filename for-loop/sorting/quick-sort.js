let count = 0;

// nlog(n)

const produceArr = () => {
    const arr = [];
    for (let i = 1; i <= 1100; i++) {
        arr.push(i);
    }

    return arr;
};

// console.log(produceArr());

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
            count += 1;
            middle.push(arr[i]);
        }
    }

    const result = [...quickSort(left), ...middle, ...quickSort(right)];

    return result;
};

console.log(quickSort(produceArr()));
console.log(count);

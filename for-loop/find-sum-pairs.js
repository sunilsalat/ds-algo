const arr = [1, 2, 3, 6, 4, -9, 5, 4, 3, 4, 4, 17];

const findSumPairs = (arr, value) => {
    const observed = [];
    const sumPairs = [];
    for (let i = 0; i <= arr.length; i++) {
        const targetValue = value - arr[i];

        if (observed.includes(targetValue)) {
            sumPairs.push([targetValue, arr[i]]);
        }
        observed.push(arr[i]);
    }

    return sumPairs;
};

console.log(findSumPairs(arr, 8));

// if aksed for distinct pairs
const findDistinctSumPairs = (arr, value) => {
    const observed = new Set();
    const sumPairs = new Set();

    for (const num of arr) {
        const complement = value - num;
        if (observed.has(complement)) {
            sumPairs.add(JSON.stringify([num, complement]));
        }
        observed.add(num);
    }

    return Array.from(sumPairs).map((item) => JSON.parse(item));
};

console.log(findDistinctSumPairs([1, 2, 3, 6, 4, -9, 5, 4, 3, 4, 4, 17], 8));

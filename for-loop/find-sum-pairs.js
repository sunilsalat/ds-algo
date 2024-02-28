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
const findDistinctSumPairs = (arr, targetSum) => {
    const seenNumbers = new Set();
    const distinctPairs = new Set();

    for (const num of arr) {
        const complement = targetSum - num;
        if (seenNumbers.has(complement)) {
            distinctPairs.add(JSON.stringify([num, complement]));
        }
        seenNumbers.add(num);
    }

    return Array.from(distinctPairs).map((item) => JSON.parse(item));
};

console.log(findDistinctSumPairs([1, 2, 3, 6, 4, -9, 5, 4, 3, 4, 4, 17], 8));

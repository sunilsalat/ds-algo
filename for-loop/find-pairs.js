const arr = [1, 2, 3, 6, 4, -9, 5, 4, 3, 4, 17];

const findSumPairsOne = (arr, value) => {
    const target = [];
    const output = [];
    for (let i = 0; i <= arr.length; i++) {
        const targetValue = value - arr[i];

        if (target.includes(targetValue)) {
            output.push([targetValue, arr[i]]);
        } else {
            target.push(arr[i]);
        }
    }

    return output;
};

// console.log(findSumPairsOne(arr, 8));

const findSumPairsTwo = (arr, value) => {
    const observed = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === value) {
                if (
                    !observed[`${arr[i]} - ${arr[j]}`] &&
                    !observed[`${arr[j]} - ${arr[i]}`]
                ) {
                    result.push([arr[i], arr[j]]);
                    observed[`${arr[i]} - ${arr[j]}`] = [arr[i], arr[j]];
                }
            }
        }
    }

    return result;
};

console.log(findSumPairsTwo(arr, 8));

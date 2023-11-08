const arr = [1, 2, 3, 6, 9, 4, 5, 4, 3];

const findSumPairs = (arr, value) => {
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

console.log(findSumPairs(arr, 9));

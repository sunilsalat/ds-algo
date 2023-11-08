const findDupes = (arr) => {
    const len = arr.length;
    const observed = {};
    const duplicates = [];
    for (let i = 0; i < len; i++) {
        if (observed[arr[i]]) {
            if (observed[arr[i]] === 1) {
                duplicates.push(arr[i]);
            }
            observed[arr[i]] = observed[arr[i]] + 1;
        } else {
            observed[arr[i]] = 1;
        }
    }

    return duplicates;
};

console.log(findDupes([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]));

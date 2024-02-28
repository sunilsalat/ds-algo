const findDupes = (arr) => {
    const observed = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (observed[arr[i]]) {
            duplicates.push(arr[i]);
        }

        observed[arr[i]] = observed[arr[i]] ? observed[arr[i]] + 1 : 1;
    }

    return duplicates;
};

console.log(findDupes([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]));

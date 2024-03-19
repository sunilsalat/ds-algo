const main = (arr) => {
    let n = arr.length;
    let res = [];

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[i] === 0) {
                    console.log(arr[i], arr[j], arr[i]);
                    res.push([arr[i], arr[j], arr[i]]);
                }
            }
        }
    }

    return res;
};

console.log(main([0, -1, 2, -3, 1]));

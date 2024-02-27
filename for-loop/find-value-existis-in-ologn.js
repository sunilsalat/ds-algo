const main = (arr, value) => {
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

    return main(arr.slice(start, end + 1), value);
};

console.log(main([1, 3, 5, 6, 9, 14, 29, 57, 89, 100, 102, 104, 198, 216], 29));

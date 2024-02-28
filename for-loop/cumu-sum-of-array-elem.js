const cummSumOfArrayElem = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = arr[i] + arr[i + 1];
    }

    return arr;
};

console.log(cummSumOfArrayElem([1, 2, 5, 7, 9]));

const cummSumOfArrayElem = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        list[i + 1] = list[i] + list[i + 1];
    }

    return list;
};

console.log(cummSumOfArrayElem([1, 2, 5, 7, 9]));

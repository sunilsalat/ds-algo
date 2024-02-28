const findMissingNum = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 !== list[i + 1]) {
            return list[i] + 1;
        }
    }
};

console.log(findMissingNum([1, 2, 3, 4, 5, 7, 8, 9]));

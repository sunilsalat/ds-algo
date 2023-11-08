const findMissingNum = (list) => {
    const len = list.length;
    let temp = 0;
    for (let i = 0; i < len; i++) {
        if (list[i] - temp > 1) {
            return list[i] - 1;
        }

        temp = list[i];
    }
};

console.log(findMissingNum([1, 2, 3, 4, 5, 7, 8, 9]));

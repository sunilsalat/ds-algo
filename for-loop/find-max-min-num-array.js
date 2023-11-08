const findMaxMinNumInArray = (list) => {
    let min = list[0];
    let max = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }

        if (list[i] > max) {
            max = list[i];
        }
    }

    return { min, max };
};

console.log(findMaxMinNumInArray([1, 2, 400, 100, 3]));

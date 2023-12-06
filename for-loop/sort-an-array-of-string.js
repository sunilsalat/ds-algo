var a = ["rat", "mat", "fat", "at", "greet"];

const sortArray = (list) => {
    const len = list.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((list[i], list[j])) {
                if (list[i].charAt(0) > list[j].charAt(0)) {
                    let temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
    }

    console.log({ list });
    console.log("a" > "b"); // false
    console.log("b" > "a"); // true
    return list;
};

sortArray(a);

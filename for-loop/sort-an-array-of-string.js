var a = ["rat", "mat", "fat", "at", "greet"];

const sort = { a: 1, f: 5, m: 15, r: 19, g: 6 };

const sortArray = (list) => {
    const len = list.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((list[i], list[j])) {
                let firstElem = sort[list[i].charAt(0)];
                let secondElem = sort[list[j].charAt(0)];
                if (firstElem > secondElem) {
                    let temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
    }

    console.log({ list });

    return list;
};

sortArray(a);

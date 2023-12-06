const t1 = (list) => {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (list[i] > list[j]) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }

    console.log(list);
};

t1([23, 3, 4, 1, 77, 8, 2]);

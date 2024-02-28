const reverseArray = (list) => {
    let len = list.length;
    for (let i = 0; i < len / 2; i++) {
        temp = list[i];
        list[i] = list[len - i - 1];
        list[len - i - 1] = temp;
    }
    return list;
};

reverseArray([1, 2, 3, 4, 5, 6]);

const t = (list) => {
    let len = list.length;
    for (let i = 0; i < len / 2; i++) {
        temp = list[i];
        list[i] = list[len - i - 1];
        list[len - i - 1] = temp;
    }
    console.log(list);
    return list;
};

t([1, 2, 3, 4, 5, 6]);

// const t = () => {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1);
//     }
// };

// t();

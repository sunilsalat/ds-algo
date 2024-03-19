const sort = (list) => {
    let i = 0,
        j = 0;
    while (i < list.length) {
        if (list[i] === 0) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
            j++;
        }
        i++;
    }
    return list;
};

// const sort = (list) => {
//     for (let i = 0; i < list.length; i++) {
//         for (let j = i + 1; j < list.length; j++) {
//             if (list[i] > list[j]) {
//                 const temp = list[i];
//                 list[i] = list[j];
//                 list[j] = temp;
//             }
//         }
//     }
//     return list;
// };

console.log(sort([1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0]));
console.log(sort([0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0]));
// console.log(sort([1, 1, 0, 1, 0]));

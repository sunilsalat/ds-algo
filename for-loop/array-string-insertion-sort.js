// var a = ["rat", "cat", "card", "cargo", "mat", "fat", "at", "greet"];

// const sortArray = (list) => {
//     const len = list.length;

//     const compareWords = (x, y) => {
//         const wordlength = x.length > y.length ? y.length : x.length;
//         let res;
//         for (let i = 0; i < wordlength; i++) {
//             if (x.charAt(i) === y.charAt(i)) {
//                 continue;
//             } else {
//                 if (x.charAt(i) > y.charAt(i)) {
//                     res = true;
//                 } else {
//                     res = false;
//                 }
//                 break;
//             }
//         }

//         return res;
//     };

//     let swapped = false;

//     for (let i = len - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if ((list[i], list[j])) {
//                 if (compareWords(list[j], list[j + 1])) {
//                     let temp = list[j];
//                     list[j] = list[j + 1];
//                     list[j + 1] = temp;
//                     swapped = true;
//                 }
//             }
//         }

//         if (!swapped) {
//             break;
//         }
//     }

//     console.log({ list });

//     return list;
// };

// sortArray(a);

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

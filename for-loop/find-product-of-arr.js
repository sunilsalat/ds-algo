/*
Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i].

Note: Solve it without the division operator in O(n)
 time.

Example :

Input: arr[]  = {10, 3, 5, 6, 2}
Output: prod[]  = {180, 600, 360, 300, 900}
3  5  6 * 2 product of other array
elements except 10 is 180
10  5  6 * 2 product of other array
elements except 3 is 600
10  3  6 * 2 product of other array
elements except 5 is 360
10  3  5 * 2 product of other array
elements except 6 is 300
10  3  6 * 5 product of other array
elements except 2 is 900


*/

const getProductOfArray = (arr) => {
    let res = [];
    let cumm = 1;

    for (let i = 0; i < arr.length; i++) {
        cumm *= arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        res.push(cumm / arr[i]);
    }

    return res;
};

console.log(getProductOfArray([10, 3, 5, 6, 2]));

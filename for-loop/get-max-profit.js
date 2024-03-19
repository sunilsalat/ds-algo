/*
Input: prices[] = {7, 1, 5, 3, 6, 4}
Output: 5
Explanation:
The lowest price of the stock is on the 2nd day, i.e. price = 1. Starting from the 2nd day, the highest price of the stock is witnessed on the 5th day, i.e. price = 6.
Therefore, maximum possible profit = 6 – 1 = 5.

Input: prices[] = {7, 6, 4, 3, 1}
Output: 0
*/

const getMaxProfit = (arr) => {
    let buy = arr[0];
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        if (buy > arr[i]) {
            buy = arr[i];
        }

        if (arr[i] - buy > maxProfit) {
            maxProfit = arr[i] - buy;
        }
    }
    return maxProfit;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4, 9]));

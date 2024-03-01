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
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // if last element is min return 0 profit
        if (min === arr[arr.length - 1]) {
            return 0;
        }

        if (arr[i] < min) {
            min = arr[i];
            max = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max - min;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4, 9]));

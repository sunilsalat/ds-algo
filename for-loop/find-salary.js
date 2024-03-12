/* Write a program, Selena wants to save money for his first car.
She puts money in the ABC bank every day. She starts by putting in $1 on Monday, the first day.
 Every day from Tuesday to Sunday, she will put in $1 more than the day before.
 On every subsequent Monday, she will put in $1 more than the previous Monday. Given n,
  return the total amount of money Selena will have in the ABC bank at the end of the nth day.
 */

const getAmount = (n) => {
    let t = 1;
    let p = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + p;
        p += 1;

        if (i % 7 === 0) {
            t = t + 1;
            p = t;
        }
    }

    return sum;
};

console.log(getAmount(49));

/// constant time result
const calculateCompletePart = (n) => {
    const res = 28 * n + (7 * ((n * (n + 1)) / 2) - 7 * n);
    return res;
};

const calculateRestPart = (b, c) => {
    let res = 0;
    for (let i = 0; i < b; i++) {
        let t = c + i;
        res += t;
    }
    return res;
};

const getSum = (n) => {
    // n is term
    // a is complete 7s
    // b is rest part of salary
    // c is counter for monday initialization
    let a = Math.floor(n / 7);
    let b = n % 7;
    let c = a + 1;

    const compPart = calculateCompletePart(a);
    const restPart = calculateRestPart(b, c);
    return compPart + restPart;
};

console.log(getSum(5));
// console.log(calculateCompletePart(4))
// console.log(calculateRestPart(4, 5))

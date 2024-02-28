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

console.log(getAmount(14));

function isPerfectNum(n) {
    let res = 1;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            res += n / i;
        }
    }

    if (res === n) {
        return true;
    }

    return false;
}
// 1, 6, 28 are perfect num as their divisor are perfect sum 1+2+3=6
console.log(isPerfectNum(4));

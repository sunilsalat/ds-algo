const isPrimeRec = (num, divisor = 2) => {
    if (num <= 1) {
        return false; // 0, 1 are not prime
    }

    if (divisor > Math.sqrt(num)) {
        return true;
    }

    if (num % divisor === 0) {
        return false;
    }

    return isPrimeRec(num, (divisor += 1));
};

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const callee = (num) => {
    console.log({ rec: isPrimeRec(num) });
    console.log({ nonRec: isPrime(num) });
};

callee(12);

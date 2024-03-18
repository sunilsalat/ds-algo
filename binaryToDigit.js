let sum = 0;
const binaryToDigit = (bin, c = 0) => {
    if (bin === 0) {
        return sum;
    }

    sum += Math.pow(2, c) * (bin % 10);
    return binaryToDigit(Math.floor(bin / 10), (c += 1));
};

console.log(binaryToDigit(10111));

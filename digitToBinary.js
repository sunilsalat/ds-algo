let sum = 0;

const digitToBinary = (decimal_number) => {
    if (decimal_number == 0) return 0;
    return (
        (decimal_number % 2) +
        10 * digitToBinary(Math.floor(decimal_number / 2))
    );
};

console.log(digitToBinary(23));

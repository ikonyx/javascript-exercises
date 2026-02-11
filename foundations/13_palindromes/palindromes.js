const palindromes = function (string) {
    const newString = string
    .toLowerCase()
    .split('')
    .filter(char => /[^\W_]/.test(char))
    .join('');

    const reversedString = newString.split('').reverse().join('');
    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

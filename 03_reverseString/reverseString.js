const reverseString = function(string) {
    let letters = [];
    let reversedString = "";
    for (let i=0; i<string.length; i++) {
        letters.unshift(string[i]);
    }
    for (letter of letters) {
        reversedString += `${letter}`;
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

const fibonacci = function(num) {
    if (num < 0) { return "OOPS"};

    let array = [0,1];
    for (i=0; i<num; i++) {
        let n = array.at(-1) + array.at(-2);
        array.push(n);
    }
    return array.at(-2);
};

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(n, m) {
    if (n<0 || m<0) { return "ERROR"};
    if (typeof(n,m) !== "number") { return "ERROR"};
    if (n != Math.floor(n) || m != Math.floor(m)) { return "ERROR"};
    if (n>m) { 
        let p=m;
        m=n;
        n=p;
    }

    
    let sum =0;
    for (i=n; i<=m; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

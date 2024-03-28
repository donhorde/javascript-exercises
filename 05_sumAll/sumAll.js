const sumAll = function(start, end) {
    let result = 0;
    if (start > end) {
        let inter = start;
        start = end;
        end = inter;
    }
    if (start < 0 || end < 0 || typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    }
    for (let i = start; i<=end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

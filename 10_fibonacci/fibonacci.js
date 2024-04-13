const fibonacci = function(input) {
 let position = Number(input);
 if (position == 0) {
    return 0;
 } else if (position < 1 || position !== position) {
    return 'OOPS';
 } else {
    let first = 0;
    let second = 1;
    let interim = 0;
    for (let i = 1; i < position; i++) {
        interim = first+second;
        first = second;
        second = interim;
    };
    return second;
 };
};

// Do not edit below this line
module.exports = fibonacci;
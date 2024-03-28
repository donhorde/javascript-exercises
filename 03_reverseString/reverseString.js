const reverseString = function(string) {
    let stringArray = [];
    for (letter of string) {
        stringArray.push(letter);
    }
    stringArray = stringArray.reverse();
    stringArray = stringArray.join("");
    return stringArray;
};

// Do not edit below this line
module.exports = reverseString;

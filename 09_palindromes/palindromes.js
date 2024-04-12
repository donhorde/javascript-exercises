

const palindromes = function (string) {
    let lowercase = string.toLowerCase();
    const pattern = /\w/g;
    let lettersArray = lowercase.match(pattern);
    let reversed = lettersArray.slice().reverse().join('');
    let original = lettersArray.join('');
    return (original === reversed);
};

// Do not edit below this line
module.exports = palindromes;

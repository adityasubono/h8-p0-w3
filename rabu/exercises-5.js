function palindrome(kata) {
    var trimedStr = kata.replace(/\s/g, '');
    if (trimedStr == trimedStr.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
    // code goes here
    return kata;

}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
function palindrome(kata) {
    // you can only write your code here!
    var tamp = ''
    for (var i = kata.length - 1; i >= 0; i--) {
        tamp += kata[i];
    }
    if (kata == tamp) {
        console.log('true')
    } else {
        console.log('false')
    }
}
// TEST CASES
palindrome('katak'); // true
palindrome('blanket'); // false
palindrome('civic'); // true
palindrome('kasur rusak'); // true
palindrome('mister'); // false
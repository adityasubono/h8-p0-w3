//balik kata
function balikKata(kata) {
    let reverse = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        reverse += kata[i];
    }
    return reverse;
}

// TEST CASES
console.log(balikKata('Hello World !')); // sredoC dna dlroW olleH
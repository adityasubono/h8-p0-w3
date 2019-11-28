function pasanganTerbesar(num) {
    // you can only write your code here!
    var arr = num.toString();
    var terbesar = '0';
    for (var i = 0; i < arr.length; i++) {
        if (terbesar < arr[i] + arr[i + 1]) {
            terbesar = arr[i] + arr[i + 1];
        }
    }
    return terbesar;
}



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
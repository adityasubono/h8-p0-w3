function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var selisih = [];
    var benar = 0;
    if (arr[0] < arr[1]) {
        for (var a = 0; a < (arr.length - 1); a++) {
            selisih += arr[a + 1] / arr[a];
            if (selisih.length > 1 && selisih[a] === selisih[a - 1]) {
                benar += 1;
            }
        }
        return benar === (selisih.length - 1);
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
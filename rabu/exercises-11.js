function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var temp = 0;
    var patokan = arr[1] - arr[0];
    var a
    //console.log(patokan)
    for (var i = 0; i < arr.length - 1; i++) {
        temp = arr[i + 1] - arr[i]
        if (patokan == temp) {
            //console.log('true', patokan, temp);
            a = true;
        } else {
            a = false;
            // console.log('false', patokan, temp);
            break;
        }

    }
    return a
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
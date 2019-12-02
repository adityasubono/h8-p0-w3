function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var angka = [
        [],
        [],
        []
    ];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            angka[2].push(arr[i])
            //console.log(angka[2])
        } else if (arr[i] % 2 == 1) {
            angka[1].push(arr[i])
            //console.log(angka[1])
        } else if (arr[i] % 2 == 0) {
            angka[0].push(arr[i])
            // console.log(angka[0])
        }
    }
    console.log(angka)
}

// TEST CASES
mengelompokkanAngka([2, 4, 6]); // [ [2, 4], [], [6] ]
mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
mengelompokkanAngka([100, 151, 122, 99, 111]); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
mengelompokkanAngka([]); // [ [], [], [] ]
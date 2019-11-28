function targetTerdekat(arr) {
    var target_o = [];
    var target_x = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            target_x.push(i);
        }
        if (arr[i] === 'o') {
            target_o.push(i);
        }
    }

    //console.log(target_x);
    //console.log(target_o);
    if (target_x.length === 0) { // jika x tidak ditemukan
        return 0;
    } else {
        if (target_x[0] < target_o[0]) { //
            return Math.abs(target_x[target_x.length - 1] - target_o[0]);
        } else {
            return Math.abs(target_o[target_o.length - 1] - target_x[0]);
        }
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
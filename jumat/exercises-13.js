function targetTerdekat(arr) {
    // you can only write your code here!
    var temp_o = [];
    var temp_x = [];
    for (var i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if (arr[i] === 'o') {
            temp_o.push(i)
            //console.log(' o ',temp_o)
        } else if (arr[i] === 'x') {
            temp_x.push(i)
            // console.log(' x ',temp_x)
            //break;
        }
    }

    if (temp_x.length === 0) {
        console.log('0');
    } else if (temp_x[0] < temp_o[0]) {
        console.log(Math.abs(temp_x[temp_x.length - 1] - temp_o[0]))
    } else {
        console.log(Math.abs(temp_o[temp_o.length - 1] - temp_x[0]))
    }

    return
    //console.log('jarak terpendek x = ',temp_x);
}

// TEST CASES
targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']); // 3
targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']); // 4
targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']); // 1
targetTerdekat([' ', ' ', 'o', ' ']); // 0
targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']); // 2
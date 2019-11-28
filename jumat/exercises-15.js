function groupAnimals(animals) {
    var tampung = [
        []
    ];
    //console.log(tampung[0])
    //console.log('var tampung sebelum di push')
    var a = 0;
    animals.sort(); // menyusun kata pertama sesuai abjad outputnya anoa, ayam, cacing, kancil, kuda

    tampung[0].push(animals[0]); // memasukkan binatang pertama yaitu anoa ke tampung menjadi [['anoa']]
    //console.log(tampung[0])
    //console.log('var tampung sesudah di push')
    //console.log('=====LOOPING FOR=====')
    for (var i = 1; i < animals.length; i++) {
        //console.log(animals[i] + ' ' + tampung[a][0])
        if (animals[i][0] === tampung[a][0][0]) { // jika huruf pertama animals(animals[i][0]) outputnya a,a,c,k,k samadengan huruf pertama tampung yaitu anoa berarti a
            //console.log('jika ' + animals[i] + ' yaitu huruf pertama animals sama dengan huruf pertama ' + tampung[a][0])
            tampung[a].push(animals[i]);
            // console.log('maka lakukan push ' + animals[i] + ' ke tampung hingga menjadi = ' + tampung)
        } else {
            a++; //untuk mengganti perulangan angka menjadi ganjil
            tampung[a] = [animals[i]];
            // console.log(tampung)
        }
    }
    return tampung;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
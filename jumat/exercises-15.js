function groupAnimals(animals) {
    var tampung = [
        []
    ];
    var a = 0;
    animals.sort();
    tampung[0].push(animals[0]);

    for (var i = 1; i < animals.length; i++) {

        if (animals[i][0] === tampung[a][0][0]) {
            tampung[a].push(animals[i]);
        } else {
            a++;
            tampung[a] = [animals[i]];
        }
    }
    return tampung;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
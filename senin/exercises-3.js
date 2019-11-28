function dataHandling(data) {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {

            console.log("Nomor ID :" + data[i][j]);
            j++;
            console.log("Nama     :" + data[i][j]);
            j++;
            console.log("Alamat   :" + data[i][j]);
            j++;
            console.log("TTL      :" + data[i][j]);
            j++;
            console.log("Hobi     :" + data[i][j]);
            console.log("");
        }
    }
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input);
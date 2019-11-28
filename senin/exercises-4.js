function dataHandling2(input) {

    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    //console.log(input);
    input.splice(4, 2, 'Pria', 'SMA International Metro')
    console.log(input);

    var str = '21/05/1989';
    var words = str.split('/');
    var bulan = ''
    //console.log(words);

    for (var i = 0; i < words.length; i++) {
        //  console.log(words[i]);

        switch (words[i]) {
            case '01':
                bulan = 'Januari';
                break;
            case '02':
                bulan = 'Febuari';
                break;
            case '03':
                bulan = 'Maret';
                break;
            case '04':
                bulan = 'April';
                break;
            case '05':
                bulan = 'Mei';
                break;
            case '06':
                bulan = 'Juni';
                break;
            case '07':
                bulan = 'Juli';
                break;
            case '08':
                bulan = 'Agustus';
                break;
            case '09':
                bulan = 'September';
                break;
            case '10':
                bulan = 'Oktober';
                break;
            case '11':
                bulan = 'November';
                break;
            case '12':
                bulan = 'Desember';
                break;

        }

    }
    console.log(bulan);
    console.log(words.join('-'));
    //console.log(input.slice(1, 2))
    var s = input.slice(1, 2);
    var x = s.toString();
    var j = x.substr(0, 15);

    console.log(x.substr(0, 15));
}

var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(data);
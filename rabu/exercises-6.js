function angkaPalindrome(num) {
    for (i = 0; i < num * 2; i++) {
        if (num + "" == (num + "").split("").reverse().join("")) {
            return console.log(num);
        }
        num++
    }

}
 // }
angkaPalindrome(14); // 9
angkaPalindrome(5808); // 11
angkaPalindrome(600); // 121
angkaPalindrome(599); // 181
angkaPalindrome(569); // 1001
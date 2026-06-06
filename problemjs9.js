function palindrome(str){
    let revstr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revstr.push(str[i]);
    }
    let reversed = revstr.join('');
    if (str === reversed) {
        console.log(str, "is a palindrome");
    } else {
        console.log(str, "is not a palindrome");
    }
}
palindrome("racecar")
palindrome("hello")
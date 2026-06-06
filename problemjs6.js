function reverseString(str) {
    let revstr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revstr.push(str[i]);
    }
    return revstr.join('');
}

console.log(reverseString("hello"));
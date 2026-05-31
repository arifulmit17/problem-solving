function reverseString(str) {
    let revstr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revstr.push(str[i]);
    }
    return revstr.join('');
}

function isPalindrome(str) {
    const revstr = reverseString(str);
    return revstr === str;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
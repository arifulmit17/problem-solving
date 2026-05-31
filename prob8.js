function flattenArray(arr) {
    const flatArr = [];
    for (let i=0;i<arr.length;i++) {
        if (Array.isArray(arr[i])) {
            flatArr.push(...flattenArray(arr[i]));
        } else {
            flatArr.push(arr[i]);
        }   
    }
    return flatArr;

}
console.log(flattenArray([1, [2, 3], [4, 5], 6]));
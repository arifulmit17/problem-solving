function mergeArrays(arr1,...args) {
    args=args.flat();
    return [...arr1, ...args];
}
console.log(mergeArrays([1,2], [3,4], [5])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
function countProperties(obj){
    return Object.keys(obj).length;
}
console.log("Number of properties in the object is:", countProperties({a: 1, b: 2, c: 3}));
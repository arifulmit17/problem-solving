function invertObject(obj){
    let invertedObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
}
let originalObj = {a: 1, b: 2, c: 3};
console.log("Inverted object is:", invertObject(originalObj));
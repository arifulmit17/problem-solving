function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}
let object1 = {a:1};
let object2 = {a:2};
console.log("Merged object is:", mergeObjects(object1, object2));
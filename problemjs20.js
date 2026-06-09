function findDuplicateObjects(arr) {
    let frequency = {};

    for (let obj of arr) {
        let key = JSON.stringify(obj);
        frequency[key] = (frequency[key] || 0) + 1;
    }

    let duplicates = [];

    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(JSON.parse(key));
        }
    }

    return duplicates;
}

let objects = [{name:'Ali'},{name:'Sara'},{name:'Ali'}]

console.log("Duplicate objects:", findDuplicateObjects(objects));
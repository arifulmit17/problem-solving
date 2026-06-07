function removeDuplicateArray(arr){
    let unique=[];

    for(i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    return unique;
}
let numbers=[1,2,2,4,5];
console.log("Array with duplicates removed is:", removeDuplicateArray(numbers));
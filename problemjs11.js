function sumofArray(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=arr[i]+sum;
    }
    return sum;
}
let numbers=[1,2,3,4,5];
console.log("Sum of the array is:", sumofArray(numbers));
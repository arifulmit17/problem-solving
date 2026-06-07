function greater(arr){
    let greater=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>greater){
            greater=arr[i];
        }
    }
    return greater;
}
let numbers=[3, 1, 7, 2, 9];
console.log("Greater number in the array is:", greater(numbers));
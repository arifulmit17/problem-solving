function countcharacters(str,char){
    let count=0;
    str=str.toLowerCase();
    for (i=0;i<str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
}
console.log("Number of a in 'banana':", countcharacters("banana", "a"))
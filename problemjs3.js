function largestOfThree(a,b,c){
    if(a>=b && a>=c){
        console.log(a, "is the largest number");
    }
    else if(b>=a && b>=c){
        console.log(b, "is the largest number");
    }
    else{
        console.log(c, "is the largest number");
    }
}
largestOfThree(5,10,3)
largestOfThree(15,7,12)
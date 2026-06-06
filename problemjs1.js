function swap(a,b){
    console.log("Before swap: a =", a, "b =", b);
    a=a+b
    b=a-b
    a=a-b
    console.log("After swap: a =", a, "b =", b);

}
a=5
b=10
swap(a,b)
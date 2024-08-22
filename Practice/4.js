//88.	Write a program to print Fibonacci series up to n terms.

// a b =c 
// 0 1 =1  
// 1 1 =2
// 1 2 =3
// 2 3 =5

let a=0;
let b=1;
let c=0;


for(let x=0;x<=5;x++)
{
    console.log(a)//a=0
    c=a+b;//c=1
    a=b;// a=1
    b=c;// b=1
}
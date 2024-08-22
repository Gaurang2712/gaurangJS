//42.	Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.
// Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
//Percentage < 40% : Grade F

let Physics=86;
let Chemistry=98;
let Biology=88;
let Mathematics=69;
let Computer=96;

let total=Physics+Chemistry+Biology+Mathematics+Computer;
let percentage=total*100/500;

console.log(percentage)

if(percentage >= 90){
   console.log('you got A gread in exam')
}
else if(percentage >= 80){
    console.log('you got B gread in exam')
}
else if(percentage >= 70){
    console.log('you got C gread in exam')
}
else if(percentage >= 60){
    console.log('you got D gread in exam')
}
else if(percentage >= 40){
    console.log('you got E gread in exam')
}
else if(percentage < 40){
    console.log('you got F gread in exam')
}
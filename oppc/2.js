//2.Create a class Rectangle with properties width and height. Add a method to calculate the area. Instantiate an object and call the method.


class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    
    display(){
        console.log(`area of rectangle is : ${this.height*this.width}`);
    }
}

let rectangle1 =new Rectangle(10,20)
rectangle1.display();
console.log();

let rectangle2 =new Rectangle(33,26)
rectangle2.display();
console.log();

let rectangle3 =new Rectangle(50,21)
rectangle3.display();
console.log();
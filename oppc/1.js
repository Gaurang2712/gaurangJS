/*Create a class Car with properties make, model, and year. Instantiate an object of the Car class with specific values and print its properties.

Create a class Rectangle with properties width and height. Add a method to calculate the area. Instantiate an object and call the method.

Create a class Person with properties firstName and lastName. Add a method to return the full name. Instantiate an object and call the method.

Create a class Book with properties title, author, and yearPublished. Instantiate an object and access its properties.

Create a class Circle with a property radius. Add a method to calculate the circumference. Instantiate an object and call the method.

Create a class Student with properties name and grade. Add a method to check if the student has passed (grade ≥ 60). Instantiate an object and call the method.

Create a class Laptop with properties brand, model, and price. Add a method to apply a discount to the price. Instantiate an object and call the method. */



//1.Create a class Car with properties make, model, and year. Instantiate an object of the Car class with specific values and print its properties.

class car {
    constructor(model,year) {
       this.model=model;
       this.year=year; 
    }

    display(){
        console.log(this.model);
        console.log(this.year);
    }
}

let car1=new car('Audi R8',2010) 
car1.display();
console.log();

let car2=new car('aulto 800',2007) 
car2.display();
console.log();

let car3=new car('mercedes g wagon',2010) 
car3.display();
console.log();


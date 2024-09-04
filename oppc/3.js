//3.Create a class Person with properties firstName and lastName. Add a method to return the full name. Instantiate an object and call the method.


class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    fullnameofp(){
        this.fullname=this.firstname+this.lastname;
        return this.fullname
    }
    display(){
        console.log(this.fullname)
    }
}


let person1 =new Person('Gaurang','Chaudhary')
person1.fullnameofp();
person1.display();
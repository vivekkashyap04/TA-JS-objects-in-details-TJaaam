
// More about class

//Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square{
    constructor(side){
        this.width = side;
        this.height =side;
    }
}// Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
class Square{
    constructor(side){
        this.width = side;
        this.height =side;
    }
    description(){
        alert(`The square is ${this.width} * ${this.height}`);
    }
}   
//Create a method inside the class named `calcArea` that will return the area of the square.
class Square{
    constructor(side){
        this.width = side;
        this.height =side;
    }
    description(){
        alert(`The square is ${this.width} * ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
}   
// Create a `area` getter method using which we can get the area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height =side;
    }
    description(){
        alert(`The square is ${this.width} * ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }

    get area(){
        return this.width * this.height;
    }
}  

// Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

//Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

//Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
class Square{
    constructor(side){
        this.width = side;
        this.height =side;
        this.numberofTimes = 0;
    }
    description(){
        alert(`The square is ${this.width} * ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }

    get area() {
        if(this.numberofTimes >= 4){
             alert("Upper limit reached");
        }
        else {
        this.numberofTimes++;
        return this.height * this.width;
        
        }
    }
    set area(sqArea) {
        if(Number.isInteger(Math.sqrt(sqArea))) {
            this.height = Math.sqrt(sqArea);
            this.width = Math.sqrt(sqArea);
            
        } else {
            alert(`Not a valid Input`);
        }
    }
    static isEqual(sqr1, sqr2) {
        return (sqr1.height * sqr1.width) === (sqr2.height * sqr2.width);
    }
}  
// Create two instance of the `Square` class
let squareA = new Square(14);
let squareB = new Square(10);
// Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

// Check the `isEqual` method and pass the two instance you created above.

// User Class

// Create a `User` class that accepts `firstName` and `lastName` property

// Create a getter method named `fullName` that will return the full name of the person.

// Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
// Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.fullName + ' ' + this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert('Full name should more than 5 characters')
        }else{
            let splitName = fullName.trim().split(" ");
            this.firstName = splitName[0];
            this.lastName = splitName[1];
        }
    }
    nameContains(str){
        return str === this.fullName;
    }
}
//Create two instance of the `User` class
let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");
//Check by using the `fullName` setter method with name bigger than 5 characters.

// Check by using the `fullName` setter method with name less than 5 characters.
// Check the `fullName` using getter
// Check the `nameContains` method

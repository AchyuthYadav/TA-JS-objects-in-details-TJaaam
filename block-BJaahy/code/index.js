
// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
}

// Add a method named `description` that will alert a message saying `The square is ${width} x ${height}

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert('The square is ${width} x ${height}')
    }
}

// Create another method named `calcArea` that will return the area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert('The square is ${width} x ${height}');
    }

    calcArea(){
        return this.width * this.height;
    }
}

// Create a getter method named `area` that will return area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert('The square is ${width} x ${height}');
    }

    calcArea(){
        return this.width * this.height;
    }

    get area(){
        return this.calcArea
    }
}

// - Create a getter method named `area` that will return area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert('The square is ${width} x ${height}');
    }

    calcArea(){
        return this.width * this.height;
    }

    get area(){
        return this.calcArea;
    }

    set area(value){
       let side = Math.sqrt(value)
       this.width = side;
       this.height = side;
    }
}




// Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert('The square is ${width} x ${height}');
    }

    calcArea(){
        return this.width * this.height;
    }

    get area(){
        return this.calcArea;
    }

    set area(value){
       let side = Math.sqrt(value)
       this.width = side;
       this.height = side;
    }

    static isEqual(a,b){
        return (a.width * a.height) === (b.width*b.height)
    }
}   





-------


// - Create a class named `User` that accepts `firstName` and `lastName` property

class User{
    constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
}
// - Create a getter method named `fullName` that will return the full name of the person.

class User{
    constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

    get fullName(){
        return '${this.firstName} ${this.lastName}'
    }
    set fullName(name){
        if(name.length<5){
            alert('Full name should be more than 5 characters')
        } else {
            let firstName = name.split('')[0];
            let lastName = name.split('')[1];
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }

}



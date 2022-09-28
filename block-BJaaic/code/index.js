let animalMethod = {
    eat: function(){
        console.log('I live in ${this.location} and I can eat')
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs`)
    }
}

function createAnimal(location, numberOfLegs){
    let obj = Object.create(animalMethod);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}


function createCat(location, numberOfLegs, name, colorOfEye){
    let obj = createAnimal(locatin, numberOfLegs);
    obj.name = name;
    obj.colors = colorOfEye;
    return obj;
}


function createDog(location, numberOfLegs, name, color){
    let obj = createAnimal(locatin, numberOfLegs);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}

let dogMethods ={
    bark(){
        alert('I am ${this. name} and I can bark 🐶')
    },
    changeName(name){
        this.name = name;
        return this.name;
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color
    },
    summary(){
        return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
} 

Object.setPrototypeOf(dogMethods, animalMethod);
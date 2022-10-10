

class Person {
    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat() {
        console.log(`${this.name} eats only oats in morning`);
    }
    sleep() {
        console.log(`${this.name} sleeps at 10:00 pm daily`);
    }
    walk() {
        console.log(`${this.name} walks 10km daily`);
    }
}    
class Dog {
    constructor() {
        this.hunger = 0;
        this.food = 100
    }
    
    remaining = () => {
        console.log(this.food)
    }
 }

 let fido = new Dog();
 fido.remaining();
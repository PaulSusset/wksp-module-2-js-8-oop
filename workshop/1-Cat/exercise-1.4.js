// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.
class Cat {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
        this.species = 'cat'
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    sleep = (hours) => {this.tiredness -= (hours * 5); this.happiness += hours;}
    eat = (grams) => {this.hunger -= (grams/5);this.happiness += (grams/20);}
    play = (minutes) => {this.loneliness -= (minutes*3);this.happiness += (minutes*2);}
    wait = (minutes) => {
        this.tiredness += minutes;
        this.hunger += (minutes*2);
        this.loneliness += (minutes/2);
        this.happiness -= (minutes/5);
    }
}
let boots = new Cat('Boots', 'siamese');
boots.tiredness = 50;
boots.hunger = 50;
boots.loneliness = 50;
boots.happiness = 10;
boots.wait(20);
console.log(boots);


// B) Make Boots wait 20 minutes and call then console.log(boots);


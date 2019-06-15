class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.greet = '';
        // this.greet = function() {
        //     return `${this.name} says hello.`;
        // } 
    }
    this.greet = function() {

    }
    // Adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
}

var x = new Hero('chris', 100);
console.log(x.greet());


// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// // Adding a method to the constructor
// Hero.prototype.greet = function() {
//     return `${this.name} says hello.`;
// }
// With classes this syntax is simplified, and the method can be added directly to the class. Using the method definition shorthand introduced in ES6, defining a method is an even more concise process.

// class.js
// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     // Adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }


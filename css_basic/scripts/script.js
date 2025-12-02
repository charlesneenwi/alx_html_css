//Arrays 
/*let footBallTeam = ["Chelsea", "Arsenal", "Liverpool", "Manchester City", "Manchester United"];
console.log(footBallTeam[0]);
console.log(footBallTeam[2]);
console.log(footBallTeam[4]);
footBallTeam[1] = "Tottenham";
console.log(footBallTeam);
footBallTeam.push("Leicester City");
console.log(footBallTeam);
footBallTeam.pop();
console.log(footBallTeam);
console.log(footBallTeam[6]);*/

//Objects
/*let myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    beverages: ["Coffee", "Tea", "Juice"]
};
console.log(this);

console.log(myCar["make"]);
console.log(myCar["model"]);
console.log(myCar.year);
myCar.color = "Red";
console.log(myCar);
myCar.beverages.push("Water");
console.log(myCar.beverages);*/

/*anotherObj = {
    firstName: "John",
    lastName: "Doe", 
    age: 30,
    hobbies: ["Reading", "Traveling", "Swimming"],

    action: function() {
        return `Time for ${this.hobbies[0]}!`;
    }
};
console.log(anotherObj.firstName);
console.log(anotherObj["lastName"]);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vroom vroom!";
    },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.type);
console.log(truck.engine());
console.log(typeof(truck.wheels));
console.log(typeof Object.create);  // → "function"

const band = {
    bandName: "The Beatles",
    famousSong: "Hey Jude",
    yearFormed: 1960,
    genre: "Rock",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(band[job]);
}

const person = {
    name: "Charles",
    age: 24,
    profession: "Software Engineer",
};
const {name, age, profession} = person;
console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`profession: ${profession}`);

//Array Methods

const nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums);

nums.shift(0);
console.log(nums);

//Functions

function filterEvenNumbers(numbers) {
    const even = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }

    return even;
}

// Test with different arrays
console.log(filterEvenNumbers([1, 3, 4, 6, 7, 8, 9]));     // [4, 6, 8]
console.log(filterEvenNumbers([-2, -1, 0, 1, 2, 3]));     // [-2, 0, 2]
console.log(filterEvenNumbers([10, 15, 20, 25, 30]));     // [10, 20, 30]*/

//promises

function walkDog(callback){

    setTimeout( () => {
        console.log("you walk the dog");
        callback();
    }, 1600);

}

function cleanKitchen(callback){

    setTimeout(() => {
        console.log("you clean the kitchen");
        callback();
    }, 3000);

}

function doLaundry(callback){

    setTimeout(() => {
        console.log("you do the laundry");
        callback();
    }, 4000);

}

walkDog(() => {
    cleanKitchen(() => {
        doLaundry(() => console.log ("you finished all the chores"));
    });
});
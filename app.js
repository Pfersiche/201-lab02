
console.log("Hi")
alert("Welcome to my site, let's get to know each other!") 
let userName = prompt("Please enter your name") 
// console.log(userName)
alert("welcome, " + userName)

let points = 0

const myFaveColour = "green"

let faveColour = prompt("what is my favourite colour?")

if(faveColour === myFaveColour) {
// console.log("cool, mine too!") 
alert("cool, mine too!")
} else{
    console.log("cool, " + faveColour + " is a nice colour. My favourite colour is " + myFaveColour) 
}


let myFavePet = prompt("Is my favourite pet a dog? Please answer yes/no or y/n only")

if(myFavePet === "yes" || myFavePet === "y") {
//   console.log("Nope, it's a cat!")
  alert("Nope, it's a cat!") 

} else if(myFavePet === "no" || myFavePet === "n") {
    // console.log("sorry that's wrong!") 
    alert("sorry that's wrong")

} else {
    console.log("oops, the response to this question should be a yes or no")
}

let myFaveGame = prompt("Do you like Disco elysium?")

if(myFaveGame === "yes" || myFaveGame === "y") {
    // console.log("Great, that's my favourite game!")
    alert("Great, that's my favourite game!")
} else if(myFaveGame === "no" || myFaveGame === "n") {
    // console.log("That's okay!") 
    alert("That's okay!")
} else {
    // console.log("That's okay! You should check it out some time") 
    alert("That's okay! You should check it out some time")

}

let whereStudied = prompt("Did I study for my degree in Brighton?")

if(whereStudied === "yes" || whereStudied === "y") {
    // console.log("That's right, I studied at the University of Brighton")
    alert("That's right, I studied at the University of Brighton")
} else if(whereStudied === "no" || whereStudied === "y") {
    
} else {
    // console.log("Answer should take the form of yes/no or y/n")
    alert("Answer should take the form of yes/no or y/n")

}

let faveDessert = prompt("Is my favourite dessert baklava? please answer yes/no or y/n only").toLowerCase();
while (faveDessert != "yes" && faveDessert != "no" && faveDessert != "y" && faveDessert != "n") {
alert("please answer yes/no or y/n only");
faveDessert = prompt("Is my favourite dessert baklava? please answer yes/no or y/n only").toLowerCase();
}

if (faveDessert === "yes" || faveDessert === "y"){
    // console.log("correct, Baklava is my favourite dessert");
    alert("correct, Baklava is my favourite dessert");
} else if (faveDessert === "no" || faveDessert === "n"){
    // console.log("Nope, that's wrong!");
    alert("Nope, that's wrong!");
}

const number = 5;
console.log(number);
let guess = prompt("guess a number between 1 and 10! You have 3 attempts");
console.log(guess);
for (let i = 2; i >= 0; i--) {
  if (i === 0) {
    alert("you're out of attempts! Better luck next time!");
    break;
}
if (guess < number) {
    alert("too low! guess again..");
    guess = prompt("guess a number between 1 and 10! You have " + i + "attempts to guess the right number")
    } else if (guess > number) {
       alert("too high, guess again!"); 
    guess = prompt("guess a number between 1 and 10! You have " + i + "attempts to guess the right number")
    } else if (guess = number) {
        points++;
        console.log(points);
        alert("congrats, you guessed the number!");
        break;
    }
}

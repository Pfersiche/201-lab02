console.log("Hi")
alert("Welcome to my site, let's get to know each other!") 
let userName = prompt("Please enter your name") 
// console.log(userName)
alert("welcome, " + userName)


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
  console.log("yes, I love dogs!")  

} else {
    console.log("oops, the response to this question should be a yes or no")
}

let myFaveGame = propt("Do you like Disco elysium?")

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

let
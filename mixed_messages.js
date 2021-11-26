//Three messageparts which contain the potential choices of the randomizer
let partOneChoices = ["I smell something funny", "I see something strange", "I sense some kind of danger", "I cannot move", "I am not sure what that is"];
let partTwoChoices = ["it is a rose", "it is a rock", "it is an ogre", "it is a beauty", "it is my dog"];
let partThreeChoices = ["so it must be destroyed!", "so I will play with it.", "so I will slay it!", "so I will smell it.", "so I will marry it!"];

//object which cotains the randomized message    
const randomizedMessage = {
	
}

const randomNumber = num => {
	return Math.floor(Math.random() * num) + 1;
}

console.log(randomNumber(5));

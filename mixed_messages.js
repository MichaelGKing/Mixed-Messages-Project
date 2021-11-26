/* 	A program that generates a random message made up of three parts.
	By Michael King, last edit: 26/11/21. */


//Three variables containing the potential three message parts
let partOneChoices = ["I smell something funny", "I see something strange", "I sense some kind of danger", "I cannot move", "I am not sure what that is"];
let partTwoChoices = ["it is a rose", "it is a rock", "it is an ogre", "it is a beauty", "it is my dog"];
let partThreeChoices = ["so it must be destroyed!", "so I will play with it.", "so I will slay it!", "so I will smell it.", "so I will marry it!"];

//Array for looping through to generate message
const arrayOfArrays = [partOneChoices, partTwoChoices, partThreeChoices];

//Variable for storing final message
let finalMessage = "";

//randomly generates a number to select the parts for the message
const randomNumber = () => {
	return Math.floor(Math.random() * 4);
}

//Generates the final message from the PartChoice arrays
for (i = 0; i < arrayOfArrays.length; i++) {
	finalMessage += arrayOfArrays[i][randomNumber()] + " ";
};

//Logs the final message
console.log(finalMessage);

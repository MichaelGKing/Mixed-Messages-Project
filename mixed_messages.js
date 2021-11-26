//Three messageparts which contain the potential choices of the randomizer
let partOneChoices = ["I smell something funny", "I see something strange", "I sense some kind of danger", "I cannot move", "I am not sure what that is"];
let partTwoChoices = ["it is a rose", "it is a rock", "it is an ogre", "it is a beauty", "it is my dog"];
let partThreeChoices = ["so it must be destroyed!", "so I will play with it.", "so I will slay it!", "so I will smell it.", "so I will marry it!"];
const arrayOfArrays = [partOneChoices, partTwoChoices, partThreeChoices];
let finalMessage = "";

//randomly generates a number to select the parts for the message
const randomNumber = num => {
	return Math.floor(Math.random() * num);
}

for (i = 0; i < arrayOfArrays.length; i++) {
	finalMessage += arrayOfArrays[i][randomNumber(5)] + " ";
};

console.log(finalMessage);

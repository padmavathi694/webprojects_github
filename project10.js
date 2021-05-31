let randomNo;
const getUserChoice=(userInput) => {

userInput = userInput.toLowerCase();

if(userInput=="rock" || userInput=="paper" || userInput=="scissors"){
	return userInput;
	

}
else{
	 return "invalid input";
}

}

 function getComputerChoice(){

 	randomNo=Math.floor(Math.random() * 3);
 	if(randomNo==0){
 		return "rock";
 	}
 	else if(randomNo==1){
 		return "paper";
 	}
 	else{
 		return "scissors";
 	}

 }
 
 

 function determineWinner(userChoice , computerChoice){


 	if(userChoice=="rock"){
 		if(computerChoice=="paper"){
 			return "computer won";
 		}
 		else if (userChoice==computerChoice) {
			 return "the game was a tie.";
		}
 		else{

 			return "user won";
 		}
 	}
 	if(userChoice=="paper"){

 		if(computerChoice=="scissors"){

           return "computer won";

 		}
 		else if (userChoice==computerChoice) {
			 return "the game was a tie.";
		}
 		else{
 			return "user won";
 		}

 	}
 	if(userChoice=="scissors"){

 		if(computerChoice=="rock"){
 			return "computer won";
 		}
 		else if (userChoice==computerChoice) {
			 return "the game was a tie.";
		}
 		else{
 			return "user won";
 		}
 	}

   

}


function playGame(){

	let userChoice=getUserChoice("scissors");
	let computerChoice=getComputerChoice();
	console.log(userChoice);
	console.log(computerChoice);
	console.log(determineWinner(userChoice,computerChoice));
}
playGame();

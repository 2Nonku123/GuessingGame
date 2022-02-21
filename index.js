// const randomElem = document.querySelector(".random");

let randomNumber = Math.ceil((Math.random() * 100))

// randomElem.innerHTML = randomNumber;

const number_guess = document.querySelector(".number_guess");
const guess_btn = document.querySelector(".guess_btn");
const message = document.querySelector(".message");

/*
If the guess is too low show : 

* "Your guess is too low"

Or if too high show the message 
* "Your guess is too high" 
If the correct number is guessed show this message: 
* "Correct, the secret number is ${number}".

*/


function guessBtnClicked() {
	const guessedNo = Number(number_guess.value);

	if (guessedNo < randomNumber) {
		message.innerHTML = "Your guess is too low";
	} else if (guessedNo > randomNumber) {
		message.innerHTML = "Your guess is too high";
	} else {
		message.innerHTML =  `Correct, the secret number is ${guessedNo}`;
	}


	setTimeout(function(){
		message.innerHTML = "";
	}, 2000);


}

guess_btn.addEventListener('click', guessBtnClicked)
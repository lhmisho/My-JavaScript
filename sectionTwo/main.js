var randomData 	= Math.floor(Math.random()*100) + 1;

var guesses 	= document.querySelector('.guesses');
var resultParas = document.querySelector('.resultParas');
var lowOrHi 	= document.querySelector('.lowOrHi');
var lastResult 	= document.querySelector('.lastResult');


var guessField = document.querySelector('.guessField');
var guessSubmit= document.querySelector('.guessSubmit');

var userdata = Number(guessField.value);
function checkGuesses(){
	if(userdata > randomData){
		console.log("Data is greater than Actual value : " + userdata + "Machine data: " + randomData);
	}else if(userdata < randomData){
		console.log("Data is less than Actual value : " + userdata + "Machine data: " + randomData);
	}else{
		console.log("congrats data matched");
	}
}
guessSubmit.addEventListener('click', checkGuess);



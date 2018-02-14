/*

	- Add an event listener to a button

	var button = document.getElementsByClassName('buttonNum')[0] 
	button.addEventListener("click", function() {
 		console.log("He's only gone and bloody clicked it ");
 	});


	- Add event listeners for each button (o)
	- Event listener accesss the text from the button that is clicked (o)
	- Enter the text from a number and operator buttons onto the screen in the HTML (o)
	- Add event listener to the calculate button that fires a function called "calculate" (0)
	- Write the calculate function to take two numbers and an operator and return the answer
	- Display the answer on the  screen (o)
	- Add an event listener to the reset button to clear the page and the variables (0)

*/ 



// - Add event listeners for each button
var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen')
var calculateButton = document.getElementsByClassName('equals')[0];
var resetButton = document.getElementsByClassName('buttonClear')[0];
var firstNumber, secondNumber, operator;

function init() {
	for(var i = 0; i < numberButtons.length; i++){
		var button = numberButtons[i];
		button.addEventListener("click", function(event) {
			var number = event.target.innerHTML;
			displayText(number);
			saveNumber(number);
		});
 	};

 	for(var i = 0; i < operatorButtons.length; i++){
		var button = operatorButtons[i];
		button.addEventListener("click", function(event) {
		displayText(event.target.innerHTML);
		operator = event.target.innerHTML;
		});
 	};	

 	calculateButton.addEventListener("click", function() {
 		var answer = calculate(firstNumber, secondNumber, operator);
 		displayText(answer);
 	});
 	resetButton.addEventListener("click", reset);
}

// Enter the text from a number and operator buttons onto the screen in the HTML
function displayText(text) {
	return display.innerHTML = text;
}

function saveNumber(number) {
	parsedNumber = parseFloat(number);
	if(!firstNumber) {
		return firstNumber = parsedNumber;
	} else {
		return secondNumber = parsedNumber;
	}
}

function calculate(firstNum, secondNum, operator) {
	console.log(firstNumber, operator, secondNumber);

	switch(operator) {
 		case "+":
 			return firstNum + secondNum;
 		case "-":
 			return firstNum - secondNum;
 		case "*":
 			return firstNum * secondNum;
 		case "/":
 			return firstNum / secondNum;
 		default:
 			throw "Incorrect operator";
 	}
}

function reset() {
	var firstNumber, secondNumber, operator = null;
	displayText(0);
}

init();
var codeContainer = document.getElementById("code");
var numberButtons = document.getElementsByClassName('buttonNumber');
var rightCode = document.getElementById("winCount");
var rightCode = document.getElementById("loseCount");
var clickCounter = 0;
var winCounter = 1;
var loseCounter = 1;
var numberOne;
var numberTwo;
var numberThree;
var intervalTimer = 0;
var audioError = new Audio('audio/error.mp3');
var audioWin = new Audio('audio/win.mp3');

function disabledbuttons(){
for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].setAttribute('disabled', 'disabled');
    }
}

function enabledbuttons(){
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
		}
	}

function getNumber(clickedButton) {

    clickCounter++;

    codeContainer.innerHTML += clickedButton.value;

    if(clickCounter == 1) {
        numberOne = clickedButton.value;
    }else if(clickCounter == 2){
        numberTwo = clickedButton.value;
    }else {
        numberThree = clickedButton.value;
    }

    if(clickCounter == 3) {

    disabledbuttons();

	if(numberOne == 3 && numberTwo == 1 && numberThree == 1 ){
	var greenBlock = document.getElementById("greenBlock");

	audioWin.play();

	winCount.innerHTML = winCounter++;
	
	var blinkGreen = setInterval(function() {
			
	intervalTimer++;
	codeContainer.innerHTML = "CORRECT";

	if (greenBlock.style.visibility == 'hidden') {
		greenBlock.style.visibility = 'visible';
	}else 
	{
		greenBlock.style.visibility = 'hidden';
	}
	if(intervalTimer == 10) 
	{
		clearInterval(blinkGreen);
		
		enabledbuttons();
		codeContainer.innerHTML = "";
		clickCounter = 0;
		intervalTimer = 0;		
	}

	}, 500);
            
    }else {
	var redBlock = document.getElementById("redBlock");

	audioError.play();

	loseCount.innerHTML = loseCounter++;

	var blinkRood = setInterval(function() {
	intervalTimer++;
	codeContainer.innerHTML = "INCORRECT";
	
	if (redBlock.style.visibility == 'hidden') {
		redBlock.style.visibility = 'visible';
	}else {
		redBlock.style.visibility = 'hidden';
	}
	if(intervalTimer == 10) 
	{
		clearInterval(blinkRood);	
		enabledbuttons();
		codeContainer.innerHTML = "";
		clickCounter = 0;
		intervalTimer = 0;
	}

	}, 500);
	}
}
    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);  
}



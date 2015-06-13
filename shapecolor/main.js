//create visual sqaure tag, content_text, color => changes randomly by mouse over.

//create square that passes text 
console.log("linked");

var drawingText = "Hi! Thank you for visiting. Have a nice day"
var initialText = "Mouseover"
var words = drawingText.split(" ")
var setIntervalID;
var i =0; 

var randomNumber = function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var message = function() {
	if (i <= words.length) {
	var color = "rgba("+ randomNumber(0,255) +','+randomNumber(0,255)+','+randomNumber(0,255)+','+Math.round(Math.random()*100)/100+")";
	$('.drawing1').text(words[i]);
	i += 1; 
	console.log(color);
	$('.drawing1').css('background-color',color);
	}
}

var messageClear = function() {
	clearInterval(setIntervalID);
	$('.drawing1').text(initialText);
	i = 0; 
}

var run = function() {
	setIntervalID = window.setInterval(message, 1000);
}



$('.drawing1').on('mouseover',run);
$('.restart').on('click',messageClear);




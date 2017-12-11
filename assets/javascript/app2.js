

//Global variables
var questionArray = [


{
  question: 'What does "Brah" mean?',
  allAnswers: ["A synonym for bro", "An undergarment", "Hey!", "Brother"],
  correctAnswer: 0
},

{
   question: 'What is Hawaii time?',
   allAnswers: ["Island time", "Sunrise", "Always late", "Four hours behind"],
   correctAnswer: 2
},

{
	question: 'What does "Broke da mouth" mean?',
	allAnswers: ["Oh my god!", "I broke my mouth", "Lots of food", "Describing delicious food"],
	correctAnswer: 3
},

{
	question: 'What is "Talk Story"?',
	allAnswers: ["Talking to each other", "Telling a story", "A kid telling his auntie a story", "Beating around the bush"],
	correctAnswer: 0
},

{
	question: 'What does "Pau" mean?',
	allAnswers: ["Start", "Stop", "Hurry", "Done"],
	correctAnswer: 3
},

{
	question: 'What does "Scrap" mean?',
	allAnswers: ["Fight", "Trash", "Leftovers", "Money"],
	correctAnswer: 0
},

{
	question: 'When talking to a close friend, what do you call them?',
	allAnswers: ["Auntie", "BFF", "Cuz", "Brah"],
	correctAnswer: 2
},

{
	question: 'What is a Malasada?',
	allAnswers: ["Portuguese donut", "Pastry", "Salsa", "Poke"],
	correctAnswer: 0
},

{
	question: 'What does "Da Kine" mean?',
	allAnswers: ["A type of bag", "When you're a nice person", "Used when you can't think of the word", "Yes please"],
	correctAnswer: 2
},

{
	question: 'What does "No ka `oi" mean?',
	allAnswers: ["No idea", "Aloha spirit", "Auntie", "The best"],
	correctAnswer: 3
},

{
	question: 'Mainlanders call these sandals. Hawaiians call them:',
	allAnswers: ["Shoes", "Slippahs", "Barefeet", "Sandals"],
	correctAnswer: 1
	
},

{
	question: 'What does "Lanai" mean?',
	allAnswers: ["Turtle", "Another island", "Balcony", "Land"],
	correctAnswer: 2
},

{
	question: 'What does "Shaka" mean?',
	allAnswers: ["Let's go surf", "Thank you, howzit, hi, bye", "Rock n' Roll", "The sun is bright"],
	correctAnswer: 1
},

{
	question: 'What does "Kanak Attack" mean?',
	allAnswers: ["Time for nap", "Tired after eating too much", "Shark attack", "Need a break from studying"],
	correctAnswer: 1
},

{
	question: 'What does "K shoots then" mean?',
	allAnswers: ["I'll see you later", "Oh darn", "Okay fine", "If you say so"],
	correctAnswer: 0
}];

var i = 15;

var correctCounter = 0;
var incorrectCounter = 0;
var unasweredCounter = 0;
var currentQuestion = 0;
var seconds;
var timer;
var userChoice;
var answered;




var correctMessages = 'You got it right!';
var incorrectMessages = 'If no can, no can';
var timerDone = ['Sorry too slow!'];
var finalMessage = 'Congratulations, you finished the game!';


$('#startButton').on('click', function(){
	$(this).hide();
	$('#instructions').toggle();
	$('#currentQuestion').show();
	startGame();
});

// $('#playAgainBtn').on('click', function(){
// 	$(this).hide();
// 	startGame();
// });

function startGame(){
	$('#finalMessage').empty();
	$('#correctCounter').empty();
	$('#incorrectCounter').empty();
	$('#unasweredCounter').empty();
	$('#mainContainer').empty();
	$('#choices').show();
	$('#timeRemaining').show();
	


	runQuestion(currentQuestion);
	incorrectAnswer =0;
	correctAnswer = 0;
	unanswered = 0;

	incorrectCounter = 0;
	unansweredCounter = 0;
	currentQuestion=0;
	correctCounter = 0;

console.log(currentQuestion);
console.log(correctAnswer);
console.log(unanswered);
console.log(incorrectAnswer);

}




function resetGame(){
	$('#playAgainBtn').show();
	$('#startButton').hide();
	$('.question').hide();
	$('#choices').hide();
	$('#timeRemaining').hide();

	$('#gameMessages').show();
	$('#mainContainer').hide();
	$('#timer').hide();
	$('#instructions').hide();
	$('#finalMessage').empty();
	$('#correctedAnswer').empty();

	
	
	setTimeout(startGame, 1000 * 5); 
}


function runQuestion(){
	$('#gameMessages').empty();
	$('#correctedAnswer').empty();
	answered = true;

//new questions and answers
	$('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + questionArray.length);
	$('.question').html('<h4>' + questionArray[currentQuestion].question + '</h4>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(questionArray[currentQuestion].allAnswers[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.allAnswers').append(choices);
		console.log(choices);
	}

	timeRemaining();
	//pause time and set up answers

	$('.thisChoice').on('click', function(){
		userChoice = $(this).data('index');
			clearInterval(timer);
			answerBox();
	});

}

function timeRemaining(){
	seconds = 15;
	$('#timer').html('<h4>Time Remaining: ' + seconds + '</h4>');
	answered = true;
	timer = setInterval(showTimer, 1000);

}

function showTimer(){
	seconds--;
	$('#timer').html('<h4>Time Remaining: ' + seconds + '</h4>');

	if(seconds < 1){
		clearInterval(timer);
		answered = false;
		answerBox();
	}
}

function answerBox(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var rightAnswer = questionArray[currentQuestion].allAnswers[questionArray[currentQuestion].correctAnswer];
	var rightAnswerIndex = questionArray[currentQuestion].correctAnswer;
	
	//checks correct, incorrect, unanswered
	if((userChoice == rightAnswerIndex) && (answered == true)){
		correctCounter++;
		
		$('#gameMessages').html(correctMessages);
		console.log(correctMessages);
	} else if((userChoice != rightAnswerIndex) && (answered == true)){
		incorrectCounter++;
	
		$('#gameMessages').html(incorrectMessages);
		console.log(incorrectMessages);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswer);
	} else{
		unasweredCounter++;
	
		$('#gameMessages').html(timerDone);
		console.log(timerDone);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswer);
		answered = true;
	}

	if(currentQuestion == (questionArray.length-1)){
		setTimeout(scoreboard, 2000)
	} else{
		currentQuestion++;
		setTimeout(runQuestion, 2000);
	}
}









function scoreboard(){
	$('#gameMessages').empty();
	$('#timeRemaining').hide();
	$('#correctedAnswer').empty();


	$('#finalMessage').html(finalMessage.finalMessage);
	$('#gameMessages').append("<h2>Congrats! You have completed the game!</h2>");
	$('#gameMessages').append("<h4>Total Correct: " + correctCounter + "</h4>");
	$('#gameMessages').append("<h4>Total Incorrect: " + incorrectCounter + "</h4>");
	$('#gameMessages').append("<h4>Total Unanswered: " + unanswered + "</h4>");


	setTimeout(startGame, 1000 * 5);
	}
















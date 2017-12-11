
$(document).ready(function(){



//Global variables
var questionArray = [


{

  question: 'What does Chandler do for work?',
  allAnswers: ["Transponster", "Lawyer", "IT Procurement Manager", "Accountant"],
  correctAnswer: "IT Procurement Manager",


},

{

   question: 'What was the nickname of the guy who lived across the street from Monica and Rachel?',
   allAnswers: ["Richard", "The Guy Across The Street", "Italian Stallion", "Ugly Naked Guy"],
   correctAnswer: "Ugly Naked Guy",
  

},

{
	question: 'What does Janice say all the time?',
	allAnswers: ["Oh my god!", "I know!", "How you doin", "We were on a break!"],
	correctAnswer: "Oh my god!",
	
},

{
	question: 'What animal does Phoebe think her mom came back as?',
	allAnswers: ["Horse", "Cow", "Rooster", "Cat"],
	correctAnswer: "Cat",

},

{
	question: 'What is Ross for Halloween?',
	allAnswers: ["Bunny", "Holiday Armadillo", "Spudnik", "Superman"],
	correctAnswer: "Spudnik",

},

{
	question: 'What was the band name Chandler and Ross played in?',
	allAnswers: ["Sup Dude", "The Yeller Gellers", "Way No Way", "No Named Band"],
	correctAnswer: "Way No Way",

},

{
	question: 'What did Joey buy Chandler as a token of their friendship?',
	allAnswers: ["A pizza", "A tv cabinet", "A chick and a duck", "A bracelet"],
	correctAnswer: "A bracelet",

},

{
	question: 'What is the secret ingredient to Monica\'s Thanksgiving sandwich?',
	allAnswers: ["Cranberry sauce", "Slice of gravy soaked bread", "A slice of pumpkin pie", "Stuffing and mashed potatoes"],
	correctAnswer: "Slice of gravy soaked bread",

},

{
	question: 'What was Monica’s nickname when she was a field-hockey goalie?',
	allAnswers: ["Harmonica", "Big Fat Goalie", "Large and in Charge", "The Big Goalie"],
	correctAnswer: "Big Fat Goalie",
	
},

{
	question: 'What was the  name and profession of Joey\'s imaginary childhood friend?',
	allAnswers: ["Hugsy, Dentist", "Vinny, Actor", "Frank, Ice Skater", "Maurice, Space Cowboy"],
	correctAnswer: "Maurice, Space Cowboy",

},

{
	question: 'What is the Joey special?',
	allAnswers: ["Two pizzas", "A meatball sub", "Spaghetti with meatballs", "Garden salad with fries"],
	correctAnswer: "Two pizzas",

},

{
	question: 'What is the name of Phoebe\'s twin?',
	allAnswers: ["Rachel", "Amy", "Ursula", "Emma"],
	correctAnswer: "Ursula",
	
},

{
	question: 'Name the game show that Joey auditions to be the host of:',
	allAnswers: ["Winner Winner Chicken Dinner", "Bamboozled", "Fireball", "Would You Rather"],
	correctAnswer: "Bamboozled",

},

{
	question: 'Which band sang the Friends theme song?',
	allAnswers: ["The Rembrandts", "REM", "Hootie and the Blowfish", "Barenaked Ladies"],
	correctAnswer: "The Rembrandts",
	
},

{
	question: 'Who did Phoebe mug when she was a 14-year-old living on the streets?',
	allAnswers: ["Joey", "Her brother Frank", "Ross", "Rachel"],
	correctAnswer: "Ross",
	
}];

var imageArray = ["<img class = 'center-block img-right' src = 'img/chander.gif'>", "<img class = 'center-block img-right' src = 'img/ugly.gif'>",
"<img class='center-block img-right' src = 'img/ohmygod.gif'>", "<img class='center-block img-right' src = 'img/cat.gif'>", "<img class='center-block img-right' src ='img/Spudnik.gif'>", 
"<img class='center-block img-right' src = 'img/waynoway.gif'>", "<img class='center-block img-right' src = 'img/bracelet.gif'>", "<img class='center-block img-right' src = 'img/thanksgiving.gif'>", 
"<img class='center-block img-right' src = 'img/monicadance.gif'>", "<img class='center-block img-right' src = 'img/joeyandchandler.gif'>", "<img class='center-block imgo-right' src = 'img/pizza.gif'>",
"<img class='center-block img-right' src = 'img/twin.gif'>", "<img class='center-block img-right' src = 'img/bamboozled.gif'>", "<img class='center-block img-right' src = 'img/friends.gif'>", 
"<img class='center-block img-right; src = 'img/mugging.gif'>"];

var i=0;
var time;
var playAudio = new Audio("");
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered;;
var answered;
var currentQuestion = 0;
var seconds;
var time;
var userSelect;
var messages ={
	correct: "Correct!",
	incorrect: "Wrong!",
	timerDone: "Out of time!",
	finished: "Let's see how well you did!",
}

$('#startButton').on('click', function(){
	$(this).hide();
	
});

$('#playAgainButton').on('click', function(){
	$(this).hide();
	resetGame();
});

function resetGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion=0;
	correctAnswer=0;
	incorrectAnswer=0;
	unanswered=0;
	runQuestion();
}


function runQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered=true;


	$('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + questionArray.length);
	$('.question').html('<h2>' + questionArray[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(questionArray[currentQuestion].allAnswers[i]);
		choices.attr({'data-index': i});
		choices.addClass('thisChoice');
		$('.allAnswers').append(choices);
	}

	timer();

	$('.thisChoice').on('click', function (){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerSheet();
	
	});
}

//====================================================================//
//						Interval function                            //
//==================================================================//



function timer(){
	
}
	



//sets new questions
// $("#currentQuestion").html("Question " + (currentQuestion + 1) + "/" + questionArray.length);
// $("#questions").html("<h2>" + questionArray[currentQuestion].questions + "</h2>");
// for(var i = 0; i < 4; i++){
// 	var choices = $("<div>");
// 	choices.text(questionArray[currentQuestion].allAnswers[i]);
// 	choices.attr({'data-index': 1});
// 	choices.addClass('thisChoice');
// 	$('.allTheAnswers').append(choices);
// }
// 	timeRemaining();
// 	$('.thisChoice').on('click', function(){
// 		userSelect = $(this).data('index');
// 		clearInterval(time);
// 		answerSheet();
// 	})


	

	


function timer()
{
	seconds = 10;
	$('#timeLeft').append('<h3>Time Remaining: ' + seconds + '</h3>');
	console.log("Time Remaining: " + seconds);
	answered = true;
	time = setInterval(timeRemaining, 1000);
	
}

function timeRemaining()
{
	
	seconds --;
	//prints remaining time
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerSheet();
		console.log(seconds);
	}
}

function answerSheet(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var correctAnswerText = questionArray[currentQuestion].allAnswers[questionArray[currentQuestion].answer];
	var correctAnswerIndex = questionArray[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.gif" width = "400px">');

	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if
		((userSelect != rightAnswerIndex) && (answered == true)) {
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		
	}
}
	

	if(time === 0)
	{
		$('button').remove();
		$('currentQuestion').remove();

		//display correct answer
		if(qCounter === 1)
		{
			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('The correct answer is' + questionArray.allAnswers[0].c);
			$('mainContainer').append(correctAnswer);

			setTimeout(function()
			{
				$('div').remove('.corAnsw');
			}, 5000);
		}
		
	}


//seconds

function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	number--;//Decrease number by one
	$('#timeLeft').html('<h4>Time Remaining: '
				+ number
				+ ' seconds </h4>'); //show remaining time

	if (number === 0){
		stop();
		clearMainContainer();
		console.log('Time Up!');//debug
		$('#mainQuestion').append('<p>Times Up! The correct answer was: '
				+ questionArray[i].correctAnswer
				+ '</p>'
				+ '<p>'
				+ questionArray[i].image
				+ '</p>');


		unanswered++;
		console.log('unanswered: ' + unanswered);
		setTimeout (clearMainBox, 3000);
		setTimeout (resetGame, 3000);
	}
}

function stop(){
	clearInterval(counter);//clear counter interval
}

//function to show image when question is given




//===============================================================//
//					      Functions                                   //
//=============================================================//
function clearMainContainer(){
	$('#mainQuestion').empty();
	$('#allTheAnswers').empty();
}

function runQuestions(){
	if(i < questionArray.length){
		$('#mainQuestion').append('<h3>' + questionArray[i].question + '</h3>');
		$('#allTheAnswers').append('<p class="button">' + questionArray[i].allAnswers[0] + '</p>' +
						'<p class= "button">' + questionArray[i].allAnswers[i] + '</p>' +
						'<p id = "correctButton">' + questionArray[i].correctAnswer + '</p>' +
						'<p class= "button">' + questionArray[i].allAnswers[3] + '</p>');
	}else{
		displayTotalScore();
		//startButton
		$('#timeRemaining').remove();
		stop();
	}
}

function checkAnswer(){
	$('.button').on("click", function(){
		stop();
		$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		$('#mainQuestion').append('<p id=correctAnswer>Wrong! The correctg answer was:'
					+ ' '
					+ questionArray[i].correctAnswer
					+ '</p>'
					+ '<p>'
					+ questionArray[i].image+ '</p>')

		incorrectAnswers++;
		console.log('incorrect answers: ' + incorrectAnswers);
		setTimeout(clearMainBox, 3000);
		setTimeout(resetGame, 3000);

})

	$('#buttonCorrect').on("click", function(){
		stop();
		$('#mainQuestion').empty();
		$('#allTheAnswers').empty();

	})

	$('#correctButton').on("click", function(){
		stop();
		$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		$('#mainQuestion').append('<p> Correct!</p>'
		+'<p>'
		+ questionArray[i].image
		+'</p>');


		correctAnswers++;
		console.log('correct answers:' + correctAnswers);
		setTimeout(clearMainBox, 3000);
		setTimeout(resetGame, 3000);
	})

}

//========================================================//
//                   functions							 //
//======================================================//

function resetGame(){
	if(i < questionArray.length){
		number=15;
		i++;
		runQuestions();
		run();
		checkAnswer();
	}
}


function restartButton(){

	$('#mainQuestion').append('<p> ')
}
function showImage(){
	$("#image-holder").html("<img src=" + images[count] + "width='400px'>");
}



function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctAnswers').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswer').html("Correct Answers: " + correctAnswers);
	$('#incorrectAnswer').html("incorrect Answers: " + incorrectAnswers);
	$('#playAgainButton').addClass('reset');
	$('#playAgainButton').show();
	$('#playAgainButton').html('Play Again');
}



//Start button function
function startbutton(){
	var startButton = $('<button> Start</button>');
	$('#startButtons').append(startButton);

	//function to empty and run questions
	$('#startButtons').on("click", function(){
		$('#startButtons').empty();
		$('#timeLeft').html('<h4> Time Remaining: ');
		console.log("Ready");
		runQuestions();
		run();
		checkAnswer();
	})
}
})


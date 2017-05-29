var timer = $("#timer");
var timeArea = $("#timeArea");
var countDown = setInterval(timeIt, 1000);
var correct = 0;


var questions = []
questions[0] = "Cherophobia is the fear of?";
questions[1] = "Polar bears can eat up to how many penguins in one sitting?";
questions[2] = "How many calories can you burn an hour by banging your head against the wall?";
questions[3] = "Bananas are curved because?";
questions[4] = "Which is a mental disorder indentified by Psychologists?";

var choices = [];
choices[0] = ["Fun", "Coding", "Grass", "Farm Animals"];
choices[1] = ["112", "25", "86", "47"];
choices[2] = ["316", "150", "90", "210"];
choices[3] = ["They are easier to hold", "Their peel is rigid", "It makes peeling easier", "They grow towards the sun"];
choices[4] = ["Facebook Addiction Disorder", "Social Media Disforia", "Instagram Filter Personification", "Disconnected Networking Disorder"];

var answers = [];
answers[0] = "Fun";
answers[1] = "86";
answers[2] = "150";
answers[3] = "They grow towards the sun"
answers[4] = "Facebook Addiction Disorder"

init();

function init() {
	$(".result").attr("display","none")
	timer.text("45");
	setup();
}

function timeIt() {
	var time = parseInt(timer.text());
	var newTime = time - 1;
	timer.text(newTime);
	if (newTime <= 0) {
		timeArea.text("Time Has Expired!")
		clearInterval(countDown)
		timesUp();
	}
}

function setup() {
	$.each(questions, function(index) {
		$("#game").append('<h3 class="question">' + this + '</h3> <img class="result" id="result' + index + '" />'); 
		$.each(choices[index], function(){
			$("#game").append("<input type='radio' name='" + index + "' value = '" + this + "''>" + this + "</input>")
		});
	})
}

function timesUp() {
	$("input[type=radio]").attr('disabled', true);

	$(".result").each(function(index){
		if ($("input[name=" + index +"]:checked").val() === answers[index]) {
			$("#result" + index).attr("src","./assets/imgs/correct.png")
			correct++;
		}
		else {
			$("#result" + index).attr("src","./assets/imgs/wrong.png")
		}
	})

	$(".result").attr("display","inline-block")
	timeArea.html("Time Has Expired! <br>You Answered " + correct + " Questions Correctly<br>")
}
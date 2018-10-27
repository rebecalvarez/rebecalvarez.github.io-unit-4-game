// a game with Crystal
// Every Crystal needs to have a random number
// That number should be generated every single time with a range of  1 - 12
// There's a main random number that the player needs to play against
// The random number needs to be from 19 to 120
// A game restart when the user loses or wins




// Global Variables

var MainRandomNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/crystal1.gif", "./assets/images/crystal2.gif", "./assets/images/crystal3.gif", "./assets/images/crystal4.gif"];
var c1Audio = new Audio("raven.mp3");
var c2Audio = new Audio("raven.mp3");
var c3Audio = new Audio("raven.mp3");
var c4Audio = new Audio("raven.mp3");
// Functions

	function randomTargetNumber () {
		MainRandomNumber = Math.floor(Math.random() * 120) + 19;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".main-random-number").html(MainRandomNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

// Running Code

	// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == MainRandomNumber) {
			wins++;
			totalReset();
		}
		else if (counter > MainRandomNumber) {
			losses++;
			totalReset();
		};
	};

	//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
    $(document).on("click", ".crystal", crystalClick);
    
   
      
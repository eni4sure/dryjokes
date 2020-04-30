$(document).ready(function() {

	dryyyyy();
	
	$.getJSON("https://api.countapi.xyz/hit/eni4sure.github.io/dryjokes", function(view) {
		$("#page_view_no").html( view.value );
	});

});

function dryyyyy() {

	var current_joke_number = new Number( $("#joke_number").text() );

	var new_joke_number = current_joke_number + 1;
	
	get_joke();

	$("#joke_number").html( new_joke_number );
}

async function get_joke() {

	//const jokesApi = [ 'https://icanhazdadjoke.com/', 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single' ];

// 	const jokesApi = [ 'https://icanhazdadjoke.com/', 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single', 'https://api.yomomma.info/', 'https://jokes.guyliangilsing.me/retrieveJokes.php?type=yomama', 'https://jokes.guyliangilsing.me/retrieveJokes.php?type=dadjoke' ];

// 	var random_joke_api = jokesApi[ Math.floor( Math.random() * jokesApi.length ) ];

// 	$.getJSON( random_joke_api , function(joke_json) {
// 		$("#joke").html( joke_json.joke );
// 	});
	
	let url = 'https://jokes.guyliangilsing.me/retrieveJokes.php?type=yomama';
	let data = await(await fetch(url)).json();
	console.log(data);
	
// 	$.ajax({
// 	    url: random_joke_api,
// 	    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
// 	    type: "POST",
// 	    dataType: "json",
// 	    success: function (joke_json) {

// 			$("#joke").html( joke_json.joke );
// 	    },
// 	    error: function () {
// 			console.log("error");
// 	    }
// 	});

}

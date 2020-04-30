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

	const jokesApi = [ 'https://icanhazdadjoke.com/', 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single', 'https://api.yomomma.info/', 'https://jokes.guyliangilsing.me/retrieveJokes.php?type=yomama', 'https://jokes.guyliangilsing.me/retrieveJokes.php?type=dadjoke' ];

	var random_joke_api = jokesApi[ Math.floor( Math.random() * jokesApi.length ) ];

	$.getJSON( 'https://api.allorigins.win/get?url=' + random_joke_api , function(joke_json) {
		var joke_json_parsed = JSON.parse( joke_json );
		$("#joke").html( joke_json_parsed.contents[0].joke );
		// $("#joke").html( joke_json.joke. );
	});
}

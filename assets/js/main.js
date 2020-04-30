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

	const jokesApi = [ 'https://icanhazdadjoke.com/', 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single', 'https://api.yomomma.info/', 'http://jokes.guyliangilsing.me/retrieveJokes.php?type=yomama', 'http://jokes.guyliangilsing.me/retrieveJokes.php?type=dadjoke' ];

	var random_joke_api = jokesApi[ Math.floor( Math.random() * jokesApi.length ) ];
	
	if ( [ 'https://api.yomomma.info/', 'http://jokes.guyliangilsing.me/retrieveJokes.php?type=yomama', 'http://jokes.guyliangilsing.me/retrieveJokes.php?type=dadjoke' ].indexOf( random_joke_api ) > -1 ) {
		
		var jokeRes = await fetch( random_joke_api );
	} else {

		var jokeRes = await fetch( random_joke_api, { headers: { 'Accept': 'application/json' } });
	}

	var jokedata = await jokeRes.json();
	// console.log(joke);

	$("#joke").html( jokedata.joke );
}

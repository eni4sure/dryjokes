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

	const jokesApi = [ 'https://icanhazdadjoke.com/', 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=racist&type=single' ];

	var random_joke_api = jokesApi[ Math.floor( Math.random() * jokesApi.length ) ];

	const jokeRes = await fetch( random_joke_api, { headers: { 'Accept': 'application/json' } });

	var chosenValue = Math.random() < 0.5

	const joke = await jokeRes.json();
	console.log(joke);

	$("#joke").html( joke.joke );
}

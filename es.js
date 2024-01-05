async function get(){
	const response = await fetch("https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Europe/Paris&userCountryId=139&competitions=11&type=1&live=false&stageNum=1&seasonNum=95&withSeasons=true")
	const data = await response.json()
	console.log(data)
	document.querySelector("#team").innerHTML = data.standings[0].rows[0].competitor.name;
	document.querySelector("#pts").innerHTML = data.standings[0].rows[0].points;
	document.querySelector("#pld").innerHTML = data.standings[0].rows[0].gamePlayed;
	
}
get()

const matchesContainer = document.getElementById("matches");
const loader = document.getElementById("loader");

const apiKey = "YOUR_API_KEY";

async function loadMatches(){

const response = await fetch(
"https://v3.football.api-sports.io/fixtures?live=all",
{
headers:{
"x-apisports-key": apiKey
}
});

const data = await response.json();

loader.style.display="none";

data.response.forEach(match=>{

matchesContainer.innerHTML+=`

<div class="card">

<h3>${match.league.name}</h3>

<p>${match.teams.home.name} 
${match.goals.home} - ${match.goals.away} 
${match.teams.away.name}</p>

<p class="live">${match.fixture.status.elapsed}' LIVE</p>

</div>

`

})

}

loadMatches();

setInterval(loadMatches,15000);

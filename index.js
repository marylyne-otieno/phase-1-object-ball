function gameObject(){
  return {
home: {
  teamName: "Brooklyn Nets",
  colors: ["Black", "White"],
  players: {
   "Alan Anderson": {
number: 0,
shoe: 16,
points: 22,
rebounds: 12,
assists: 12,
steals: 3,
blocks: 1,
slamDunks: 1,
    },
    "Reggie Evans": {
number: 30,
shoe: 14,
points: 12,
rebounds: 12,
assists: 12,
steals: 12,
blocks: 12,
slamDunks: 7,
    },
    "Brook Lopez":{
      number: 11,
      shoe: 17,
      points: 17,
      rebounds: 19,
      assists: 10,
      steals: 3,
      blocks: 1,
      slamDunks: 15,
    },
    "Mason Plumlee": {
      number: 1,
      shoe: 19,
      points: 26,
      rebounds: 12,
      assists: 6,
      steals: 3,
      blocks: 8,
      slamDunks: 5,
    },
  },

},

away:{
  teamName: "Charlotte Hornets",
  colors: ["Turquoise", "Purple"],
  players:{

    "Jeff Adrien": {
      number: 4,
      shoe: 18,
      points: 10,
      rebounds: 1,
      assists: 1,
      steals: 2,
      blocks: 7,
      slamDunks: 2,
    },
    "Bismark Biyombo": {
      number: 0,
      shoe: 16,
      points: 12,
      rebounds: 4,
      assists: 7,
      steals: 7,
      blocks: 15,
      slamDunks: 10,
    },
    "DeSagna Diop": {
      number: 2,
      shoe: 14,
      points: 24,
      rebounds: 12,
      assists: 12,
      steals: 4,
      blocks: 5,
      slamDunks: 5,
    },
    "Ben Gordon": {
      number: 8,
      shoe: 15,
      points: 33,
      rebounds: 3,
      assists: 2,
      steals: 1,
      blocks: 1,
      slamDunks: 0,
    },
    "Brendan Haywood": {
    number: 33,
    shoe: 15,
    points: 6,
    rebounds: 12,
    assists: 12,
    steals: 22,
    blocks: 5,
    slamDunks: 12,

    },
  },
},

  };

}
console.log(gameObject());
console.log(gameObject().home.players["Mason Plumlee"]);

function homeTeamName(){
  return gameObject()["home"]["teamName"];

}
console.log(homeTeamName());

function awayTeamName(){
  return gameObject()["away"]["teamName"];
}


console.log(awayTeamName());

function homeTeamColors(){
  return gameObject()["home"]["colors"];
}
console.log(homeTeamColors());

function awayTeamColors(){
  return gameObject()["away"]["colors"];
}
console.log(awayTeamColors());

function numPointsScored(playerName){
  let players = { ...gameObject().home.players, ...gameObject().away.players};
  return players[playerName] ? players[playerName].points : "player not found";
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
  let players = { ...gameObject().home.players, ...gameObject().away.players };
  return players[playerName] ? players[playerName].shoe : "Player not found";
}

console.log(shoeSize("Brook Lopez"));

function teamColors(teamName) {
  let obj = gameObject();
  if (obj.home.teamName === teamName) return obj.home.colors;
  if (obj.away.teamName === teamName) return obj.away.colors;
  return "Team not found";
}

console.log(teamColors("Brooklyn Nets"));

function playerNumbers(teamName){
  let obj = gameObject();
  let team = obj.home.teamName === teamName ? obj.home : obj.away.teamName === teamName ? obj.way : null;
  return team ? Object.values(team.players).map(player => player.number) : "Team not found";
}
console.log(playerNumbers("Charlotte Hornets"));


function playerStats(playerName) {
  let players = { ...gameObject().home.players, ...gameObject().away.players };
  return players[playerName] || "Player not found";
}

console.log(playerStats("Ben Gordon"));



function bigShoeRebounds() {
  let players = { ...gameObject().home.players, ...gameObject().away.players };
  let biggestShoePlayer = null;

  for (let player in players) {
      if (!biggestShoePlayer || players[player].shoe > players[biggestShoePlayer].shoe) {
          biggestShoePlayer = player;
      }
  }

  return players[biggestShoePlayer].rebounds;
}

console.log(bigShoeRebounds());







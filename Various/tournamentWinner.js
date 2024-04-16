/*

Algorithmic Tournament winner

An algorithmic tournament is underway, where teams of programmers compete to solve algorithmic problems as
quickly as possible.

The competition follows a round-robin format, with each team facing off against all other teams. Only two teams compete against each other at a time, and in each competition, one team is designated as the home team, while the other is the away team. There is always a clear winner and loser in each competition, with no ties. Teams earn 3 points for a win and 0 points for a loss. The overall winner of the tournament is the team with the highest total points.

Your task is to write a function that determines the winner of the tournament based on the results of the
competitions. The input consists of two arrays: competitions and results. The competitions array contains
pairs of teams represented as [homeTeam, awayTeam], where each team is a string of at most 30 characters.The results array indicates the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team won, and a 0 means that the away team won.

It is guaranteed that exactly one team will win the tournament, and each team will compete against all other teams exactly once. Additionally, the tournament will always have at least two teams.

*/

// VARIABLES

const competitions = [
  //[homeTeam, awayTeam]
    ['JavaScript','C#'], //c3
    ['C#','Python'], // python 3
    ['Python','JavaScript']
]

const results = [0,0,1] //  1 home team won, 0 away team won.

function determineWinner( competitionsMatrix, resultMatrix ){
    winnercompetitors = [];

    function winnerCompetitor( name ){
        for (let a = 0 ; a < winnercompetitors.length; a++){
            if (name === winnercompetitors[a][0]){
                newScore = winnercompetitors[a][1] + 3;
                winnercompetitors[a][1] = newScore;
                return false;
            } 
        }
        winnercompetitors.push([name,3]);
    }
    
    for (let i = 0; i < competitionsMatrix.length; i++) {
        if (resultMatrix[i]===0){
            winnerCompetitor( competitionsMatrix[i][1] )
        } else if (resultMatrix[i]===1){
            winnerCompetitor( competitionsMatrix[i][0] )
        }  
    }

    highestScore = winnercompetitors[0][1];
    winner = winnercompetitors[0][0];
    for (let k = 0; k < winnercompetitors.length; k++){
        if (winnercompetitors[k][1] > highestScore){
            winner = winnercompetitors[k][0];
            highestScore = winnercompetitors[k][1]; 
        }
    }
    return winner;
}

console.log(determineWinner( competitions, results ))

/*BETTER SOLUTION TAKEN FROM PLATZI*/

function tournamentWinner (competitions, results) {
    const scores = {}
    let winner = ''
  
    for (let i = 0; i < competitions.length; i++) {
      const [home, away] = competitions[i] // creates two variables.
      const winningTeam = results[i] === 0 ? away : home
  
      scores[winningTeam] = (scores[winningTeam] || 0) + 3 // If undefined assigned 0
      
      if (!winner || scores[winningTeam] > scores[winner]) {
        winner = winningTeam
      }
    }
  
    return winner
  }

  console.log(tournamentWinner(competitions, results))
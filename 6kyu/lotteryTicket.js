// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

array = [
  ["ABC", 74],
  ["HGR", 75],
  ["BYHT", 74],
];

function bingo(ticket, win){
  let miniWins = 0
  for (let i = 0; i < ticket.length; i++) {
    for( let j = 0; j < ticket[i][0].length; j++) {
      if (ticket[i][0][j].charCodeAt() === ticket[i][1]) {
          miniWins++
          break
        }
    }
  }
  if (miniWins >= win) return 'Winner!';
  return 'Loser!'
}

bingo(array, 2);

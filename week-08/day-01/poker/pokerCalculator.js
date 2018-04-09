'use strict';
module.exports = (blackHand, whiteHand) => {
  let row = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  let rowWithNames = ['2', '3', '4', '5', '6', '7', '8', '9', 'Ten', 'Jumbo', 'Queen', 'King', 'Ace'];
  let winner = '';
  let winnerCardValue = '';
  let winStrategy = '';
  let highestBIndex = row.indexOf(blackHand[4][0]);
  let highestWIndex = row.indexOf(whiteHand[4][0]);
  let whitePairIndex = -1;
  let blackPairIndex = -1;
  let whiteDrillIndex = -1;
  let blackDrillIndex = -1;
  let winnerBlackCardIndex = -1;
  let winnerWhiteCardIndex = -1;

  //High card:
  if (highestBIndex > highestWIndex) {
    winner = 'Black';
    winnerCardValue = rowWithNames[highestBIndex];
    winStrategy = 'High card';
  }

  if (highestWIndex > highestBIndex) {
    winner = 'White';
    winnerCardValue = rowWithNames[highestWIndex];
    winStrategy = 'High card';
  }

  //Pair:
  for (let i = 0; i < 4; i++) {
    if (blackHand[i][0] === blackHand[i + 1][0]) {
      blackPairIndex = i;
      winnerBlackCardIndex = row.indexOf(blackHand[blackPairIndex][0]);
    }
    if (whiteHand[i][0] === whiteHand[i + 1][0]) {
      whitePairIndex = i;
      winnerWhiteCardIndex = row.indexOf(whiteHand[whitePairIndex][0]);
    }
  }

  if (blackPairIndex !== -1 && winnerBlackCardIndex > winnerWhiteCardIndex) {
    winner = 'Black';
    winStrategy = 'Pair';
    winnerCardValue = rowWithNames[winnerBlackCardIndex];
  }

  if (whitePairIndex !== -1 && winnerBlackCardIndex < winnerWhiteCardIndex) {
    winner = 'White';
    winStrategy = 'Pair';
    winnerCardValue = rowWithNames[winnerWhiteCardIndex];
  }

  //Drill:
  for (let i = 0; i < 3; i++) {
    if (blackHand[i][0] === blackHand[i + 1][0] === blackHand[i + 2][0]) {
      blackPairIndex = i;
      winnerBlackCardIndex = row.indexOf(blackHand[blackPairIndex][0]);
    }
    if (whiteHand[i][0] === whiteHand[i + 1][0] === whiteHand[i + 2][0]) {
      whitePairIndex = i;
      winnerWhiteCardIndex = row.indexOf(whiteHand[whitePairIndex][0]);
    }
  }

  if (blackDrillIndex !== -1 && winnerBlackCardIndex > winnerWhiteCardIndex) {
    winner = 'Black';
    winStrategy = 'Drill';
    winnerCardValue = rowWithNames[winnerBlackCardIndex];
  }

  if (whiteDrillIndex !== -1 && winnerBlackCardIndex < winnerWhiteCardIndex) {
    winner = 'White';
    winStrategy = 'Drill';
    winnerCardValue = rowWithNames[winnerWhiteCardIndex];
  }
  

  return `${winner} wins! - (${winStrategy}: ${winnerCardValue})`;
}
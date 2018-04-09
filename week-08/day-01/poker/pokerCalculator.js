'use strict';
module.exports = (blackHand, whiteHand) => {
  let row = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  let rowWithNames = ['2', '3', '4', '5', '6', '7', '8', '9', 'Ten', 'Jumbo', 'Queen', 'King', 'Ace'];
  let winner = '';
  let winnerCardValue = '';
  let winStrategy = '';


  //High card:
  let highestBIndex = row.indexOf(blackHand[4][0]);
  let highestWIndex = row.indexOf(whiteHand[4][0]);

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
  let whitePairIndex = -1;
  let blackPairIndex = -1;
  let winnerBlackCardIndex = -1;
  let winnerWhiteCardIndex = -1;

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
  let whiteDrillIndex = -1;
  let blackDrillIndex = -1;
  let winnerBlackDrillIndex = -1;
  let winnerWhiteDrillIndex = -1;

  for (let i = 0; i < 3; i++) {
    if (blackHand[i][0] === blackHand[i + 1][0] && blackHand[i][0] === blackHand[i + 2][0]) {
      blackDrillIndex = i;
      winnerBlackDrillIndex = row.indexOf(blackHand[blackDrillIndex][0]);
    }
    if (whiteHand[i][0] === whiteHand[i + 1][0] && whiteHand[i][0] === whiteHand[i + 2][0]) {
      whiteDrillIndex = i;
      winnerWhiteDrillIndex = row.indexOf(whiteHand[whiteDrillIndex][0]);
    }
  }

  if (winnerBlackDrillIndex !== -1 && winnerBlackDrillIndex > winnerWhiteDrillIndex) {
    winner = 'Black';
    winStrategy = 'Drill';
    winnerCardValue = rowWithNames[winnerBlackDrillIndex];
  }

  if (winnerWhiteDrillIndex !== -1 && winnerBlackDrillIndex < winnerWhiteDrillIndex) {
    winner = 'White';
    winStrategy = 'Drill';
    winnerCardValue = rowWithNames[winnerWhiteDrillIndex];
  }

  //Flush:
  let winnerBlackFlushValue = -1;
  let winnerWhiteFlushValue = -1;
  let winnerBlackFlushIndex = -1;
  let winnerWhiteFlushIndex = -1;
  if (blackHand[0][1] === blackHand[1][1] &&
    blackHand[0][1] === blackHand[2][1] &&
    blackHand[0][1] === blackHand[3][1] &&
    blackHand[0][1] === blackHand[4][1]) {
    winnerBlackFlushValue = blackHand[4][0];
    winnerBlackFlushIndex = row.indexOf(winnerBlackFlushValue);
  }

  if (whiteHand[0][1] === whiteHand[1][1] &&
    whiteHand[0][1] === whiteHand[2][1] &&
    whiteHand[0][1] === whiteHand[3][1] &&
    whiteHand[0][1] === whiteHand[4][1]) {
    winnerWhiteFlushValue = whiteHand[4][0];
    winnerWhiteFlushIndex = row.indexOf(winnerWhiteFlushValue);
  }

  if (winnerBlackFlushIndex !== -1 && winnerBlackFlushIndex > winnerWhiteFlushIndex) {
    winner = 'Black';
    winStrategy = 'Flush';
    winnerCardValue = blackHand[0][1];
  }

  if (winnerWhiteFlushIndex !== -1 && winnerBlackFlushIndex < winnerWhiteFlushIndex) {
    winner = 'White';
    winStrategy = 'Flush';
    winnerCardValue = whiteHand[0][1];
  }

  return `${winner} wins! - (${winStrategy}: ${winnerCardValue})`;
}

import { input } from './input';

const rounds = input.split('\n');

// A for Rock
// B for Paper
// C for Scissors

// X for Rock
// Y for Paper
// Z for Scissors

// 0 if you lost
// 3 if the round was a draw
// 6 if you won
const getGameResult = (opponentMove: string, myMove: string) => {
  if (opponentMove === 'A' && myMove === 'X') return [3, 3];
  if (opponentMove === 'B' && myMove === 'Y') return [3, 3];
  if (opponentMove === 'C' && myMove === 'Z') return [3, 3];

  if (opponentMove === 'A' && myMove === 'Z') return [6, 0];
  if (opponentMove === 'B' && myMove === 'X') return [6, 0];
  if (opponentMove === 'C' && myMove === 'Y') return [6, 0];

  if (opponentMove === 'A' && myMove === 'Y') return [0, 6];
  if (opponentMove === 'B' && myMove === 'Z') return [0, 6];
  if (opponentMove === 'C' && myMove === 'X') return [0, 6];
};

// 1 for Rock
// 2 for Paper
// 3 for Scissors
const getChoosingResult = (opponentMove: string, myMove: string) => {
  const opponentVariants = ['A', 'B', 'C'];
  const myVariants = ['X', 'Y', 'Z'];

  return [
    opponentVariants.findIndex((variant) => variant === opponentMove),
    myVariants.findIndex((variant) => variant === myMove),
  ].map((item) => item + 1);
};

let myScore = 0;

for (const round of rounds) {
  const [opponentMove, myMove] = round.split(' ');

  const [opponentResult, myResult] = getGameResult(opponentMove, myMove);
  const [opponentChoosingScore, myChoosingScore] = getChoosingResult(
    opponentMove,
    myMove
  );

  myScore += myResult + myChoosingScore;
}

console.log(myScore);

import { input } from './input';

const sum = (input: number[]) => input.reduce((acc, item) => acc + item);

const backpacks = input
  .split('\n\n')
  .map((carry) => carry.split('\n').map(Number));

const backpacksByTotal = new Map<number, number[]>();
const totals: number[] = [];

for (const backpack of backpacks) {
  const total = sum(backpack);
  totals.push(total);

  // may be duplicates
  backpacksByTotal.set(total, backpack);
}

const top = Array.from(totals).sort((a, b) => b - a);

// problem 1
const max = top[0];
console.log(max);

// problem 2
const top3sum = sum(top.slice(0, 3));
console.log(top3sum);

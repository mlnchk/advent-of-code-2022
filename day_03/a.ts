import { input } from './input';

const getCommonItem = (sack: string) => {
  const sackSize = sack.length;

  const compartment1 = sack.slice(0, sackSize / 2).split('');
  const compartment2 = sack.slice(sackSize / 2).split('');

  const itemsMap: Record<string, number> = {};

  compartment1.forEach((item) => {
    if (compartment2.includes(item)) {
      itemsMap[item] = (itemsMap[item] || 0) + 1;
    }
  });

  return Object.entries(itemsMap)[0];
};

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
const getItemPriority = (item: string) => {
  'a'.charCodeAt(0); // 97
  'z'.charCodeAt(0); // 122
  'A'.charCodeAt(0); // 65
  'Z'.charCodeAt(0); // 90

  const charCode = item.charCodeAt(0);

  if (charCode >= 97) return charCode - 97 + 1;

  return charCode - 65 + 27;
};

const sacks = input.split('\n');

let score = 0;

for (const sack of sacks) {
  score += getItemPriority(getCommonItem(sack)[0]);
}

console.log(score);

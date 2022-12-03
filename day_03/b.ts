import { input } from './input';

const getCommonItem = (group: string) => {
  const sackSize = group.length;

  const [sack1, sack2, sack3] = group.split('\n');

  // console.log(group);

  for (const item1 of sack1) {
    for (const item2 of sack2) {
      if (item1 === item2) {
        // console.log(item1);
        for (const item3 of sack3) {
          if (item2 === item3) {
            return item3;
          }
        }
      }
    }
  }

  // const itemsMap: Record<string, number> = {};

  // compartment1.forEach((item) => {
  //   if (compartment2.includes(item)) {
  //     itemsMap[item] = (itemsMap[item] || 0) + 1;
  //   }
  // });

  // return Object.entries(itemsMap)[0];
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

for (let i = 0; i < sacks.length; i += 3) {
  const group = sacks.slice(i, i + 3);

  const commonItem = getCommonItem(group.join('\n'));

  score += getItemPriority(commonItem);
}

console.log(score);

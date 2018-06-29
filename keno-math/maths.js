const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const payTable = [
  null, null, null, null, null, // 0, 1, 2, 3, 4 pick: no winnings.
  [0, 0, 1, 2, 15, 75], // 5
  [0, 0, 0, 2, 6, 77, 150], // 6
  [0, 0, 0, 1, 3, 14, 300, 1e3], // 7
  [0, 0, 0, 1, 2, 5, 77, 200, 1e3], // 8
  [0, 0, 0, 0, 1, 6, 50, 166, 500, 1e3], // 9
  [0, 0, 0, 0, 1, 5, 10, 90, 275, 500, 1e3] // 10
];

const pick20 = () => {
  const picks = [];
  while (picks.length < 20) {
    const pick = getRandomIntInclusive(1, 80);
    if (!picks.includes(pick)) {
      picks.push(pick);
    }
  }
  return picks;
};

const getMatches = (pick20s, spots) => {
  const matched = [];
  spots.forEach(spot => {
    if (pick20s.includes(spot)) matched.push(spot);
  });
  
  return matched;
};

const getWinAmount = (numPicked, numMatched, wager) => payTable[numPicked][numMatched] * wager;

module.exports = { pick20, getMatches, getWinAmount };
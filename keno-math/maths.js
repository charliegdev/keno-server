const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const payTable = [
  null, null, null, null, // 0, 1, 2, 3 pick: no winnings.
  [0, 0, 1, 5, 81], 
  [0, 0, 1, 2, 15, 75], 
  [0, 0, 0, 2, 6, 77, 150], 
  [0, 0, 0, 1, 3, 14, 300, 1e3], 
  [0, 0, 0, 1, 2, 5, 77, 200, 1e3], 
  [0, 0, 0, 0, 1, 6, 50, 166, 500, 1e3], 
  [0, 0, 0, 0, 1, 5, 10, 90, 275, 500, 1e3]
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

export { getRandomIntInclusive, pick20, getMatches };
const uuidv4 = require("uuid/v4");
const { pick20, getMatches, getWinAmount } = require('./maths');

const getResponseObj = (userPicks, wager) => {
  const spotsDrawn = pick20();
  const matchedNumbers = getMatches(spotsDrawn, userPicks);
  const reward = getWinAmount(userPicks.length, matchedNumbers.length, wager);
  const id = uuidv4();

  // As pre requested in the email: the response includes a unique draw ID, the user’s input, the numbers drawn, winnings, and current timestamp.
  // This response structure reflects the Caveman game response.data, minus the eggs.
  return { 
    draw: {
      created: (new Date()).toISOString(),
      hit_count: matchedNumbers.length,
      id,
      reward,
      spots_count: userPicks.length,
      spots_drawn: spotsDrawn,
      spots_played: userPicks, 
      wager
    },
    id, 
    wager,
  };
};

module.exports = getResponseObj;

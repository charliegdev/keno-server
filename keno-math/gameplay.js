const uuidv4 = require("uuid/v4");
const { pick20, getMatches, getWinAmount } = require('./maths');

const getResponseObj = (userPicks, wager) => {
  const spotsDrawn = pick20();
  const matchedNumbers = getMatches(spotsDrawn, userPicks);
  const reward = getWinAmount(userPicks.length, matchedNumbers.length, wager);
  const id = uuidv4();

  // As pre requested in the email: the response includes a unique draw ID, the user’s input, the numbers drawn, winnings, and current timestamp.
  // The extra hierarchy of an extra level of "data" is unnecessary for application to work.
  // It's there only to make this response mimic the current caveman response.
  return { 
    data: {
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
      reward_key: uuidv4(),
      wager,
      winner: reward > 0
    },
    type: "basicKeno#play"
  };
};

module.exports = getResponseObj;

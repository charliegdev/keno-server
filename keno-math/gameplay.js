import { pick20, getMatches } from './maths';

const getPickResult = userPicks => {
  const serverPicks = pick20();
  const matchedNumbers = getMatches(serverPicks, userPicks);

  return matchedNumbers;
};

const getResponseObj = (userPicks, wager) => {
  const result = getPickResult(userPicks);
};

export default getResponseObj;

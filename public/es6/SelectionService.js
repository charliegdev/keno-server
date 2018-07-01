// This service generates all the data needed on the front-end to simulate a user pick.
angular.module("KenoApp").factory("SelectionService", [function () {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Randomly pick 5 to 10 numbers from 1 - 80.
  const generateUserSelection = () => {
    const numSelected = getRandomIntInclusive(5, 10);
    const spots = [];
    for (let i = 0; i < numSelected; i++) {
      spots.push(getRandomIntInclusive(1, 80));
    }

    return spots;
  };

  // Assume user bets between $1 to $100 for testing purpose. Actual server can handle much more.
  const generateWager = () => getRandomIntInclusive(1, 100);

  const service = { generateUserSelection, generateWager };
  return service;
}]);
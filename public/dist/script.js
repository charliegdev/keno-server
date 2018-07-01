"use strict";

angular.module("KenoApp", ['ngAnimate']);
"use strict";

angular.module("KenoApp").controller("KenoController", ["KenoService", function (KenoService) {
  var _this = this;

  this.results = [];
  var number = 0;
  this.startGame = function () {
    KenoService.startGame().then(function (_ref) {
      var data = _ref.data;
      var _data$data$draw = data.data.draw,
          spots_played = _data$data$draw.spots_played,
          hit_count = _data$data$draw.hit_count,
          wager = _data$data$draw.wager,
          reward = _data$data$draw.reward;

      _this.results.push({ number: number, spots_played: spots_played, hit_count: hit_count, wager: wager, reward: reward });
      number++;
    }, function (error) {
      console.error("Response error:");
      console.error(error);
    });
  };

  this.clearRecords = function () {
    _this.results.length = 0;
    number = 0;
  };
}]);
"use strict";

angular.module("KenoApp").factory("KenoService", ["$http", "SelectionService", function ($http, SelectionService) {
  var service = {};
  service.startGame = function () {
    return $http.post("/races", {
      spots: SelectionService.generateUserSelection(),
      status: "calling",
      tutorial: false,
      wager: SelectionService.generateWager()
    });
  };

  return service;
}]);
"use strict";

// This service generates all the data needed on the front-end to simulate a user pick.
angular.module("KenoApp").factory("SelectionService", [function () {
  var getRandomIntInclusive = function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Randomly pick 5 to 10 numbers from 1 - 80.
  var generateUserSelection = function generateUserSelection() {
    var numSelected = getRandomIntInclusive(5, 10);
    var spots = [];
    for (var i = 0; i < numSelected; i++) {
      spots.push(getRandomIntInclusive(1, 80));
    }

    return spots;
  };

  // Assume user bets between $1 to $100 for testing purpose. Actual server can handle much more.
  var generateWager = function generateWager() {
    return getRandomIntInclusive(1, 100);
  };

  var service = { generateUserSelection: generateUserSelection, generateWager: generateWager };
  return service;
}]);

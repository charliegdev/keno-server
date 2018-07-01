angular.module("KenoApp").factory("KenoService", ["$http", "SelectionService", function ($http, SelectionService) {
  const service = {};
  service.startGame = () => $http.post("/races", {
    spots: SelectionService.generateUserSelection(),
    status: "calling",
    tutorial: false,
    wager: SelectionService.generateWager()
  });

  return service;
}]);
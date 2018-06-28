angular.module("KenoApp").controller("KenoController", ["KenoService", function (KenoService) {
  this.startGame = () => {
    KenoService.startGame();
  };
}]);
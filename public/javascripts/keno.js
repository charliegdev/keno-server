angular.module("kenoApp", [])
  .controller("KenoController", ["KenoService", function (KenoService) {
    this.startGame = () => {
      console.log("start!");
    };
  }])
  .factory("KenoService", ["$http", function ($http) {
    return {};
  }]);
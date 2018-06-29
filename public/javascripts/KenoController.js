angular.module("KenoApp").controller("KenoController", ["KenoService", function (KenoService) {
  this.results = [];
  let number = 0;
  this.startGame = () => {
    KenoService.startGame().then(({ data }) => {
      const { spots_played, wager, draw } = data;
      this.results.push({ number, spots_played, wager, reward: draw.reward });
      number++;
    }, error => {
      console.error(error);
    });
  };

  this.clearRecords = () => { 
    this.results.length = 0;
    number = 0; 
  };
}]);
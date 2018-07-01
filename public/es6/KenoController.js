angular.module("KenoApp").controller("KenoController", ["KenoService", function (KenoService) {
  this.results = [];
  let number = 0;
  this.startGame = () => {
    KenoService.startGame().then(({ data }) => {
      const { spots_played, hit_count, wager, reward } = data.data.draw;
      this.results.push({ number, spots_played, hit_count, wager, reward });
      number++;
    }, error => {
      console.error("Response error:");
      console.error(error);
    });
  };

  this.clearRecords = () => { 
    this.results.length = 0;
    number = 0; 
  };
}]);
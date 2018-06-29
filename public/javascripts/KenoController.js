angular.module("KenoApp").controller("KenoController", ["KenoService", function (KenoService) {
  this.results = [];
  let number = 0;
  this.startGame = () => {
    KenoService.startGame().then(({ data }) => {
      this.results.push({ 
        number,
        spots: data.spots,
        wager: data.wager,
        won: data.won
      });
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
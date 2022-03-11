const newGameMsg = '<div class="alert alert-dark" id="demo" role="alert">'+
           '<strong>New Game Has Started</strong> '+'</div>';
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve(newGameMsg); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("liveToastBtn").innerHTML = value;
});

let randomNumber = Math.ceil(Math.random()* 100);
const hardCodeRandomNum = 55;

function myGuess() {

 console.log(randomNumber);

  const GuessNumber = document.querySelector( "#guessNumber").value;

    if(GuessNumber == randomNumber) {
            
            // Restart a new game after 5 seconds
            var timeleft = 5;
            var downloadTimer = setInterval(function(){
              if(timeleft <= 0){
                clearInterval(downloadTimer);
                window.location.reload();
                alert("New game started!");
              } else {

              }
              timeleft -= 1;
            }, 500);

            var success = '<div class="alert alert-primary" id="demo" role="alert">'+
            '<strong>Correct, the secret number is</strong> ' + randomNumber + ' <br> New Game starts in <strong>' + timeleft + '</strong> Seconds'
            +'</div>';
          }

          else {

            if( randomNumber > GuessNumber){
              var success = '<div class="alert alert-warning" id="demo" role="alert">'+
           '<strong>Your guess is too Low</strong> '+'</div>';
            }
            else if( randomNumber < GuessNumber){
              var success = '<div class="alert alert-danger" id="demo" role="alert">'+
           '<strong>Your guess is too high</strong> '+'</div>';
            }

         }

      if (GuessNumber > 100){
        var success = '<div class="alert alert-info" id="demo" role="alert">'+
            '<strong>Error, Number Cannot be bigger than 100</strong> '
            +'</div>';
    }
    else if (GuessNumber <= 0){
        var success = '<div class="alert alert-info" id="demo" role="alert">'+
            '<strong>Error, Number Cannot be smaller than 0</strong> '
            +'</div>';
    }


   document.getElementById("demo").innerHTML = success;
}


function refreshPage() {

  window.location.reload();

  alert("New Game Start!");
}



module.exports = {
  getHardCodeRandomNum: function(hardCodeRandomNum){
    return hardCodeRandomNum;
  },
  getRandomNum: function(RandomNum){
    return RandomNum;
  },

}

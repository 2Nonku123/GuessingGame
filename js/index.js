function myGuess() {


   /*To generate a number that is a whole number rounded down between
   1 and 100 */
    //var answer = Math.floor(Math.random() * 100) + 1 ;


    // for a fixed answer use me
    var answer = 34;

    var guess = document.querySelector("#number").value;

    for(i=0; i<3; i++) {

      if(answer == guess) {
            // alert("you guessed correctly");
            console.log(guess);
            var success = '<div class="alert alert-primary" id="demo" role="alert">'+
            '<strong>You Got It Correct Congratulations</strong> ' + guess
            +'</div>';
          }

          else {

            if( guess < answer){
              var success = '<div class="alert alert-warning" id="demo" role="alert">'+
           '<strong>Your Number Is Too Low</strong> '+'</div>';
            }
            else if( guess > answer){
              var success = '<div class="alert alert-danger" id="demo" role="alert">'+
           '<strong>Your Number Is Too High</strong> '+'</div>';
            }

         }

       }


       document.getElementById("demo").innerHTML = success;
     }


     function refreshPage() {

       window.location.reload();

        alert("New Game Start!");
     }

     

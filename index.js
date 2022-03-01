let randomNumber = Math.ceil(Math.random()* 100)




const GuessNumber = document.querySelector('.guessNumber')
const btnGuess = document.querySelector('.btnGuess')
const btnRefresh = document.querySelector('.btnRefresh')
const message = document.querySelector('.message')




function btnClicked() {
   
    const guessedNo = Number(GuessNumber.value);

    if( guessedNo < randomNumber){
      message.innerHTML = "Your guess is too low";
      }
      else if( guessedNo > randomNumber){
        message.innerHTML = "Your guess is too high";
      }else{
        message.innerHTML = `Correct, the secret number is ${guessedNo}`;
        randomNumber = Math.ceil(Math.random()* 100)
        count = -1;
        setTimeout(function() { alert("New game starting!"); }, 100);
      }

      if (guessedNo > 100){
        message.innerHTML = "Error, Number Cannot be bigger than 100";
    }
    else if (guessedNo < 0){
        message.innerHTML = "Error, Number Cannot be smaller than 0";
    }

    

    
    

     
      setTimeout(function(){
        message.innerHTML = ""
      }, 3000);
     
 
}

function refreshBtnClicked (){
  randomNumber = Math.ceil(Math.random()* 100)


  alert("New Number Generated!");
}


    btnGuess.addEventListener('click', btnClicked)
    btnRefresh.addEventListener('click', refreshBtnClicked)

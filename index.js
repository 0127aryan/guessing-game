let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);

let numGuesses = 0;
btn.addEventListener('click', () => {
    guessesNumer();
})

function guessesNumer() {
    if (input.value<1 || input.value>100|| isNaN (input.value))
        wrng.innerHTML = "Enter Between 1 to 100";

    else{
        numGuesses ++;
        guesses.innerHTML = "No. Of Guess :" +numGuesses;

        if(input.value > answer){
            wrng.innerHTML = "You Guesses Too High!";
            input.value = "";
        }
        else if(input.value < answer){
            wrng.innerHTML = "You Guesses Too Low!";
            input.value = "";
        }
        else{
            wrng.innerHTML = "Congratulations you guessed the correct answer!"
            setTimeout(()=> {
                resetgame();
            },5000)
        }
        
    }
}    

function resetgame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guesses.innerHTML = "No. of Guess: 0";

}



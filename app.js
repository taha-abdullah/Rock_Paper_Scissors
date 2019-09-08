var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber =  Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    switch(letter) {
        case "r":
            return "Rock" ;
            break;
        case "p":
            return "Paper" ;
            break;
        case "s":
            return "Scissors" ;
            break;
    }

}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You Win! 🔥` ;
    document.getElementById(user).classList.add('green-glow');
}

function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(comp)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose... 😞` ;
}

function draw(user) {
    result_p.innerHTML = `Both picked ${convertToWord(user)}. It's a draw.`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();























































const rules = {
    rock: { beats: ["scissor", "lizard"] },
    paper: { beats: ["rock", "spock"] },
    scissor: { beats: ["paper", "lizard"] },
    lizard: { beats: ["spock", "paper"] },
    spock: { beats: ["scissor", "rock"] }
};

var drawScore = document.querySelector('.d-count');
var playerScore = document.querySelector('.p-count');
var computerScore = document.querySelector('.c-count');
var moves  = document.querySelector('.movesLeft');
var result = document.querySelector('.result');



function playgame(){
    
    rockBtn= document.querySelector('.rock');
    paperBtn= document.querySelector('.paper');
    scissorBtn= document.querySelector('.scissor');
    lizardBtn = document.querySelector('.lizard');
    spockBtn = document.querySelector('.spock');
    const  options = ['rock' , 'paper' , 'scissor' , 'lizard' , 'spock'];
    const playerOptions = [rockBtn, paperBtn, scissorBtn , lizardBtn, spockBtn];
    document.querySelector('.material-icons').addEventListener('click', () => {
        alert(JSON.stringify(rules, null, 1));

    });

    playerOptions.forEach((option) => {
        option.addEventListener('click', function(){
            userOptionSelected = option.className;
            computerOptionSelected = computerPlay(options);
            document.querySelector('.userChoose').textContent = 'You chose: '  + userOptionSelected;
            document.querySelector('.compChoose').textContent = 'Computer chose:  ' + computerOptionSelected;
            moveschg();
            calcResult(userOptionSelected, computerOptionSelected);
            let movesCount = moves.textContent.match(/\d+/)[0];

            if( movesCount== 0){
               
                
                reloadGame(playerOptions);
                
            }
            

            
            resultNow();
            //console.log(moves.textContent.match(/\d+/)[0]);
            
            
            


        });
    });

    
}


function calcResult(userOptionSelected, computerOptionSelected) {
    // if (userOptionSelected === 'rock' && computerOptionSelected === 'paper') {
    //     computerScore.textContent = parseInt(computerScore.textContent) + 1;
    // }

    // else if (userOptionSelected === 'rock' && computerOptionSelected === 'scissor') {
    //     playerScore.textContent = parseInt(playerScore.textContent) + 1;
    // }
    // else if (userOptionSelected === 'paper' && computerOptionSelected === 'rock') {
    //     playerScore.textContent = parseInt(playerScore.textContent) + 1;
    // }
    // else if (userOptionSelected === 'paper' && computerOptionSelected === 'scissor') {
    //     computerScore.textContent = parseInt(computerScore.textContent) + 1;
    // }
    // else if (userOptionSelected === 'scissor' && computerOptionSelected === 'rock') {
    //     computerScore.textContent = parseInt(computerScore.textContent) + 1;
    // }
    // else if (userOptionSelected === 'scissor' && computerOptionSelected === 'paper') {
    //     playerScore.textContent = parseInt(playerScore.textContent) + 1;

    // } else if (userOptionSelected === computerOptionSelected) {
    //     drawScore.textContent = parseInt(drawScore.textContent) + 1;
    // }

    
    if(userOptionSelected===computerOptionSelected){
        drawScore.textContent = parseInt(drawScore.textContent) + 1;
    }else if(rules[userOptionSelected].beats.includes(computerOptionSelected)){   
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }else{
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}

function resultNow() {
    
    

    if (playerScore.innerHTML == computerScore.innerHTML) {
        result.textContent = 'Tie';
        result.style.cssText = 'color: yellow;font-weight: bold; font-size: 50px;';
    }
    else if (playerScore.innerHTML > computerScore.innerHTML) {
        result.textContent = 'Player Wins';
        result.style.cssText = 'color: green; font-weight: bold; font-size: 50px;';
    }
    else {
        result.textContent = 'Computer Wins';
        result.style.cssText = 'color: red; fonr-weight: bold; font-size: 50px;';
    }
    
}

function computerPlay(options){
    let random = Math.floor(Math.random()* options.length);
    return options[random];    
}

function moveschg(){
    movesCount = moves.textContent.match(/\d+/)[0];
    if(movesCount != 0){
        moves.textContent = moves.textContent.replace(/\d+/, movesCount-1);
    }
}

function reloadGame(playerOptions){
    var movesText = document.querySelector('.movesText');
    var reloadBtn = document.querySelector('.reload');


    reloadBtn.style.display = 'block';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
    playerOptions.forEach((option) => {
        option.style.display = 'none';
    });

    movesText.innerHTML = 'Game Over';
    movesText.style.cssText = 'text-align: center; font-size: 50px; color: red; font-weight: bold;';
    moves.style.cssText= 'display: none;';

}


playgame();
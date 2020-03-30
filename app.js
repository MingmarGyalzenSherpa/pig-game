var totalScore, roundScore, activePlayer,player1,player2,gamePlaying;

// NEXT PLAYER

function nextPlayer(){
    roundScore = 0;
    document.querySelector('.player-0-side').classList.toggle('active');
    document.querySelector('.player-1-side').classList.toggle('active');
    document.querySelector('.current-score-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;     

}


function init(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = 1;
    player1 = prompt('Enter Player 1 name:');
    player2 = prompt('Enter player 2 name:');
    document.querySelector('.player-0-name').textContent = player1;
    document.querySelector('.player-1-name').textContent = player2;
    document.querySelector('.current-score-0').textContent = 0;
    document.querySelector('.current-score-1').textContent = 0;
    document.querySelector('.player-0-side').classList.remove('active');
    document.querySelector('.player-1-side').classList.remove('active');
    document.querySelector('.player-0-totalScore').textContent = 0;
    document.querySelector('.player-1-totalScore').textContent = 0;

    document.querySelector('.player-0-side').classList.add('active');


    dice_hide(0);
}
init();

// Dice hide
function dice_hide(flag){
    if(flag === 0)
    {

        document.querySelector('.dice').style.display = 'none';
    }
    else{
        document.querySelector('.dice').style.display = 'block';
    }
}

document.querySelector('.btn-roll-game').addEventListener('click',function(){
    if(gamePlaying)
    {

        var dice;
        dice = Math.floor(Math.random()*6)+1;
        if(dice !== 1)
        {
            roundScore += dice;
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            dice_hide(1);
            document.querySelector('.current-score-' + activePlayer).textContent = roundScore;
        
        }
        else{
            
            // DICE HIDE
            dice_hide(0);
    
            // NEXT PLAYER
            nextPlayer();
        }
    }

})

document.querySelector('.btn-hold-game').addEventListener('click', function(){

    if(gamePlaying){

        var winner;
    
        // adding the total score
        totalScore[activePlayer] += roundScore;
        
        // displaying the total score
        document.querySelector('.player-'+ activePlayer + '-totalScore').textContent = totalScore[activePlayer];
    
    
        if(totalScore[activePlayer] >= 100)
        {
            if(activePlayer === 0){
                winner = player1;
            }else{
                winner = player2;
            }
            alert( winner + ' won . CONGRATS!!');
    
            // INITIALIZING THE GAME
            gamePlaying = 0;
        } else{
            
            // HIDE DICE
            dice_hide(0);
            
            // NEXT PLAYER
            nextPlayer();
        }
    }

})

document.querySelector('.btn-new-game').addEventListener('click', init);

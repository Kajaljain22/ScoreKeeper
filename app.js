window.onload = function() {

    const p1Button = document.querySelector('#p1Button');
    const p2Button = document.querySelector('#p2Button');
    const resetButton = document.querySelector('#reset');
    
    const p1Display = document.querySelector('#p1Display');
    const p2Display = document.querySelector('#p2Display');
    
    let p1Score = 0;
    let p2Score = 0;
    let winningScore = 5;
    let isGameOver = false;
    
    p1Button.addEventListener('click',function() {
        if(!isGameOver) 
        {
            p1Score += 1;
            p1Display.textContent = p1Score;
            isGameOver = p1Score === winningScore;
        }
    })
    
    p2Button.addEventListener('click',function() {
        if(!isGameOver) 
        {
            p2Score += 1;
            p2Display.textContent = p2Score;
            isGameOver = p2Score === winningScore;
        }
    })

    resetButton.addEventListener('click', reset)

    const maxScoreList = document.querySelector('#maxScore');

    maxScoreList.addEventListener('change', function() {
        winningScore = parseInt(this.value);
        reset();
    })

    function reset() {
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
        isGameOver = false;
    }

}

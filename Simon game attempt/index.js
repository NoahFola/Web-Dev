let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let score = 0;


let startGame = ()=>{
    $(document).on('keypress',()=>{
    setTimeout(() => {nextSequence()}, 200);
    $(document).off('keypress')
});
};
startGame();



const selfFlash = (colour)=>{
    let Pclass = $("div#" + colour).attr('class');
    $("div#" + colour).attr('class', Pclass +" pressed");    
    setTimeout(() => {$("div#" + colour).attr('class',Pclass)}, 100);    
    playSound(colour)        
};

const playSound  = (name)=>{
    let sound = new Audio("sounds/"+name+".mp3");
    sound.play();
};


function checkNow(){
    for(i=0;i<userClickedPattern.length;i++){
        if (gamePattern[i]===userClickedPattern[i]){}
        else{
        let bclass = $('body').attr('class');
        playSound('wrong');
        $('body').attr('class', bclass + ' game-over');
        setTimeout(() => {$('body').removeClass('game-over')}, 200);
        $('h1').html('Game over, press any button to restart');
        gamePattern = [];
        level=0;
        startGame();

    }
}};

function checkAnswer (){

        
        for(i=0;i<gamePattern.length;i++){
            if (gamePattern[i]===userClickedPattern[i]){
                score++
                }
            }
        
        if(score == gamePattern.length){
            setTimeout(() => {
                $('body').addClass('correct');
                $('h1').html("Correct!!")
                setTimeout(() => {
                    $('body').removeClass('correct');
                }, 200);
            }, 50);
            setTimeout(() => {nextSequence()}, 2000);
        }
};  


function nextSequence(){
    userClickedPattern = [];
    score = 0;
    let l = level+1;
    $('h1').html("Level "+l);
    level++;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour)
    selfFlash(randomColour);
};




let btnList = ($(".btn"));
for (i=0; i<btnList.length; i++){
    let j = i + 1 - 1;
    $(btnList[i]).on('click',()=>{
        let Pclas = $(btnList[j]).attr('class');
        $(btnList[j]).attr('class', Pclas +" pressed");
        setTimeout(() => {$(btnList[j]).attr('class',Pclas)}, 100);
        let userChosenColour = $(btnList[j]).attr('id');
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        checkNow();
     
    })
};
for (i=0; i<btnList.length; i++){
    let j = i + 1 - 1;
    $(btnList[i]).on('click',()=>{
        if(gamePattern.length == userClickedPattern.length){
            checkAnswer()
        }
    });
}


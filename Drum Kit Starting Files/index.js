let Button = document.getElementsByClassName("drum");

for(let i =0 ; i<Button.length ; i++){
    Button[i].addEventListener("click" , function(){
        buttonAnimation(this.innerHTML)
        var buttonInnerhtml = this.innerHTML;
        switch (buttonInnerhtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
             case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
             case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;   
             case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;
             case "j":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;
             case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;
             case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;        
            default:
                break;
        }
    })
}

document.addEventListener("keypress" , function(e){
    buttonAnimation(e.key)
    switch (e.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
         case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
         case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;   
         case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
         case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
         case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
         case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;         
        default:
            break;
        } 
    }
)

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed")
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    } , 100)
}
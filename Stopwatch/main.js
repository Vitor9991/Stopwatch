window.onload = function(){
    var seconds = 00;
    var minutes = 00;
    var appendMinutes = document.getElementById("minutes")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById("button-start")
    var buttonStop = document.getElementById("button-stop")
    var buttonReset = document.getElementById("button-reset")
    var interval;
    
    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }
    
    buttonReset.onclick = function(){
        clearInterval(interval);
        minutes = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        minutes++;
        if(minutes <= 9){
            appendMinutes.innerHTML = "0" + minutes;
        }
        
        if(minutes > 9){
            appendsMinutes.innerHTML = tens;
        }

        if(minutes > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0"
            minutes = 0;
            appendsMinutes.innerHTML = "0" + 0;
        }
        
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}
function countdown(){
    const outputElement = document.getElementById("outputBox");
    let alertSound = new Audio();
    alertSound.src = "./resources/Alert.wav";
    alertSound.volume = 0.5;
    let timeLeft = document.getElementById("inputTime").value;
    timeLeft = parseInt(timeLeft, 10);
    if (document.getElementById("minutes").checked === true){
        timeLeft *= 60;
    }
    outputElement.innerHTML = timeLeft;
    function tick(){
        //console.log("Tick");
        if (timeLeft == 0) {
            //console.log("Timer complete.")
            alertSound.play();
            outputElement.innerHTML = "Time is Up!";
            function alertFunct() {
                alert("Time is up!");
            }
            setTimeout(alertFunct, 10);
        }
        else {
            //console.log("Time before update: " + timeLeft);
            timeLeft -= 1;
            //console.log("Time after update: " + timeLeft);
            outputElement.innerHTML = timeLeft;
            //console.log("Updates complete, scheduling next tick.")
            setTimeout(tick, 1000);
        }
    }
    setTimeout(tick, 100);
}
//console.log("Page Loaded.");
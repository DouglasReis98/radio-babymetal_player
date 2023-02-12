const player = document.getElementById("player");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");
const ctrlVol = document.getElementById("ctrlVol");
const btnVol = document.getElementById("btnVol");
console.log(btnPlay)


btnPlay.addEventListener("click", function() {
    player.play();
});

btnPause.addEventListener("click", function() {
    player.pause();
});

btnStop.addEventListener("click", function() {
    player.pause();
    player.currentTime = 0;
    player.load();
});

ctrlVol.addEventListener("input", function() {
    player.volume = ctrlVol.value;
});

btnVol.addEventListener("click", function() {
    if (player.muted != true) {
        player.muted = true;
    } else {
        player.muted = false;
    }

});

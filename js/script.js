const player = document.getElementById("player");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");
const ctrlVol = document.getElementById("ctrlVol");
const btnVol = document.getElementById("btnVol");
const currentVol = ctrlVol.value;
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
        player.volume = ctrlVol.value = 0;
        btnVol.getElementsByTagName("i")[0].classList.remove('fa-volume-high');
        btnVol.getElementsByTagName("i")[0].classList.add('fa-volume-xmark');
    } else {
        player.muted = false;
        player.volume = ctrlVol.value = currentVol;
        btnVol.getElementsByTagName("i")[0].classList.remove('fa-volume-xmark');
        btnVol.getElementsByTagName("i")[0].classList.add('fa-volume-high');
    }

});

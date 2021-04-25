///fetch elements

const songs = ['Jetson', 'fastfree', 'MUJA'];
const musicBox = document.querySelector('.music-box');
const volumeControl = document.querySelector('#volume-control');
const progressContainer = document.getElementById('progress-bar');
let totalDuration = document.querySelector('.Total-duration');
let currentDuration = document.querySelector('.currentTime');
const playButton = document.querySelector('#play');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const cover = document.querySelector('.cover');
console.log(playButton);
//iNITIALLY LOAD SONG DETAILS INTO DOM

const audio = document.getElementById('player');
const progress = document.getElementById('progress');
let songIndex = 0;
////////----Update Progress Bar-----//////

function updateProgress(e) {
const {duration, currentTime } = e.srcElement; //srcElement is the audio 
const progressPercent = (currentTime/ duration ) *100;
progress.style.width = `${progressPercent}%`;

var s = parseInt(audio.duration % 60);
var m = parseInt((audio.duration / 60) % 60);

// totalDuration.innerHTML = m + ':' + s;

var sec = parseInt(audio.currentTime % 60);
if(sec < 10) {
    sec =  '0' + sec;
}
else (sec)
var min = parseInt((audio.currentTime / 60) % 60);
currentDuration.innerHTML = min + ':' + sec ;
}

volumeControl.addEventListener('change', () => {
    audio.volume = (volumeControl.value) / 100;
})


//Update Song Details
loadSong(songs[songIndex]);

function loadSong(song) {
    audio.src = `assets/audio/${song}.m4a`;
}



function updateDuration(e) {
const width = this.clientWidth;
console.log(width);
const clickPosition = e.offsetX;
console.log(clickPosition);
const duration = audio.duration;
audio.currentTime = (clickPosition / width ) * duration;
}
function playSong () {
    musicBox.classList.add('playing');
    playButton.querySelector('.fas').classList.remove('fa-play');
    playButton.querySelector('.fas').classList.add('fa-pause');
    audio.play();
    cover.classList.add('rotate');
}

function pauseSong () {
    musicBox.classList.remove('playing');
    playButton.querySelector('.fas').classList.remove('fa-pause');
    playButton.querySelector('.fas').classList.add('fa-play');
    audio.pause();
    cover.classList.remove('rotate');

}

playButton.addEventListener('click', () => {
    const isPlaying = musicBox.classList.contains('playing');
    isPlaying ? pauseSong() : playSong();
})


//Time - song update
audio.addEventListener('timeupdate', updateProgress);

//Click on Progress Bar to update song

progressContainer.addEventListener('click', updateDuration)

prevButton.addEventListener('click', () => {
    audio.currentTime = 0;
})

nextButton.addEventListener('click', () => {
    audio.currentTime = audio.currentTime + 10;
})
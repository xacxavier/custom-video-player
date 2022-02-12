//selectors
const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");
const fullscreen = document.querySelector("#fullscreenBtn");

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", switchPlayIcon);
video.addEventListener("play", switchPlayIcon);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("dblclick", toggleFullScreen);
play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
fullscreen.addEventListener("click", toggleFullScreen);

// Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
    /* Safari */
  } else if (elem.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
    /* IE11 */
  } else if (elem.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

// update play/pause icon
function switchPlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

var videos = document.querySelectorAll("video");
var currentVideoIndex = 0;

function playNextVideo() {
  videos[currentVideoIndex].pause();
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].currentTime = 0;
  videos[currentVideoIndex].play();
}

function handleClick() {
  document.removeEventListener("click", handleClick);
  playNextVideo();
}

document.addEventListener("click", handleClick);
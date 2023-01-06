const posterImg = document.querySelector(".video-poster");
const playVideo = document.querySelector(".video-play");

posterImg.addEventListener("click", playHidden);

function playHidden() {
  posterImg.classList.add("visually-hidden");
  playVideo.play();
  posterImg.removeEventListener("click", playHidden);
}

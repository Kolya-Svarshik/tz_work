var posterImg=document.querySelector(".video-poster"),playVideo=document.querySelector(".video-play");function playHidden(){posterImg.classList.add("visually-hidden"),playVideo.play(),posterImg.removeEventListener("click",playHidden)}posterImg.addEventListener("click",playHidden);
//# sourceMappingURL=index.9fe412b1.js.map

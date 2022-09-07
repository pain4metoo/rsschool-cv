"use strict";
const showPlayer = document.querySelector(".header_video_block");
const videoInner = document.querySelector(".video");
const video = document.querySelector(".video_main");
const videoControls = document.querySelector(".video_controls");
const btnClose = document.querySelector(".video_btn_close");
const btnPlayMini = document.querySelector(".video_control_play");
const btnPauseMini = document.querySelector(".video_control_pause");
const btnPlayLarge = document.querySelector(".video_btn_play");
const progressBlock = document.querySelector(".video_control_progress");
const progress = document.querySelector(".video_control_line");
const progressDumb = document.querySelector(".video_control_marker");
const btnSound = document.querySelector(".video_control_sound");
const volume = (document.querySelector(".video_control_volume"));
const btnFullL = document.querySelector(".video_control_full");
const videoBg = document.querySelector(".header_video_inner");
window.onload = function () {
    if (video) {
        video.volume = 0.4;
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
};
const showVideo = () => {
    videoInner === null || videoInner === void 0 ? void 0 : videoInner.classList.remove("video_hiden");
};
const closeVideo = () => {
    videoInner === null || videoInner === void 0 ? void 0 : videoInner.classList.add("video_hiden");
    stopVideo();
    if (document.fullscreenElement) {
        fullScreen();
    }
};
const playVideo = () => {
    video === null || video === void 0 ? void 0 : video.play();
    if (btnPlayMini && btnPauseMini && btnPlayLarge) {
        btnPlayMini.style.display = "none";
        btnPauseMini.style.display = "block";
        btnPlayLarge.style.display = "none";
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
};
const stopVideo = () => {
    video === null || video === void 0 ? void 0 : video.pause();
    if (btnPauseMini && btnPlayMini && btnPlayLarge) {
        btnPauseMini.style.display = "none";
        btnPlayMini.style.display = "block";
        btnPlayLarge.style.display = "block";
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
};
const progresVideo = () => {
    if (progress && video && progressBlock && progressDumb) {
        const progressLine = (video.currentTime / video.duration) * progressBlock.clientWidth;
        progress.style.width = `${progressLine}px`;
        progressDumb.style.transform = `translateX(${progressLine}px)`;
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
    if ((video === null || video === void 0 ? void 0 : video.currentTime) === (video === null || video === void 0 ? void 0 : video.duration)) {
        stopVideo();
    }
};
const fullScreen = () => {
    if (!document.fullscreenElement) {
        videoInner === null || videoInner === void 0 ? void 0 : videoInner.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
};
const setProgress = (e) => {
    let width = progressBlock === null || progressBlock === void 0 ? void 0 : progressBlock.clientWidth;
    let pos = e.offsetX;
    e.value = (100 * pos) / width;
    if (video && progressDumb) {
        video.currentTime = video.duration * (pos / width);
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
};
const toggleVolume = () => {
    if ((video === null || video === void 0 ? void 0 : video.volume) !== 0) {
        localStorage.setItem("prevVolume", JSON.stringify(video === null || video === void 0 ? void 0 : video.volume));
    }
    if (video) {
        let getVolume = JSON.parse(localStorage.getItem("prevVolume") || "");
        if (video.volume === 0) {
            btnSound === null || btnSound === void 0 ? void 0 : btnSound.classList.remove("video_control_sound_off");
            volume.value = getVolume * 100;
            video.volume = getVolume;
            volume.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${volume.value}%, rgba(210, 108, 213, 0.5) ${volume.value}%, rgba(210, 108, 213, 0.5))`;
        }
        else {
            btnSound === null || btnSound === void 0 ? void 0 : btnSound.classList.add("video_control_sound_off");
            video.volume = 0;
            volume.value = 0;
            volume.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff 0%, rgba(210, 108, 213, 0.5) 0%, rgba(210, 108, 213, 0.5))`;
        }
    }
};
function setVolume() {
    const value = this.value;
    if (video && volume) {
        let videoVolume = value / 100;
        if (videoVolume > 0) {
            btnSound === null || btnSound === void 0 ? void 0 : btnSound.classList.remove("video_control_sound_off");
        }
        else {
            btnSound === null || btnSound === void 0 ? void 0 : btnSound.classList.add("video_control_sound_off");
        }
        video.volume = videoVolume;
        volume.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${videoVolume * 100}%, rgba(210, 108, 213, 0.5) ${videoVolume * 100}%, rgba(210, 108, 213, 0.5))`;
    }
}
(function timeUpdate() {
    if (video) {
        video.ontimeupdate = progresVideo;
    }
    else {
        throw new Error("Object is possibly 'null'");
    }
})();
video === null || video === void 0 ? void 0 : video.addEventListener("click", () => {
    if (video.paused) {
        playVideo();
    }
    else {
        stopVideo();
    }
});
videoInner === null || videoInner === void 0 ? void 0 : videoInner.addEventListener("click", (e) => {
    let target = e.target;
    if (target === videoInner) {
        closeVideo();
    }
});
volume === null || volume === void 0 ? void 0 : volume.addEventListener("input", setVolume);
btnSound === null || btnSound === void 0 ? void 0 : btnSound.addEventListener("click", toggleVolume);
progressBlock === null || progressBlock === void 0 ? void 0 : progressBlock.addEventListener("click", setProgress);
btnPlayLarge === null || btnPlayLarge === void 0 ? void 0 : btnPlayLarge.addEventListener("click", playVideo);
btnPauseMini === null || btnPauseMini === void 0 ? void 0 : btnPauseMini.addEventListener("click", stopVideo);
btnPlayMini === null || btnPlayMini === void 0 ? void 0 : btnPlayMini.addEventListener("click", playVideo);
btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener("click", closeVideo);
showPlayer === null || showPlayer === void 0 ? void 0 : showPlayer.addEventListener("click", showVideo);
btnFullL === null || btnFullL === void 0 ? void 0 : btnFullL.addEventListener("click", fullScreen);

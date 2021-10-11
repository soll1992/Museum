let video = document.querySelector('.video-player');
let frame = document.querySelector('.video-frame');
let videoBar = document.querySelector('.video-bar');
let fullscreenBtn = document.querySelector('.frame-video');
let currentVideo = 0;
const barColor = '#710707';
const bigPlay = document.querySelector('.play-button');
const barPlay = document.querySelector('.play-video');
const backBtn = document.querySelector('.video-player-controls-back');
const forwardBtn = document.querySelector('.video-player-controls-forward');
const mute = document.querySelector('.mute-video');
const fullscreen = document.querySelector('.frame-video');
const progress = document.querySelector('.progress-time-main');
const volume = document.querySelector('.progress-value');
const controlsMsg = document.querySelector('#video-message');
progress.style.background = `linear-gradient(to right, ${barColor} 0%, ${barColor} ${progress.value}%, #c4c4c4 ${progress.value}%, #c4c4c4 100%)`  
volume.style.background = `linear-gradient(to right, ${barColor} 0%, ${barColor} ${volume.value}%, #c4c4c4 ${volume.value}%, #c4c4c4 100%)`  


function videoPlay() {
    video[video.paused ? 'play' : 'pause']();
}

function videoChangeProgress(e) {
    let value
    if (!e) {
        value = progress.value;
    } else {
        value = e.target.value;
    }
    video.currentTime = value/100 * video.duration
}

function videoChangeVolume(e) {
    video.volume = e ? e.target.value/100 : volume.value/100
    if (video.muted) videoMute();
    volume.style.background = `linear-gradient(to right, ${barColor} 0%, ${barColor} ${volume.value}%, #c4c4c4 ${volume.value}%, #c4c4c4 100%)`
    
    if (video.volume === 0){
        mute.classList.add("video-muted")
    } else {
        mute.classList.remove("video-muted")
    }
}

function videoMute() {
    video.muted = !video.muted;
    if (video.muted){
        mute.classList.add("video-muted")
    } else {
        mute.classList.remove("video-muted")
    }
}


function videoFullscreen() {
    if (!document.fullscreenElement) {
        document.querySelector('.video-frame').requestFullscreen();
        frame.classList.add("fullscreen")
        video.classList.add("fullscreen-video")
        videoBar.classList.add("fullscreen-video-bar")
        fullscreenBtn.classList.add("fullscreen-exit")
    } else if (document.exitFullscreen) {
        document.exitFullscreen();      
    } 
    document.addEventListener('fullscreenchange', () => {
        if (!document.webkitIsFullScreen) {
            frame.classList.remove("fullscreen")
            video.classList.remove("fullscreen-video")
            videoBar.classList.remove("fullscreen-video-bar")
            fullscreenBtn.classList.remove("fullscreen-exit")
        }
    })
}


function togglePlayPause() {
    if (!video.paused){
        bigPlay.style.opacity = 0;
        barPlay.classList.add('video-pause');
    } else {
        bigPlay.style.opacity = 1;
        barPlay.classList.remove('video-pause');
    }
}

function videoChangeProgressValue() {
    progress.value = Math.floor(100*video.currentTime/video.duration)
    progress.style.background = `linear-gradient(to right, ${barColor} 0%, ${barColor} ${progress.value}%, #c4c4c4 ${progress.value}%, #c4c4c4 100%)`
}

barPlay.addEventListener('click', videoPlay);
bigPlay.addEventListener('click', videoPlay);
video.addEventListener('click', videoPlay);
video.addEventListener('play',togglePlayPause);
video.addEventListener('pause',togglePlayPause);
video.addEventListener('timeupdate', videoChangeProgressValue);
mute.addEventListener('click', videoMute);
fullscreen.addEventListener('click', videoFullscreen);
volume.addEventListener('input', videoChangeVolume);
progress.addEventListener('input', videoChangeProgress);
document.addEventListener('keydown', toggleKeys)

let visible = false
var observer = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] === true) {
		visible = true;
	}
	else {
		visible = false;
	}
}, { threshold: [0, 0.5, 1] });

observer.observe(video);

function toggleKeys(e) {

    const key = e.key;
    if (!key) return;

    if (key === "k" || key === "л" || key === " ") {
        e.preventDefault();
        videoPlay();
        return
    }
  
    if (key === "j" || key === "о" || e.key === "ArrowLeft") {
        video.currentTime -= 1/6 
        videoChangeProgressValue();
        return
    }
  
    if (key === "l" || key === "д" || e.key === "ArrowRight") {
        video.currentTime += 1/6;
        videoChangeProgressValue();
        return
    }

    if (!e.shiftKey && (key === "," || key ==="б") && video.paused) {
        video.currentTime -= 0.04
        videoChangeProgressValue();
        return
    }
    if (!e.shiftKey && (key === "." || key ==="ю") && video.paused) {
        video.currentTime += 0.04
        videoChangeProgressValue();
        return
    }
  
    if (((e.shiftKey && key ===",") || key === "<" || key ==="Б") && video.playbackRate > 0.25 ) {
        video.playbackRate -= 0.25;
        return
    }
    if (((e.shiftKey && key ===".") ||key === ">" || key ==="Ю") && video.playbackRate < 3 ) {
        video.playbackRate += 0.25
        return
    }

    if (key === "F" || (e.shiftKey && key ==="f") || key === "А" || (e.shiftKey && key ==="а") || key ==="а" || key ==="f") {
        videoFullscreen()
        return
    }
 
    if (e.key === "ArrowDown" && volume.value >= 10) {
        e.preventDefault();
        volume.value = +volume.value - 10
        videoChangeVolume()
        return
    }
    if (e.key === "ArrowUp" && volume.value <= 90) {
        e.preventDefault();
        volume.value = +volume.value + 10
        videoChangeVolume()
        return
    }

    if (key === "M" || (e.shiftKey && key ==="m") || key === "Ь" || (e.shiftKey && key ==="ь") || key ==="ь" || key ==="m") {
        videoMute()
        return
    }
}

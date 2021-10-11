import './styles.scss'

import './js/welcome'
import './js/explore'
import { tns } from "../node_modules/tiny-slider/src/tiny-slider"
import './js/test2'
import './js/video'
import './js/gallery'
import './js/tickets'
import './js/hamburger'
import './js/form.js'



const slider = tns({
    container: '.my-slider',
    "items": 3,
    "gutter": 42,
    "slideBy": 1,
    "controlsPosition": "bottom",
    "navPosition": "bottom",
    "navAsThumbnails": "true",
    "controlsText": ["",""],
    "mouseDrag": false,
    "swipeAngle": false,
    "speed": 400
})

let sliderArrows = document.querySelectorAll('.tns-controls button');
let sliderDotsActive = document.querySelector('.tns-nav-active');
let sliderDots = document.querySelectorAll('.tns-nav');
let videoS = document.querySelector('.video-player'); 
let barPlayS = document.querySelector('.play-video');

let currentVideo = 0;

sliderArrows.forEach( arrow => arrow.addEventListener('click', () => {
    sliderDotsActive = document.querySelector('.tns-nav-active');
    currentVideo = +sliderDotsActive.getAttribute("data-nav") +1;
    if (currentVideo > 4) {
        currentVideo = 0
    }
    videoS.src = `./assets/video/video${currentVideo}.mp4`
    videoS.poster = `./assets/video/poster${currentVideo}.jpg`  
    barPlayS.classList.remove('video-pause');
    stopAllYouTubeVideos();
}))

sliderDots.forEach( dot => dot.addEventListener('click', () => {
    sliderDotsActive = document.querySelector('.tns-nav-active');
    currentVideo = +sliderDotsActive.getAttribute("data-nav");
    videoS.src = `./assets/video/video${currentVideo}.mp4`
    videoS.poster = `./assets/video/poster${currentVideo}.jpg`  
    barPlayS.classList.remove('video-pause');
    stopAllYouTubeVideos();
}))

function stopAllYouTubeVideos() { 
    let iframes = document.querySelectorAll('iframe');
    iframes.forEach.call(iframes, iframe => { 
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'stopVideo' }), '*');
   });
  }
  stopAllYouTubeVideos();














    


















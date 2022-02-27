'use strict';
let hero_video = document.getElementById("hero_video");


function changeHeroVideo(){
       if(window.innerWidth<=(window.innerHeight*1)){
            hero_video.src= "./assets/videos/hero__video-mobile.mp4"; 
            hero_video.style.width = "auto";
            hero_video.style.height = "100vh";
        } else  {
            hero_video.src="./assets/videos/hero__video-landscape.mp4";
            hero_video.style.width = "100vw";
            hero_video.style.height = "auto";
        }
    }
window.addEventListener("resize", changeHeroVideo );




"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {


    let coll = document.querySelectorAll(".collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("expand");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                content.style.padding = 0;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = 10 + "px";
            }
        });
    }

}


function play()
{
    var myVideo = document.getElementById("Video1");
    if(myVideo.paused)
    {
        myVideo.play();
        //document.getElementById("play").innerHTML="Pause";
    }
    else
    {
        myVideo.pause();
        //document.getElementById("Pause").innerHTML="Play";
    }
}



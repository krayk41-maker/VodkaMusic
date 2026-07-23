/* js/player.js */


const playButtons = document.querySelectorAll(".play-button");



playButtons.forEach(button=>{


const audio = document.getElementById(
button.dataset.audio
);



const container = button.closest(".vinyl-player");


const vinyl = container.querySelector(".vinyl");

const progress =
container.querySelector(".progress-bar");





button.addEventListener("click",()=>{



document.querySelectorAll("audio").forEach(other=>{


if(other !== audio){

other.pause();


}


});



document.querySelectorAll(".vinyl").forEach(item=>{


if(item !== vinyl){

item.classList.remove("spin");

}


});



document.querySelectorAll(".play-button").forEach(item=>{


if(item !== button){

item.textContent="▶";


}


});





if(audio.paused){



audio.play();



button.textContent="❚❚";



vinyl.classList.add("spin");



}else{



audio.pause();



button.textContent="▶";



vinyl.classList.remove("spin");


}



});







audio.addEventListener("timeupdate",()=>{

if(audio.duration){

const percent =
(audio.currentTime / audio.duration) * 100;


progress.style.width = percent + "%";


}

});



const progressContainer =
container.querySelector(".progress-container");



progressContainer.addEventListener("click",(e)=>{


const width =
progressContainer.clientWidth;


const clickX =
e.offsetX;



if(audio.duration){


audio.currentTime =
(audio.duration * clickX) / width;


}



});







audio.addEventListener("ended",()=>{


button.textContent="▶";


vinyl.classList.remove("spin");


progress.style.width="0%";


});



});
/* js/main.js */


const buttons = document.querySelectorAll(".artist-btn");



buttons.forEach(button=>{


button.addEventListener("click",function(e){


const rect=this.getBoundingClientRect();


const x=rect.left + rect.width / 2;

const y=rect.top + rect.height / 2;



for(let i=0;i<45;i++){

createExplosion(x,y);

}



});


});






function createExplosion(x,y){


const particle=document.createElement("span");


particle.style.left=x+"px";

particle.style.top=y+"px";



const size=Math.random()*12+5;


particle.style.width=size+"px";

particle.style.height=size+"px";



const angle=Math.random()*Math.PI*2;


const distance=Math.random()*160+50;



particle.style.setProperty(
"--x",
Math.cos(angle)*distance+"px"
);



particle.style.setProperty(
"--y",
Math.sin(angle)*distance+"px"
);



const colors=[

"#ffc107",
"#ffffff",
"#ff9500"

];



particle.style.background=
colors[Math.floor(Math.random()*colors.length)];



document.getElementById("particles").appendChild(particle);



setTimeout(()=>{


particle.remove();


},900);



}







const cards=document.querySelectorAll(".artist-card");



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();



const x=e.clientX-rect.left;

const y=e.clientY-rect.top;



card.style.setProperty(
"--x",
x+"px"
);



card.style.setProperty(
"--y",
y+"px"
);



});



card.addEventListener("mouseleave",()=>{


card.style.setProperty(
"--x",
"50%"
);


card.style.setProperty(
"--y",
"50%"
);


});



});








const tracks=document.querySelectorAll(".track");


tracks.forEach(track=>{


track.innerHTML += track.innerHTML;


});
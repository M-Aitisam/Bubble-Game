let timer =60;
let score=0;
let hitrn =0;
 // for creating bubbles
const makeBubble =() =>{

 
 let clutter ="";

for(let i=1; i<=100 ;i++){
    let rn= Math.floor(Math.random()*10);
 clutter +=`<div id="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML =clutter;
 };
 makeBubble()

 ///  create a timer setting make function



 const runTimer =() =>{

    let tclear=setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent =timer;
         }
         else{
            clearInterval(tclear);
            document.querySelector("#pbtm").innerHTML= `<h1>Game Over😋😍</h1>`;
         }
    },1000);
 };
runTimer();
// function for hit
const getNewHit = () =>{
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
};
getNewHit();


// create function for score
const increaseScore=()=>{
    score +=10;
    document.querySelector("#scoreval").textContent =score;
};

// addlistner to the bubble parent (pbtm)

document.querySelector("#pbtm").addEventListener("click", function(detail){
    let clickedNum =Number(detail.target.textContent);
   if(clickedNum ===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
} );










let min=0;
let sec=0;
let miliSec=0;


let getMin=document.getElementById("min")
let getSec=document.getElementById("sec")
let getMiliSec=document.getElementById("miliSec");

function timer(){
    miliSec++;
    getMiliSec.innerHTML=miliSec;
    if(miliSec >= 100){
        sec++;
        getSec.innerHTML=sec;
        miliSec=0;
    }
    else if(sec >= 60){
        min++;
        getMin.innerHTML=min;
        sec=0;
    }

}
let setInt;
function startTimer(){
     setInt=setInterval(timer,10);
    let disable=document.getElementById("start")
     disable.disabled=true;
     disable.style.color="red"
};

function stopTimer(){
    clearInterval(setInt)
    let enable=document.getElementById("start")
    enable.disabled=false;
     enable.style.color=""
}

function resetTimer(){
    min=0;
    sec=0;
    miliSec=0;
    getMin.innerHTML=min;
    getSec.innerHTML=sec;
    getMiliSec.innerHTML=miliSec
    clearInterval(setInt)
    let enable=document.getElementById("start")
    enable.disabled=false;
    enable.style.color=""
}



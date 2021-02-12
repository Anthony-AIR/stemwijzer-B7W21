
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const startCont = document.getElementById("startCont");
const hiddenbtn = document.querySelectorAll(".hidden");

startbutton.onclick = start;


function start(){
    console.log(hiddenbtn);
    //relocates container
    container.classList.remove("containerLoc1");
    container.classList.add("containerLoc2");
    //removes startCont and background
    startCont.parentNode.removeChild(startCont);
    document.body.style.background="white";
    show();
    var statement1 = 0;
    statments( statement1 );
}

function show() {
    for (var i = 0; i < hiddenbtn.length; i++) {
      hiddenbtn[i].classList.remove("hidden")
    }
}

function statments( statement ){
    document.getElementById("title").innerHTML = subjects[0];
}

console.log(subjects);
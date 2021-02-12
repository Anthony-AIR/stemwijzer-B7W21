
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const startCont = document.getElementById("startCont");
const hiddenbtn = document.querySelectorAll(".hidden");
let statementAnwser = 0;

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
    statments();
}

function show() {
    for (var i = 0; i < hiddenbtn.length; i++) {
      hiddenbtn[i].classList.remove("hidden")
    }
}

function statments(){
    document.getElementById("title").innerHTML = subjects[statementAnwser].title;
    document.getElementById("statement").innerHTML = subjects[statementAnwser].statement;
}

console.log(subjects);
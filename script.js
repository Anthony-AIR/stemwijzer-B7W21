
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const startCont = document.getElementById("startCont");
const hiddenbtn = document.querySelectorAll(".hidden");
const previous = document.getElementById("previous");
const eens = document.getElementById("eens");
const geen = document.getElementById("geenVanBeide");
const oneens = document.getElementById("oneens");
const skip = document.getElementById("skip");
var statement = 0;
var statementsanswer = [];


startbutton.onclick = start;
previous.onclick = previousStatement;
eens.onclick = pro;
geen.onclick = none;
skip.onclick = none;
oneens.onclick = contra;


function start(){
    console.log(hiddenbtn);
    //relocates container
    container.classList.remove("containerLoc1");
    container.classList.add("containerLoc2");
    //removes startCont and background
    startCont.parentNode.removeChild(startCont);
    document.body.style.background="white";
    show();
    showStatements();
}

function show() {
    for (var i = 0; i < hiddenbtn.length; i++) {
      hiddenbtn[i].classList.remove("hidden")
    }
}

function showStatements(){
    document.getElementById("title").innerHTML = subjects[statement].title;
    document.getElementById("statement").innerHTML = subjects[statement].statement;
}

function pro(){
    statementsanswer.push("pro");
    statement++;
    showStatements();
}

function contra(){
    statementsanswer.push("contra");
    statementsanswer[0]="test";
    console.log(statementsanswer);
    statement++;
    showStatements();
}

function none(){
    statementsanswer.push("none");
    statement++;
    showStatements();
}

function previousStatement(){
    if (statement > 0 ){
      statement--;
      showStatements();  
    }
}

console.log(subjects);

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
    if (statement == 30){
        document.getElementById("title").innerHTML = "Welke partijen wil je meenemen in het resultaat?";
        document.getElementById("statement").innerHTML = "Kies alle partijen, alleen de partijen die nu al in de Tweede Kamer zitten, of maak zelf een selectie. Selecteer minimaal 3 partijen.";
    }
    else{
        document.getElementById("title").innerHTML = subjects[statement].title;
        document.getElementById("statement").innerHTML = subjects[statement].statement; 
    }
    
}

function pro(){
    statementsanswer.push("pro");
    statement++;
    showStatements();
}

function contra(){
    console.log(statementsanswer[statement]);
    if (statementsanswer[statement] == ""){
      statementsanswer.push("contra");
      statement++;
      showStatements(); 
    }
    else{
        console.log("niet empty");
        statementsanswer[statement]="contra";
    }

    
}

function none(){
    statementsanswer.push("none");
    statement++;
    showStatements();
}

function previousStatement(){
    if (statement > 0 ){
        statement--;
        prevAnwsers();
        showStatements();  
    }
}

function prevAnwsers(){
    if(statementsanswer[statement] == "pro"){
        document.getElementById("eens").style.backgroundColor = "blue";
        document.getElementById("oneens").style.backgroundColor = "red";
        document.getElementById("geenVanBeide").style.backgroundColor = "#9E9E9E";
    }

    else if(statementsanswer[statement] == "contra"){
        document.getElementById("oneens").style.backgroundColor = "blue";
        document.getElementById("eens").style.backgroundColor = "green";
        document.getElementById("geenVanBeide").style.backgroundColor = "#9E9E9E";

    }

    else if(statementsanswer[statement] == "none"){
        document.getElementById("geenVanBeide").style.backgroundColor = "blue";
        document.getElementById("oneens").style.backgroundColor = "red";
        document.getElementById("eens").style.backgroundColor = "green";
    }
}


console.log(subjects);




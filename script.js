
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
skip.onclick = showSecularParties;
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
        console.log(statementsanswer);
    }
    else{
        document.getElementById("title").innerHTML = subjects[statement].title;
        document.getElementById("statement").innerHTML = subjects[statement].statement;
    }
    
}

function pro(){
    prevAnwsers();
    statementsanswer[statement] = "pro";
    statement++;
    showStatements(); 
}

function contra(){
    prevAnwsers();
    statementsanswer[statement] = "contra";
    statement++;
    showStatements(); 
}

function none(){
    prevAnwsers();
    statementsanswer[statement] = "none";
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
        eens.style.backgroundColor = "blue";
        oneens.style.backgroundColor = "red";
        geen.style.backgroundColor = "#9E9E9E";
    }
    else if(statementsanswer[statement] == "contra"){
        oneens.style.backgroundColor = "blue";
        eens.style.backgroundColor = "green";
        geen.style.backgroundColor = "#9E9E9E";
    }
    else if(statementsanswer[statement] == "none"){
        geen.style.backgroundColor = "blue";
        eens.style.backgroundColor = "green";
        oneens.style.backgroundColor = "red";
    }
    else if(statementsanswer[statement] == undefined){
        oneens.style.backgroundColor = "red";
        eens.style.backgroundColor = "green";
        geen.style.backgroundColor = "#9E9E9E";
    }
}

function showSecularParties(){
    var i = 0;
    parties.forEach(party => {
        if(party.secular == true){
            var elem = document.createElement("p");
            elem.innerHTML = party.name;
            elem.id = "party" + i;
            container.appendChild(elem);
            console.log("showSecularParties is een succes");
        }
    })
}
console.log(subjects);
/*
var i = 0;
parties.forEach(party => {
    if(party.secular == true){
        var elem = document.createElement("input");
        elem.innerhtml = party.name;
        elem.id = "party" + i;
        elem.setAttribute("type", "checkbox");
        container.appendChild(elem);
        console.log("showSecularParties is een succes");
    }
})
}
*/
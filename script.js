
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const startCont = document.getElementById("startCont");
const hiddenbtn = document.querySelectorAll(".hidden");
const previous = document.getElementById("previous");
const eens = document.getElementById("eens");
const geen = document.getElementById("geenVanBeide");
const oneens = document.getElementById("oneens");
const skip = document.getElementById("skip");
const partijenContainer = document.getElementById("partijenContainer");
var statement = 0;
var statementsanswer = [];
var results = { };
var extraPoints = ["Bindend referendum"];

for(i = 0; i < parties.length; i++){
    results[parties[i].name] = 0;
}

document.getElementById("stelling").innerHTML = "Test je politieke voorkeur aan de hand van " + subjects.length + " stellingen";
//alle onclicks
startbutton.onclick = start;
previous.onclick = previousStatement;
eens.onclick = pro;
geen.onclick = none;
skip.onclick = none;
oneens.onclick = contra;

partijenContainer.style.display = "none";

function start(){
    //relocates container
    container.classList.remove("containerLoc1");
    container.classList.add("containerLoc2");
    //removes startCont and background
    startCont.parentNode.removeChild(startCont);
    document.body.style.background = "white";
    showButtons();
    showStatements();
}


function showButtons() {
    for (var i = 0; i < hiddenbtn.length; i++){
      hiddenbtn[i].classList.remove("hidden")
    }
}

function hideButtons() {
    for (var i = 0; i < hiddenbtn.length; i++){
      hiddenbtn[i].classList.add("hidden")
    }
    previous.classList.remove("hidden");
}

function showStatements(){
    if (statement == subjects.length){
        document.getElementById("title").innerHTML = "Welke partijen wil je meenemen in het resultaat?";
        document.getElementById("statement").innerHtML = "hello ";
        hideButtons();
        chooseExtraPoints();
        //createPartyButtons();
        //scorePlus();
        //calculateResults();
        //showParties();
    }
    else{
        document.getElementById("title").innerHTML = subjects[statement].title;
        document.getElementById("statement").innerHTML = subjects[statement].statement;
    }  
}

//antwoorden functies
function pro(){
    statementsanswer[statement] = "pro";
    statement++;
    prevAnwsers();
    showStatements(); 
}

function contra(){
    statementsanswer[statement] = "contra";
    statement++;
    prevAnwsers();
    showStatements(); 
}

function none(){
    statementsanswer[statement] = "none";
    statement++;
    prevAnwsers();
    showStatements(); 
}

//back function and button color for back
function previousStatement(){
    if (statement > 0 ){
        statement--;
        prevAnwsers();
        if(statement == subjects.length-1){
            showButtons();
        }
        showStatements();  
    }
}

function prevAnwsers(){
    oneens.classList.add("red");
    eens.classList.add("green");
    geen.classList.add("gray");
    if(statementsanswer[statement] == "pro"){
        eens.classList.remove("green");
        oneens.classList.add("red");
        geen.classList.add("gray");
    }
    else if(statementsanswer[statement] == "contra"){
        oneens.classList.remove("red");
        eens.classList.add("green");
        geen.classList.add("gray");
    }
    else if(statementsanswer[statement] == "none"){
        geen.classList.remove("gray");
        eens.classList.add("green");
        oneens.classList.add("red");
    }
}


function createPartyButtons(){
    var btn = document.createElement("button");
    btn.innerHTML = "all secular parties";
    btn.id = "secularPartieButton";
    btn.className = "btn";
    container.appendChild(btn);
    document.getElementById("secularPartieButton").onclick = showSecularParties;

    var btn = document.createElement("button");
    btn.innerHTML = "all big parties";
    btn.id = "BigPartieButton";
    btn.className = "btn";
    container.appendChild(btn);
    document.getElementById("BigPartieButton").onclick = showBigParties;
}


function calculateResults(){
    var i = 0;
    subjects.forEach(subject => {
        subject.parties.forEach(partie => {
            if(statementsanswer[i] == partie.position){
                results[partie.name]++;
            }
        });
    i++;
    });
}

//all parties show and hide
function showParties(){
    var i = 0;
    document.getElementById("statement").innerHTML = "dit zijn alle partijen:";
    partijenContainer.style.display = "flex";
    for (var key in results) {
        var elem = document.createElement("p");
        elem.innerHTML = key + ": " + results[key];
        elem.id = "party" + i;
        elem.setAttribute("data-num", results[key]);
        partijenContainer.appendChild(elem);
        i++;
    }
    sortParties();
}

function hideParties(){
    var i = 0;
    partijenContainer.style.display = "none";
    for (var key in results) {
        var elem = document.getElementById("party" + i);
        if(elem != null){
            elem.parentNode.removeChild(elem);
        }
        i++;
    }
}


//secular paties show and hide
function showSecularParties(){
    hideParties();
    document.getElementById("statement").innerHTML = "dit zijn alle seculare partijen:";
    var i = 0;
    partijenContainer.style.display = "flex";
    parties.forEach(partie => {
        if(partie.secular == true){
            for (var key in results) {
                if( partie.name == key ){
                    var elem = document.createElement("p");
                    elem.innerHTML = key + ": " + results[key];
                    elem.id = "party" + i;
                    elem.setAttribute("data-num", results[key]);
                    partijenContainer.appendChild(elem);
                }
            }
        }
        i++;
    });
    sortParties();
    document.getElementById("secularPartieButton").onclick = hideSecularParties;
}

function hideSecularParties(){
    hideParties();
    showParties();
    document.getElementById("secularPartieButton").onclick = showSecularParties;
}

//big parties show and hide
function showBigParties(){
    hideParties();
    document.getElementById("statement").innerHTML = "dit zijn alle grote partijen:";
    var i = 0;
    partijenContainer.style.display = "flex";
    parties.forEach(partie => {
        if(partie.size >= 10){
            for (var key in results) {
                if( partie.name == key ){
                    var elem = document.createElement("p");
                    elem.innerHTML = key + ": " + results[key];
                    elem.id = "party" + i;
                    elem.setAttribute("data-num", results[key]);
                    partijenContainer.appendChild(elem);
                }
            }
        }
        i++;
    });
    sortParties();
    document.getElementById("BigPartieButton").onclick = hideBigParties;
}

function hideBigParties(){
    hideParties();
    showParties();
    document.getElementById("BigPartieButton").onclick = showBigParties;
}

// sort
function sortParties(){
    var para = document.querySelectorAll('#partijenContainer p');
    var paraArr = [].slice.call(para).sort(function (a, b) {
        return b.dataset.num - a.dataset.num;
    });
    paraArr.forEach(function (p) {
        partijenContainer.appendChild(p);
    });
}

function scorePlus(){
    var i = 0;
    subjects.forEach( subject => {
        extraPoints.forEach( extraPoint => {
            if( subject.title == extraPoint ){
                subject.parties.forEach( partie => {
                    if(statementsanswer[i] == partie.position){
                        results[partie.name]++;
                        console.log(partie.name);
                    } 
                });
            }
        });
        i++;
    });
}
function chooseExtraPoints(){
    subjects.forEach(subject => {
        var checkbox = document.createElement('input'); 
        checkbox.type = "checkbox"; 
        checkbox.name = "name"; 
        checkbox.value = "value"; 
        checkbox.id = subject.title ; 

        var label = document.createElement('label');
        label.htmlFor = subject.title; 
        label.id = "label";
        label.innerHTML = subject.title;
        document.getElementById("ChoosePartijenContainer").appendChild(checkbox); 
        document.getElementById("ChoosePartijenContainer").appendChild(label);
    });
}
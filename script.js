
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
var results = { "VVD": 0, "CDA": 0, "PVV": 0, "D66": 0, "GroenLinks": 0, "SP": 0, 
                    "PvdA": 0, "ChristenUnie": 0, "Partij voor de Dieren": 0, "SGP": 0,
                    "DENK": 0, "Forum voor Democratie": 0, "Lokaal in de Kamer": 0,
                    "OndernemersPartij": 0, "VNL": 0, "Nieuwe Wegen": 0, "De Burger Beweging": 0,
                    "Piratenpartij": 0, "Artikel 1": 0, "Libertarische Partij": 0, "50Plus": 0,
                    "Vrijzinnige Partij": 0, "Niet Stemmers": 0 };


startbutton.onclick = start;
previous.onclick = previousStatement;
eens.onclick = pro;
geen.onclick = none;
skip.onclick = none;
oneens.onclick = contra;

document.getElementById("partijenContainer").style.display = "none";

function start(){
    //relocates container
    container.classList.remove("containerLoc1");
    container.classList.add("containerLoc2");
    //removes startCont and background
    startCont.parentNode.removeChild(startCont);
    document.body.style.background="yellow";
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
    if (statement == 30){
        document.getElementById("title").innerHTML = "Welke partijen wil je meenemen in het resultaat?";
        document.getElementById("statement").innerHTML = "Kies alle partijen, alleen de partijen die nu al in de Tweede Kamer zitten, of maak zelf een selectie. Selecteer minimaal 3 partijen.";
        hideButtons();
        createPartyButtons();
        calculateResults();
    }
    else{
        document.getElementById("title").innerHTML = subjects[statement].title;
        document.getElementById("statement").innerHTML = subjects[statement].statement;
    }
    
}

function pro(){
    prevAnwsers();
    statementsanswer[statement] = "pro";
    console.log(statement);
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
        if(statement == 29){
            showButtons();
        }
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

function createPartyButtons(){
    var btn = document.createElement("button");
    btn.innerHTML = "all secular parties";
    btn.id = "secularPartieButton";
    container.appendChild(btn);
    document.getElementById("secularPartieButton").onclick = showSecularParties;
    console.log(statementsanswer);
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
    showParties();
}

function showParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "flex";
    console.log("test");
    for (var key in results) {
        var elem = document.createElement("p");
        elem.innerHTML = key + ": " + results[key];
        elem.id = "party" + i;
        elem.setAttribute("data-num", results[key]);
        //elem.classList = "partijen";
        document.getElementById("partijenContainer").appendChild(elem);
        console.log("showSecularParties is een succes");
        i++;
    }
    sortParties();
}

function hideParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "none";
    for (var key in results) {
            var elem = document.getElementById("party" + i);
            if(elem != null){
                elem.parentNode.removeChild(elem);
            }
        i++;
    }
}

function sortParties(){
    var div = document.getElementById("partijenContainer"),
    para = document.querySelectorAll('#partijenContainer p');
    var paraArr = [].slice.call(para).sort(function (a, b) {
        return a.dataset.num < b.dataset.num ? 1 : -1;
    });
    paraArr.forEach(function (p) {
        div.appendChild(p);
    });
}

function showSecularParties(){
    hideParties();
    var i = 0;
    document.getElementById("partijenContainer").style.display = "flex";
    parties.forEach(partie => {
        if(partie.secular == true){
            for (var key in results) {
                if( partie.name == key ){
                    var elem = document.createElement("p");
                    elem.innerHTML = key + ": " + results[key];
                    elem.id = "party" + i;
                    elem.setAttribute("data-num", results[key]);
                    document.getElementById("partijenContainer").appendChild(elem);
                    console.log("showSecularParties is een succes");
                }
            }
        }
        i++;
    });
    sortParties();
    document.getElementById("secularPartieButton").onclick = hideSecularParties;
}

function hideSecularParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "none";
    parties.forEach(partie => {
        if(partie.secular == true){
            var elem = document.getElementById("party" + i);
            if(elem != null){
                elem.parentNode.removeChild(elem);
            }
        }
        i++;
    });
    showParties();
    document.getElementById("secularPartieButton").onclick = showSecularParties;
}

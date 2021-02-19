
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
var results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];


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
    var vvd = 0;
    var cda = 0;
    var pvv = 0;
    var d66 = 0;
    var groenLinks = 0;
    var sp = 0;
    var pvda = 0;
    var christenUnie = 0;
    var partijVoorDeDieren = 0;
    var sgp = 0;
    var denk = 0;
    var forumVoorDemocratie = 0;
    var lokaalInDeKamer = 0;
    var ondernemersPartij = 0;
    var vnl = 0;
    var nieuweWegen = 0;
    var deBurgerBeweging = 0;
    var piratenpartij = 0;
    var artikel1 = 0;
    var libertarischePartij = 0;
    var Plus50 = 0;
    var vrijzinnigePartij = 0;
    var nietStemmers = 0;
    /*var results = [{vvd: 0}, {cda: 0}, {pvv: 0},{d66: 0}, {groenLinks: 0}, {sp: 0}, {pvda: 0}, {christenUnie: 0}, {partijVoorDeDieren: 0}, {sgp: 0}, {denk: 0},
        {forumVoorDemocratie: 0}, {lokaalInDeKamer: 0}, {ondernemersPartij: 0}, {vnl: 0}, {nieuweWegen: 0}, {deBurgerBeweging: 0}, {piratenpartij: 0}, {artikel1: 0},
        {libertarischePartij: 0}, {Plus50: 0}, {vrijzinnigePartij: 0}, {nietStemmers: 0}];*/
    subjects.forEach(subject => {
        subject.parties.forEach(partie => {
            if(statementsanswer[i] == partie.position){
                if(partie.name == "VVD"){
                    //results[0].vvd++;
                    results[0]++;
                }
                else if(partie.name == "CDA"){
                    //results[1].cda++;
                    results[1]++;
                }
                else if(partie.name == "pvv"){
                    //results[2].pvv++;
                    results[2]++;
                }
                else if(partie.name == "d66"){
                    //results[3].d66++;
                    results[3]++;
                }
                else if(partie.name == "GroenLinks"){
                    //results[4].groenLinks++;
                    results[4]++;
                }
                else if(partie.name == "SP"){
                    //results[5].sp++;
                    results[5]++;
                }
                else if(partie.name == "PvdA"){
                    //results[6].pvda++;
                    results[6]++;
                }
                else if(partie.name == "ChristenUnie"){
                    //results[7].christenUnie++;
                    results[7]++;
                }
                else if(partie.name == "Partij voor de Dieren"){
                    //results[8].partijVoorDeDieren++;
                    results[8]++;
                }
                else if(partie.name == "SGP"){
                    //results[9].sgp++;
                    results[9]++;
                }
                else if(partie.name == "DENK"){
                    //results[10].denk++;
                    results[10]++;
                }
                else if(partie.name == "Forum voor Democratie"){
                    //results[11].forumVoorDemocratie++;
                    results[11]++;
                }
                else if(partie.name == "Lokaal in de Kamer"){
                    //results[12].lokaalInDeKamer++;
                    results[12]++;
                }
                else if(partie.name == "OndernemersPartij"){
                    //results[13].ondernemersPartij++;
                    results[13]++;
                }
                else if(partie.name == "VNL"){
                    //results[14].vnl++;
                    results[14]++;
                }
                else if(partie.name == "Nieuwe Wegen"){
                    //results[15].nieuweWegen++;
                    results[15]++;
                }
                else if(partie.name == "De Burger Beweging"){
                    //results[16].deBurgerBeweging++;
                    results[16]++;
                }
                else if(partie.name == "Piratenpartij"){
                    //results[17].piratenpartij++;
                    results[17]++;
                }
                else if(partie.name == "Artikel 1"){
                    //results[18].artikel1++;
                    results[18]++;
                }
                else if(partie.name == "Libertarische Partij"){
                    //results[19].libertarischePartij++;
                    results[19]++;
                }
                else if(partie.name == "50Plus"){
                    //results[20].Plus50++;
                    results[20]++;
                }
                else if(partie.name == "Vrijzinnige Partij"){
                    //results[21].vrijzinnigePartij++;
                    results[21]++;
                }
                else if(partie.name == "Niet Stemmers"){
                    //results[22].nietStemmers++;
                    results[22]++;
                }
            }
        });
    i++;
    });
    console.log(results);
}

function showSecularParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "flex";
    console.log("test");
    console.log(results);
    results.forEach(result => {
            var elem = document.createElement("p");
            elem.innerHTML = parties[i].name + ": " + result;
            elem.id = "party" + i;
            //elem.classList = "partijen";
            document.getElementById("partijenContainer").appendChild(elem);
            console.log("showSecularParties is een succes");
        i++;
    });
    document.getElementById("secularPartieButton").onclick = hideSecularParties;
}

function hideSecularParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "none";
    results.forEach(result => {
            var elem = document.getElementById("party" + i);
            elem.parentNode.removeChild(elem);
        i++;
    });
    document.getElementById("secularPartieButton").onclick = showSecularParties;
}
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
});
}

function showSecularParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "flex";
    parties.forEach(party => {
        if(party.secular == true){
            var elem = document.createElement("p");
            elem.innerHTML = party.name;
            elem.id = "party" + i;
            elem.classList = "partijen";
            document.getElementById("partijenContainer").appendChild(elem);
            console.log("showSecularParties is een succes");
        }
        i++;
    });
    document.getElementById("secularPartieButton").onclick = hideSecularParties;
}

function hideSecularParties(){
    var i = 0;
    document.getElementById("partijenContainer").style.display = "none";
    parties.forEach(party => {
        if(party.secular == true){
            var elem = document.getElementById("party" + i);
            elem.parentNode.removeChild(elem);
        }
        i++;
    });
    document.getElementById("secularPartieButton").onclick = showSecularParties;
}
*/
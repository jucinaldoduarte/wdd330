x = 6; //global variable created


function showGlobalVariable(){    
    let span = document.createElement('span');
    span.textContent = `window.x = ${window.x}`;
    document.getElementById("showGlobalVariableDiv").appendChild(span); 
}
function showAlert(){
    window.alert("Hello");
}
function showConfirm(){
    window.confirm("Do you wish to continue?")
}
function showPrompt(){
    window.prompt('Please enter your name:');
}
function showBrowser(){
    window.navigator.userAgent
    let span = document.createElement('span');
    span.textContent = `${window.navigator.userAgent}`;
    document.getElementById("showBrowser").appendChild(span); 
    document.getElementById("showBrowserButton").onclick = null;
}
function showLocation(){
    let para = document.createElement('p');
    para.textContent = `${window.location.href}`;
    document.getElementById("showLocation").appendChild(para); 
    document.getElementById("locationButton").onclick = null;
}
function showProtocol(){
    let para = document.createElement('p');
    para.textContent = `${window.location.protocol}`;
    document.getElementById("showLocation").appendChild(para); 
    document.getElementById("protocolButton").onclick = null;
}
function showHost(){
    let para = document.createElement('p');
    para.textContent = `${window.location.hostname}`;
    document.getElementById("showLocation").appendChild(para); 
    document.getElementById("hostButton").onclick = null;
}
function showLengthHistory(){
    let span = document.createElement('span');
    span.textContent = `Length History: ${window.history.length}`;
    document.getElementById("showHistory").appendChild(span); 
    document.getElementById("lengthButton").onclick = null;
}
function reloadCurrent(){
    window.history.go(0);
}
function openNewWindow(){
    const popup = window.open('https://jucinaldoduarte.github.io/wdd330/week8/index.html','Portfolio','width=400,height=400,resizable=yes');
    return popup;
}
function closeWindow(popup){    
    if (popup !== undefined){
        popup.close;
    }
}
function showScreen(){
    let span = document.createElement('span');
    span.textContent = `Width: ${window.screen.width} Height: ${window.screen.height}`;
    document.getElementById("showScreen").appendChild(span); 
    document.getElementById("showScreenButton").onclick = null;
}
function docWrite(){ 
    document.write('<head><link href="../css/small.css" rel="stylesheet"></link></head>');   
    document.write('<body><!--HEADER--><header class="clearfix"><h1>JUCINALDO DUARTE</h1><h2>Web Frontend Development II</h2><h3>Javascript | CSS | HTML</h3></header></body>');          
    document.write('<!-- CONTENT  --><main><div id="nav"><ul><li><a id="previous" href="../week9/index.html">&#10229;</a></li><li><a id="index" href="../index.html">&#9900;</a></li><li><a id="next" href="../week10/index.html">&#10230;</a></li></ul></div><h1>Hello, world!</h1></main>');  
}
function createCookie(){
    let cookieName = document.getElementById("fCookie").value;
    document.cookie = `name=${cookieName}`;
    document.cookie = 'city=Gotham'; 
}
function showCookie(){
    let span = document.createElement('span');
    span.textContent = document.cookie;    
    document.getElementById("showCookieDiv").appendChild(span); 
    document.getElementById("showCookieButton").onclick = null;
}

function getDataPower(){
    const superman = document.getElementById('hero');
    const powers = superman.dataset.powers;

    let span = document.createElement('span');
    span.textContent = `Data: ${superman.dataset.powers}`;    
    document.getElementById("hero").appendChild(span); 
    document.getElementById("showDataPowers").onclick = null;
}















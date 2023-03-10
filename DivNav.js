let NavData=`
<div id="Nav">
    <button onclick="Apps()">Apps</button>
    <button onclick="Software()">Software</button>
    <button onclick="Games()">Games</button>
</div>
<div id="main"></div>
`;
AutoData=()=>{
    let MAIN=document.querySelector('#main');
    MAIN.innerHTML=HomeData;
}
Apps=()=>{
    let MAIN=document.querySelector('#main');
    MAIN.innerHTML=AppsData;
}
Software=()=>{
    let MAIN=document.querySelector('#main');
    MAIN.innerHTML=SoftwareData;
}
Games=()=>{
    let MAIN=document.querySelector('#main');
    MAIN.innerHTML=GamesData;
}
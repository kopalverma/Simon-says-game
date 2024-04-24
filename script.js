let game = [];
let user = [];
let hscore = 0;
let tscore = [];
let started = false;
let level = 0;
let btns =["a","b","c","d"];
let h = document.querySelector("h2");
let hk = document.querySelector("h3");
let allbtns=document.querySelectorAll(".btn");
let bdy = document.querySelector("body")
function btnFlash(btn){
    btn.classList.add( 'flash' ) ;
        setTimeout(function(){
            btn.classList.remove('flash');
        },300);
}
function levelUp(){
    level++;
    let n = level*5;
    tscore.push(n);
    if(tscore[level-1]>=hscore){
        hscore=tscore[level-1];
        h.innerText="High Score: "+tscore[level-1];
    }else{
        h.innerText="High Score: "+hscore;
    }
    user=[];
    hk.innerText = `Level ${level}`;
    let ranidx= Math.floor( Math.random() * 3) ;
    let rancolor= btns[ranidx];
    let ranbtn =  document.querySelector(`.${rancolor}`)
        game.push(rancolor);
        console.log(game);
    btnFlash(ranbtn);
}
document.addEventListener("keypress", function(){
    console.log("kopal");
    if(started==false){
        alert("game started");
        started=true;
        levelUp();
    }
    }
    
);
function userFlashh(btn){
    btn.classList.add( 'green' ) ;
        setTimeout(function(){
            btn.classList.remove('green');
                },250);
}
function Flashh(btdy){
    btdy.classList.add( 'red' ) ;
        setTimeout(function(){
            btdy.classList.remove('red');
                },250);
}
function reset(){
    game=[];
    hk.innerText="start the game by pressing any key";
    document.addEventListener("keypress" , levelUp)
    level=0;
    tscore=[];
}
function checkLast(idxn){
    console.log(level);
    if(user[idxn]=== game [idxn]){
        console.log("same value");
        if(user.length === game.length ){
        setTimeout(levelUp , 1000);
        }
    }
    else {
    Flashh(bdy);
    hk.innerText = `Game over your score was ${level} Press any key to start`;
    setTimeout(reset,2000);
    }
}
function btnPress(){ 
    console.log(this);
    let a =  this;
    userFlashh(a);
    userColor=a.getAttribute("id")
    user.push(userColor);
    console.log(user);
    checkLast(user.length-1);
}
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
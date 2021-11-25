(()=>{"use strict";var s={216:(s,e,a)=>{a.d(e,{Z:()=>t});const t='<div class="settings"> <div class="settings-wrap"> <div class="settings-header"> <button class="back settings-nav-buttons">Settings</button> <button class="settings-close settings-nav-buttons"></button> </div> <div class="volume"> <h2 class="title">Volume</h2> <div class="volume-slider"> <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </div> <div class="mute mute-off"> </div> </div> <div class="time-game"> <h2 class="title">Time game</h2> <div class="toggle-container"> <label for="toggle-button" class="text">On</label> <input type="checkbox" id="toggle-button" class="toggle-button"> </div> </div> <div class="time-answer"> <h2 class="title">Time to answer</h2> <div class="time-input-body"> <button class="plus time-button">+</button> <input class="time-input" type="number" value="20" readonly="readonly"> <button class="minus time-button">-</button> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'},699:(s,e,a)=>{a.d(e,{Z:()=>i});var t=a(216);class i{constructor(){}async render(){return t.Z}async after_render(){}}}},e={};function a(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={exports:{}};return s[t](r,r.exports,a),r.exports}a.d=(s,e)=>{for(var t in e)a.o(e,t)&&!a.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},a.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),(()=>{var s=a(699);const e=()=>{const s=(location.hash.slice(1).toLowerCase()||"/").split("/"),e={resource:null,id:null,verb:null};return e.resource=s[1],e.id=s[2],e.verb=s[3],e},t=new class{constructor(){}async render(){return'<div class="main"> <div class="main-body"> <div class="home-header"> <a href="#/settings" class="settings-button"></a> </div> <div class="logo"></div> <div class="categories-main-buttons"> <div class="artist"> <a class="categori-link artist-link" href="#/categories_artist">Artist quiz</a> </div> <div class="pictures"> <a class="categori-link pictures-link" href="#/categories_pictures">Pictures quiz</a> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div> '}async after_render(){}},i=new s.Z,r=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav picture-link link" href="#/categories_pictures">Pictures quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="portrait card-title">Portrait <span class="score portrait"></span></div> <img class="portrait grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/0.webp" alt="art"> </a> <a href="#/result" class="portrait result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="landscape card-title">Landscape <span class="score landscape"></span></div> <img class="landscape grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/10.webp" alt="art"> </a> <a href="#/result" class="landscape result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="stillLife card-title">Still life <span class="score stillLife"></span></div> <img class="stillLife grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/20.webp" alt="art"> </a> <a href="#/result" class="stillLife result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="impressionism card-title">Impressionism <span class="score impressionism"></span></div> <img class="impressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/30.webp" alt="art"> </a> <a href="#/result" class="impressionism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="expressionism card-title">Expressionism <span class="score expressionism"></span></div> <img class="expressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/40.webp" alt="art"> </a> <a href="#/result" class="expressionism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="avantGarde card-title">Avant-garde <span class="score avantGarde"></span></div> <img class="avantGarde grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/50.webp" alt="art"> </a> <a href="#/result" class="avantGarde result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="renaissance card-title">Renaissance <span class="score renaissance"></span></div> <img class="renaissance grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/60.webp" alt="art"> </a> <a href="#/result" class="renaissance result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="surrealism card-title">Surrealism <span class="score surrealism"></span></div> <img class="surrealism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/70.webp" alt="art"> </a> <a href="#/result" class="surrealism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="kitsch card-title">Kitsch <span class="score kitsch"></span></div> <img class="kitsch grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/80.webp" alt="art"> </a> <a href="#/result" class="kitsch result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="minimalism card-title">Minimalism <span class="score minimalism"></span></div> <img class="minimalism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/90.webp" alt="art"> </a> <a href="#/result" class="minimalism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="interior card-title">Interior <span class="score interior"></span></div> <img class="interior grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/100.webp" alt="art"> </a> <a href="#/result" class="interior result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="nude card-title">Nude <span class="score nude"></span></div> <img class="nude grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/110.webp" alt="art"> </a> <a href="#/result" class="nude result-link">Score</a> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},n=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav artist-link link" href="#/categories_artist"> Artist quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="portraitP card-title">Portrait <span class="score portraitP"></span></div> <img class="portraitP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/120.webp" alt="art"> </a> <a href="#/result" class="portraitP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="landscapeP card-title">Landscape <span class="score landscapeP"></span></div> <img class="landscapeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/130.webp" alt="art"> </a> <a href="#/result" class="landscapeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="stillLifeP card-title">Still life <span class="score stillLifeP"></span></div> <img class="stillLifeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/140.webp" alt="art"> </a> <a href="#/result" class="stillLifeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="impressionismP card-title">Impressionism <span class="score impressionismP"></span></div> <img class="impressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/150.webp" alt="art"> </a> <a href="#/result" class="impressionismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="expressionismP card-title">Expressionism <span class="score expressionismP"></span></div> <img class="expressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/160.webp" alt="art"> </a> <a href="#/result" class="expressionismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="avantGardeP card-title">Avant-garde <span class="score avantGardeP"></span></div> <img class="avantGardeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/170.webp" alt="art"> </a> <a href="#/result" class="avantGardeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="renaissanceP card-title">Renaissance <span class="score renaissanceP"></span></div> <img class="renaissanceP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/180.webp" alt="art"> </a> <a href="#/result" class="renaissanceP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="surrealismP card-title">Surrealism <span class="score surrealismP"></span></div> <img class="surrealismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/190.webp" alt="art"> </a> <a href="#/result" class="surrealismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="kitschP card-title">Kitsch <span class="score kitschP"></span></div> <img class="kitschP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/200.webp" alt="art"> </a> <a href="#/result" class="kitschP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="minimalismP card-title">Minimalism <span class="score minimalismP"></span></div> <img class="minimalismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/210.webp" alt="art"> </a> <a href="#/result" class="minimalismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="interiorP card-title">Interior <span class="score interiorP"></span></div> <img class="interiorP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/220.webp" alt="art"> </a> <a href="#/result" class="interiorP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="nudeP card-title">Nude <span class="score nudeP"></span></div> <img class="nudeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/230.webp" alt="art"> </a> <a href="#/result" class="nudeP result-link">Score</a> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},l=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_artist">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question">Who is the author of this picture?</div> <div class="painting"> <div class="painting-img"></div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_artist">Categories</a> </div> </div> </div> <div class="answer"> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}wrap(s,e,a){function t(s){for(let e=s.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[s[e],s[a]]=[s[a],s[e]]}}a?function(){let a=new Set;const i=s[e].author,r=document.querySelector(".question"),n=document.querySelectorAll(".answer-option");r.textContent=`Which is ${i} picture?`,a.add(s[e].imageNum);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].imageNum)}let l=[...a];t(l);for(let s=0;s<l.length;s++)n[s].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${l[s]}.webp')`}():function(){let a=new Set;!function(){let a=s[e].imageNum;const t=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp`,i.onload=()=>{t.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp')`}}(),console.log(e),a.add(s[e].author);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].author)}let i=[...a];t(i);const r=document.querySelectorAll(".answer-option");for(let s=0;s<i.length;s++)r[s].innerHTML=i[s]}()}},c=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_pictures">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question"></div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_pictures">Categories</a> </div> </div> </div> <div class="answer answer-pic"> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}async wrap(s,e){!async function(){let a=new Set;!function(){let a=s[e].imageNum;const t=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp`,i.onload=()=>{t.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp')`}}(),console.log(e),a.add(s[e].author);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].author)}let t,i=[...a];!function(s){for(let e=s.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[s[e],s[a]]=[s[a],s[e]]}}(i),void 0!==document.querySelectorAll(".answer-option")[0]&&(t=document.querySelectorAll(".answer-option"));for(let s=0;s<i.length;s++)t[s].innerHTML=i[s]}()}},o=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <button class="result-nav questions-nav-buttons link">Categories </button></div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="result-body"> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},d=new class{constructor(){}async render(){return'<section class="section"> <h1> 404 Error </h1> </section> '}async after_render(){}},u=[],m=[],v=[],g=[],p=[],h=[],f=[],b=[],k=[],y=[],P=[],w=[],L=[],S=[],q=[],x=[],N=[],E=[],_=[],A=[],G=[],I=[],C=[],$=[];let M,O,H,z,R,T,J={portrait:[],landscape:[],stillLife:[],impressionism:[],expressionism:[],avantGarde:[],renaissance:[],surrealism:[],kitsch:[],minimalism:[],interior:[],nude:[],portraitP:[],landscapeP:[],stillLifeP:[],impressionismP:[],expressionismP:[],avantGardeP:[],renaissanceP:[],surrealismP:[],kitschP:[],minimalismP:[],interiorP:[],nudeP:[]},j={},Z=[],K=!1,V=0,W=0,F=!0,Q=!1;function U(){const s=new Audio;s.src="./assets/sound/true.mp3",s.volume=O/100,console.log(O),s.muted=!!K,s.play()}async function B(){const s=new Audio;s.src="./assets/sound/false.mp3",s.volume=O/100,s.muted=!!K,s.play()}function D(s){const e=document.querySelector(".fixed-overlay-falls"),a=document.querySelector(".time-line"),t=document.querySelectorAll(".answer-option"),i=document.querySelectorAll(".questions-nav-buttons"),r=document.querySelector(".answer"),n=document.querySelectorAll(".true-painting-conteiner"),l=document.querySelectorAll(".true-author"),c=document.querySelectorAll(".true-year"),o=document.querySelectorAll(".true-name");let d=s,u=setInterval((function(){a.textContent=d,d--,d<0&&(e.classList.add("fixed-overlay-active"),"portrait"===M?J.portrait.push(0):"landscape"===M?J.landscape.push(0):"stillLife"===M?J.stillLife.push(0):"impressionism"===M?J.impressionism.push(0):"expressionism"===M?J.expressionism.push(0):"avantGarde"===M?J.avantGarde.push(0):"renaissance"===M?J.renaissance.push(0):"surrealism"===M?J.surrealism.push(0):"kitsch"===M?J.kitsch.push(0):"minimalism"===M?J.minimalism.push(0):"interior"===M?J.interior.push(0):"nude"===M?J.nude.push(0):"portraitP"===M?J.portraitP.push(0):"landscapeP"===M?J.landscapeP.push(0):"stillLifeP"===M?J.stillLifeP.push(0):"impressionismP"===M?J.impressionismP.push(0):"expressionismP"===M?J.expressionismP.push(0):"avantGardeP"===M?J.avantGardeP.push(0):"renaissanceP"===M?J.renaissanceP.push(0):"surrealismP"===M?J.surrealismP.push(0):"kitschP"===M?J.kitschP.push(0):"minimalismP"===M?J.minimalismP.push(0):"interiorP"===M?J.interiorP.push(0):"nudeP"===M&&J.nudeP.push(0),r.classList.remove("answer-active"),B(),l.forEach((s=>{s.textContent=Z[V].author})),c.forEach((s=>{s.textContent=Z[V].year})),o.forEach((s=>{s.textContent=Z[V].name})),n.forEach((s=>s.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${Z[V].imageNum}.webp')`)),clearInterval(u))}),1e3);t.forEach((s=>s.addEventListener("click",(function(){clearInterval(u)})))),i.forEach((s=>s.addEventListener("click",(function(){clearInterval(u),V=0}))))}const X={"/":t,"/settings":i,"/categories_artist":r,"/categories_pictures":n,"/questions":l,"/questions_pictures":c,"/result":o},Y=async()=>{const s=document.getElementById("page_container"),a=e(),Y=(a.resource?`/${a.resource}`:"/")+(a.id?"/:id":"")+(a.verb?`/${a.verb}`:""),ss=X[Y]?X[Y]:d;if(s.innerHTML=await ss.render(),await ss.after_render(),await async function(){const s=await fetch("data.json");(await s.json()).map((s=>{s.imageNum<10&&u.length<10?u.push(s):s.imageNum>=10&&s.imageNum<20&&m.length<10?m.push(s):s.imageNum>=20&&s.imageNum<30&&v.length<10?v.push(s):s.imageNum>=30&&s.imageNum<40&&g.length<10?g.push(s):s.imageNum>=40&&s.imageNum<50&&p.length<10?p.push(s):s.imageNum>=50&&s.imageNum<60&&h.length<10?h.push(s):s.imageNum>=60&&s.imageNum<70&&f.length<10?f.push(s):s.imageNum>=70&&s.imageNum<80&&b.length<10?b.push(s):s.imageNum>=80&&s.imageNum<90&&k.length<10?k.push(s):s.imageNum>=90&&s.imageNum<100&&y.length<10?y.push(s):s.imageNum>=100&&s.imageNum<110&&P.length<10?P.push(s):s.imageNum>=110&&s.imageNum<120&&w.length<10?w.push(s):s.imageNum>=120&&s.imageNum<130&&L.length<10?L.push(s):s.imageNum>=130&&s.imageNum<140&&S.length<10?S.push(s):s.imageNum>=140&&s.imageNum<150&&q.length<10?q.push(s):s.imageNum>=150&&s.imageNum<160&&x.length<10?x.push(s):s.imageNum>=160&&s.imageNum<170&&N.length<10?N.push(s):s.imageNum>=170&&s.imageNum<180&&E.length<10?E.push(s):s.imageNum>=180&&s.imageNum<190&&_.length<10?_.push(s):s.imageNum>=190&&s.imageNum<200&&A.length<10?A.push(s):s.imageNum>=200&&s.imageNum<210&&G.length<10?G.push(s):s.imageNum>=210&&s.imageNum<220&&I.length<10?I.push(s):s.imageNum>=220&&s.imageNum<230&&C.length<10?C.push(s):$.length<10&&$.push(s)}))}(),ss===l||ss===c){console.log(O);const s=document.querySelectorAll(".answer-option"),e=document.querySelectorAll(".continue"),a=document.querySelector(".answer");l.wrap(Z,V,Q),F&&D(H),a.classList.add("answer-active"),s.forEach((s=>s.addEventListener("click",(s=>{const e=document.querySelector(".fixed-overlay-true"),t=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),r=document.querySelectorAll(".true-author"),n=document.querySelectorAll(".true-year"),l=document.querySelectorAll(".true-name");z=Z[V].author,a.classList.remove("answer-active"),Q?(z=Z[V].imageNum,s.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${z}.webp")`?(e.classList.add("fixed-overlay-active"),"portraitP"===M?J.portraitP.push(1):"landscapeP"===M?J.landscapeP.push(1):"stillLifeP"===M?J.stillLifeP.push(1):"impressionismP"===M?J.impressionismP.push(1):"expressionismP"===M?J.expressionismP.push(1):"avantGardeP"===M?J.avantGardeP.push(1):"renaissanceP"===M?J.renaissanceP.push(1):"surrealismP"===M?J.surrealismP.push(1):"kitschP"===M?J.kitschP.push(1):"minimalismP"===M?J.minimalismP.push(1):"interiorP"===M?J.interiorP.push(1):"nudeP"===M&&J.nudeP.push(1),U(),W++,console.log(W)):s.target.style.backgroundImage!=`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${z}.webp")`&&(t.classList.add("fixed-overlay-active"),"portraitP"===M?J.portraitP.push(0):"landscapeP"===M?J.landscapeP.push(0):"stillLifeP"===M?J.stillLifeP.push(0):"impressionismP"===M?J.impressionismP.push(0):"expressionismP"===M?J.expressionismP.push(0):"avantGardeP"===M?J.avantGardeP.push(0):"renaissanceP"===M?J.renaissanceP.push(0):"surrealismP"===M?J.surrealismP.push(0):"kitschP"===M?J.kitschP.push(0):"minimalismP"===M?J.minimalismP.push(0):"interiorP"===M?J.interiorP.push(0):"nudeP"===M&&J.nudeP.push(0),B())):s.target.textContent==z?(e.classList.add("fixed-overlay-active"),"portrait"===M?J.portrait.push(1):"landscape"===M?J.landscape.push(1):"stillLife"===M?J.stillLife.push(1):"impressionism"===M?J.impressionism.push(1):"expressionism"===M?J.expressionism.push(1):"avantGarde"===M?J.avantGarde.push(1):"renaissance"===M?J.renaissance.push(1):"surrealism"===M?J.surrealism.push(1):"kitsch"===M?J.kitsch.push(1):"minimalism"===M?J.minimalism.push(1):"interior"===M?J.interior.push(1):"landscape"===M&&J.nude.push(1),U(),W++,console.log(W)):s.target.textContent!=z&&(t.classList.add("fixed-overlay-active"),"portrait"===M?J.portrait.push(0):"landscape"===M?J.landscape.push(0):"stillLife"===M?J.stillLife.push(0):"impressionism"===M?J.impressionism.push(0):"expressionism"===M?J.expressionism.push(0):"avantGarde"===M?J.avantGarde.push(0):"renaissance"===M?J.renaissance.push(0):"surrealism"===M?J.surrealism.push(0):"kitsch"===M?J.kitsch.push(0):"minimalism"===M?J.minimalism.push(0):"interior"===M?J.interior.push(0):"landscape"===M&&J.nude.push(0),console.log(J),B()),r.forEach((s=>{s.textContent=Z[V].author})),n.forEach((s=>{s.textContent=Z[V].year})),l.forEach((s=>{s.textContent=Z[V].name})),i.forEach((s=>s.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${Z[V].imageNum}.webp')`))})))),e.forEach((s=>s.addEventListener("click",(function(){const s=document.querySelector(".fixed-overlay-true"),e=document.querySelector(".fixed-overlay-falls"),t=document.querySelector(".fixed-overlay-result"),i=document.querySelector(".test");9!=V?(V++,s.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),a.classList.add("answer-active"),console.log(Q),l.wrap(Z,V,Q),F&&D(H)):(s.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),t.classList.add("fixed-overlay-active"),V=0,async function(){const s=new Audio;s.src="./assets/sound/result.mp3",s.volume=O/100,s.muted=!!K,s.play()}(),i.textContent=`Result: ${W}/10`)}))))}else if(ss===r){console.log(O);const s=document.querySelectorAll(".categori-card"),e=document.querySelectorAll(".result-link"),a=document.querySelectorAll(".score"),t=document.querySelector(".picture-link"),i=document.querySelectorAll(".categori-img");void 0!==M&&(j[M]=`${W}/10`);for(let s in j)a.forEach((e=>{e.classList.contains(s)&&(e.textContent=j[s])})),i.forEach((e=>{e.classList.contains(s)&&e.classList.remove("grey")})),e.forEach((e=>{e.classList.contains(s)&&e.classList.add("result-link-active")}));s.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portrait")?(Z=u,Q=!1,M="portrait",J.portrait=[]):s.target.classList.contains("landscape")?(Z=m,Q=!1,M="landscape",J.landscape=[]):s.target.classList.contains("stillLife")?(Z=v,Q=!1,M="stillLife",J.stillLife=[]):s.target.classList.contains("impressionism")?(Z=g,Q=!1,M="impressionism",J.impressionism=[]):s.target.classList.contains("expressionism")?(Z=p,Q=!1,M="expressionism",J.expressionism=[]):s.target.classList.contains("avantGarde")?(Z=h,Q=!1,M="avantGarde",J.avantGarde=[]):s.target.classList.contains("renaissance")?(Z=f,Q=!1,M="renaissance",J.renaissance=[]):s.target.classList.contains("surrealism")?(Z=b,Q=!1,M="surrealism",J.surrealism=[]):s.target.classList.contains("kitsch")?(Z=k,Q=!1,M="kitsch",J.kitsch=[]):s.target.classList.contains("minimalism")?(Z=y,Q=!1,M="minimalism",J.minimalism=[]):s.target.classList.contains("interior")?(Z=P,Q=!1,M="interior",J.interior=[]):s.target.classList.contains("nude")&&(Z=w,Q=!1,M="nude",J.nude=[]),V=0,W=0})))),e.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portrait")?(R=u,T=J.portrait):s.target.classList.contains("landscape")?(R=m,T=J.landscape):s.target.classList.contains("stillLife")?(R=v,T=J.stillLife):s.target.classList.contains("impressionism")?(R=g,T=J.impressionism):s.target.classList.contains("expressionism")?(R=p,T=J.expressionism):s.target.classList.contains("avantGarde")?(R=h,T=J.avantGarde):s.target.classList.contains("renaissance")?(R=f,T=J.renaissance):s.target.classList.contains("surrealism")?(R=b,T=J.surrealism):s.target.classList.contains("kitsch")?(R=k,T=J.kitsch):s.target.classList.contains("minimalism")?(R=y,T=J.minimalism):s.target.classList.contains("interior")?(R=P,T=J.interior):s.target.classList.contains("nude")&&(R=w,T=J.nude)})))),t.addEventListener("click",(function(){Q=!0}))}else if(ss===n){console.log(O);const s=document.querySelectorAll(".categori-card"),e=document.querySelector(".artist-link"),a=document.querySelectorAll(".result-link"),t=document.querySelectorAll(".score"),i=document.querySelectorAll(".categori-img");void 0!==M&&(j[M]=`${W}/10`);for(let s in j)t.forEach((e=>{e.classList.contains(s)&&(e.textContent=j[s])})),i.forEach((e=>{e.classList.contains(s)&&e.classList.remove("grey")})),a.forEach((e=>{e.classList.contains(s)&&(console.log("WORK"),e.classList.add("result-link-active"))}));s.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portraitP")?(Z=L,Q=!0,M="portraitP"):s.target.classList.contains("landscapeP")?(Z=S,Q=!0,M="landscapeP"):s.target.classList.contains("stillLifeP")?(Z=q,Q=!0,M="stillLifeP"):s.target.classList.contains("impressionismP")?(Z=x,Q=!0,M="impressionismP"):s.target.classList.contains("expressionismP")?(Z=N,Q=!0,M="expressionismP"):s.target.classList.contains("avantGardeP")?(Z=E,Q=!0,M="avantGardeP"):s.target.classList.contains("renaissanceP")?(Z=_,Q=!0,M="renaissanceP"):s.target.classList.contains("surrealismP")?(Z=A,Q=!0,M="surrealismP"):s.target.classList.contains("kitschP")?(Z=G,Q=!0,M="kitschP"):s.target.classList.contains("minimalismP")?(Z=I,Q=!0,M="minimalismP"):s.target.classList.contains("interiorP")?(Z=C,Q=!0,M="interiorP"):s.target.classList.contains("nudeP")&&(Z=$,Q=!0,M="nudeP"),W=0,V=0})))),a.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portraitP")?(R=L,T=J.portraitP):s.target.classList.contains("landscapeP")?(R=S,T=J.landscapeP):s.target.classList.contains("stillLifeP")?(R=q,T=J.stillLifeP):s.target.classList.contains("impressionismP")?(R=x,T=J.impressionism):s.target.classList.contains("expressionismP")?(R=N,T=J.expressionismP):s.target.classList.contains("avantGardeP")?(R=E,T=J.avantGardeP):s.target.classList.contains("renaissanceP")?(R=_,T=J.renaissanceP):s.target.classList.contains("surrealismP")?(R=A,T=J.surrealismP):s.target.classList.contains("kitschP")?(R=G,T=J.kitschP):s.target.classList.contains("minimalismP")?(R=I,T=J.minimalismP):s.target.classList.contains("interiorP")?(R=C,T=J.interiorP):s.target.classList.contains("nudeP")&&(R=$,T=J.nudeP)})))),e.addEventListener("click",(function(){Q=!1,console.log("artistLink")}))}else if(ss===i){console.log(O);const s=document.querySelector(".slider"),e=document.querySelector(".mute"),a=document.querySelector(".toggle-button"),t=document.querySelector(".plus"),i=document.querySelector(".time-input"),r=document.querySelector(".minus"),n=document.querySelectorAll(".settings-nav-buttons");function l(){K?(K=!1,e.classList.toggle("mute-off")):(K=!0,e.classList.toggle("mute-off")),console.log(K)}i.value=H,a.checked=F,K?e.classList.remove("mute-off"):e.classList.add("mute-off"),e.addEventListener("click",l),s.value=O,s.addEventListener("input",(s=>{O=s.target.value})),s.addEventListener("mouseup",U),a.addEventListener("click",(function(){F=a.checked})),t.addEventListener("click",(function(){i.value>=30?i.value=30:i.value=+i.value+5,H=i.value})),r.addEventListener("click",(function(){i.value<=5?i.value=5:i.value=+i.value-5,H=i.value})),n.forEach((s=>s.addEventListener("click",(function(){history.back()}))))}else if(ss===t){console.log(O);const s=document.querySelector(".pictures"),e=document.querySelector(".artist");s.addEventListener("click",(function(){Q=!0})),e.addEventListener("click",(function(){Q=!1}))}else if(ss===o){const s=document.querySelectorAll(".result-painting"),e=document.querySelectorAll(".author-name"),a=document.querySelectorAll(".painting-year"),t=document.querySelectorAll(".painting-name");document.querySelector(".result-nav").addEventListener("click",(function(){history.back()}));for(let i=0;i<R.length;i++)s[i].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${R[i].imageNum}.webp')`,e[i].textContent=R[i].author,a[i].textContent=R[i].year,t[i].textContent=R[i].name;for(let e=0;e<T.length;e++)1===T[e]&&s[e].classList.remove("grey")}};window.addEventListener("beforeunload",(function(){localStorage.setItem("currentArr",JSON.stringify(Z)),localStorage.setItem("volumeValue",O),localStorage.setItem("muted",K),localStorage.setItem("time",H),localStorage.setItem("timerOption",F),localStorage.setItem("pictureQuiz",Q)})),window.addEventListener("load",(function(){Z=JSON.parse(localStorage.getItem("currentArr")),O=localStorage.getItem("volumeValue"),O&&"undefined"!==O||(O=50),H=localStorage.getItem("time"),H&&"undefined"!==H||(H=20),K=JSON.parse(localStorage.getItem("muted")),F=JSON.parse(localStorage.getItem("timerOption")),Q=JSON.parse(localStorage.getItem("pictureQuiz"))})),window.addEventListener("hashchange",Y),window.addEventListener("load",Y)})()})();
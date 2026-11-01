/* Opening scene: ENTER button + language gate */
(function(){
var intro=document.getElementById('intro');if(!intro)return;
var html=document.documentElement,btn=document.getElementById('enterBtn'),fx=document.getElementById('introFx'),gate=document.getElementById('gate');
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var locked=[].slice.call(document.querySelectorAll('#app'));
html.classList.add('intro-open');locked.forEach(function(n){n.inert=true});
if(!reduce){
 var birds=[[14,9,26,-4,-6],[22,7,22,-13,-3],[30,11,30,-20,-8],[18,6,19,-8,-2],[38,8,27,-2,-5],[26,5,24,-17,-3],[44,6,33,-24,-7],[12,5,21,-10,-2]];
 var b='';birds.forEach(function(v,i){b+='<div class="i-bird" style="--y:'+v[0]+'vh;--s:'+v[1]*.28+';--d:'+v[2]+'s;--dl:'+v[3]+'s;--dy:'+v[4]+'vh"><svg viewBox="0 0 40 18" style="animation-delay:-'+(i*.13).toFixed(2)+'s"><use href="#bird"/></svg></div>'});
 var p='';for(var i=0;i<16;i++){var x=(i*6.4+Math.random()*4)%100,sz=8+Math.random()*7,d=14+Math.random()*12,dl=-Math.random()*d;p+='<span class="i-petal" style="--x:'+x.toFixed(1)+'%;--sz:'+sz.toFixed(1)+'px;--d:'+d.toFixed(1)+'s;--dl:'+dl.toFixed(1)+'s"></span>'}
 fx.innerHTML=b+p;
}
var done=false,choosing=false;
function go(lang){
 if(done)return;done=true;if(lang&&window.applyLang)window.applyLang(lang);intro.classList.add('leaving');
 setTimeout(function(){
  locked.forEach(function(n){n.inert=false});html.classList.remove('intro-open');html.classList.add('entered');window.scrollTo(0,0);
 },reduce?10:800);
 setTimeout(function(){if(intro.parentNode)intro.parentNode.removeChild(intro);var h=document.querySelector('.hero h1');if(h){h.setAttribute('tabindex','-1');try{h.focus({preventScroll:true})}catch(e){}}},reduce?60:1800);
}
function choose(){
 if(choosing||done)return;
 if(window.__preLang){go(window.__preLang);return}
 choosing=true;intro.classList.add('choosing');
 setTimeout(function(){var f=gate.querySelector('.i-door');try{f.focus({preventScroll:true})}catch(e){}},reduce?20:300);
}
btn.addEventListener('click',choose);
[].forEach.call(gate.querySelectorAll('.i-door'),function(d){d.addEventListener('click',function(){go(d.getAttribute('data-lang'))})});
document.addEventListener('keydown',function(e){
 if(done)return;
 if(choosing){var k=(e.key||'').toLowerCase();if(k==='e')go('en');else if(k==='m')go('mr');return}
 if(e.key==='Enter'||e.key===' '){e.preventDefault();choose()}
});
setTimeout(function(){if(!choosing){try{btn.focus({preventScroll:true})}catch(e){}}},reduce?50:3800);
})();

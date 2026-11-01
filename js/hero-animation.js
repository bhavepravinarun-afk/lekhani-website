/* Home hero breeze animation: light beams, drifting leaves, dust motes (skipped for reduced motion) */
(function(){var h=document.getElementById('heroArt');if(!h||h.querySelector('.amb'))return;
var reduce=false;try{reduce=matchMedia('(prefers-reduced-motion:reduce)').matches}catch(e){}if(reduce)return;
var a=document.createElement('div');a.className='amb';a.setAttribute('aria-hidden','true');
var s=1;function r(){s=(s*9301+49297)%233280;return s/233280}
var H='<i class="beam"></i><i class="beam"></i><i class="beam"></i>';
var L='<svg viewBox="0 0 24 24"><path d="M12 1C6 5 3 10 5 16c1 3 4 6 7 7 3-1 6-4 7-7 2-6-1-11-7-15zm-.6 6h1.2v14h-1.2z" fill-rule="evenodd"/></svg>';
for(var i=0;i<16;i++)H+='<span class="lf" style="--x:'+(r()*96).toFixed(1)+'%;--s:'+(12+r()*14).toFixed(0)+'px;--d:'+(11+r()*9).toFixed(1)+'s;--dl:-'+(r()*18).toFixed(1)+'s;--dx:'+(-90-r()*140).toFixed(0)+'px;--r:'+(2+r()*2.5).toFixed(1)+'s">'+L+'</span>';
for(i=0;i<18;i++)H+='<i class="mote" style="--x:'+(r()*100).toFixed(1)+'%;--y:'+(10+r()*80).toFixed(1)+'%;--s:'+(2+r()*3).toFixed(1)+'px;--d:'+(6+r()*6).toFixed(1)+'s;--dl:-'+(r()*10).toFixed(1)+'s;--dx:'+(-30-r()*50).toFixed(0)+'px"></i>';
a.innerHTML=H;h.insertBefore(a,h.firstChild)})();

(() => {
  'use strict';
  const container = document.getElementById('invitation');
  const scenes = [...document.querySelectorAll('.scene')];
  const progress = document.getElementById('progress');
  const back = document.getElementById('backButton');
  const next = document.getElementById('nextButton');
  const enter = document.getElementById('enterButton');
  let scene = 0;
  let gateTimer = null;
  let opened = false;
  const dots = scenes.map((_,i) => {
    const el=document.createElement('button');el.className='dot';el.setAttribute('aria-label',`Go to scene ${i+1}`);
    el.addEventListener('click',()=>{ if(opened) showScene(i); });progress.appendChild(el);return el;
  });
  function showScene(i){
    if(i<0||i>=scenes.length)return;
    scene=i;
    scenes.forEach((s,j)=>{ const active=j===i;s.classList.toggle('active',active);s.inert=!active;s.setAttribute('aria-hidden',String(!active)); });
    dots.forEach((d,j)=>{d.classList.toggle('current',j===i);d.setAttribute('aria-current',j===i?'step':'false');});
    back.disabled=!opened||i<=1;
    next.disabled=!opened||i===scenes.length-1;
  }
  function begin(){
    if(opened)return;opened=true;
    enter.disabled=true;
    container.classList.add('opened');
    gateTimer=setTimeout(()=>showScene(1),2900);
  }
  function replay(){
    clearTimeout(gateTimer);opened=false;container.classList.remove('opened');enter.disabled=false;showScene(0);
  }
  enter.addEventListener('click',begin);
  document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>showScene(scene+1)));
  document.getElementById('replayButton').addEventListener('click',replay);
  back.addEventListener('click',()=>showScene(scene-1));next.addEventListener('click',()=>showScene(scene+1));
  document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&opened)showScene(scene+1);if(e.key==='ArrowLeft'&&opened)showScene(scene-1);if(e.key==='Enter'&&!opened&&document.activeElement===document.body)begin();});
  let x=0;container.addEventListener('touchstart',e=>{x=e.touches[0].clientX;},{passive:true});container.addEventListener('touchend',e=>{if(!opened)return;const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>60)showScene(scene+(d<0?1:-1));},{passive:true});
  const holder=document.getElementById('petals');
  for(let i=0;i<13;i++){
    const el=document.createElement('i');el.className='petal';el.style.left=`${(i*37+11)%96}%`;el.style.animationDuration=`${12+(i*3)%10}s`;el.style.animationDelay=`${-i*2.2}s`;el.style.scale=`${.65+(i%4)*.17}`;holder.appendChild(el);
  }
  showScene(0);
})();

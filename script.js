(() => {
  const app = document.getElementById('invitation');
  const scenes = [...document.querySelectorAll('.scene')];
  const enter = document.getElementById('openButton');
  const replay = document.getElementById('replayButton');
  const nav = document.getElementById('navigation');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const dots = document.getElementById('dots');
  let page = 0, opened = false, animating = false, timer = null;
  scenes.forEach((_,i) => {const dot=document.createElement('button'); dot.type='button';dot.className='dot';dot.setAttribute('aria-label',`Go to page ${i+1}`);dot.addEventListener('click',()=>{if(opened&&!animating&&i>0)show(i)});dots.appendChild(dot)});
  function show(i){if(i<0||i>=scenes.length)return;page=i;scenes.forEach((el,k)=>{el.classList.toggle('active',k===i);el.setAttribute('aria-hidden',String(k!==i));});previous.disabled=i<=1;next.disabled=i===scenes.length-1;[...dots.children].forEach((d,k)=>d.classList.toggle('current',i===k));}
  function begin(){if(opened||animating)return;opened=true;animating=true;scenes[0].classList.add('leaving');app.classList.add('opening');enter.disabled=true;timer=setTimeout(()=>{app.classList.remove('opening');app.classList.add('entered');animating=false;nav.hidden=false;show(1)},6900)}
  function restart(){clearTimeout(timer);animating=false;opened=false;app.classList.remove('opening','entered');nav.hidden=true;scenes[0].classList.remove('leaving');enter.disabled=false;show(0);}
  enter.addEventListener('click',begin);replay.addEventListener('click',restart);
  previous.addEventListener('click',()=>show(page-1));next.addEventListener('click',()=>show(page+1));
  let x=null;app.addEventListener('touchstart',e=>{x=e.changedTouches[0].clientX},{passive:true});app.addEventListener('touchend',e=>{if(!opened||animating||x===null)return;let dx=e.changedTouches[0].clientX-x;x=null;if(Math.abs(dx)>65)show(page+(dx<0?1:-1))},{passive:true});
  document.addEventListener('keydown',e=>{if(!opened||animating)return;if(e.key==='ArrowRight')show(page+1);if(e.key==='ArrowLeft')show(page-1)});
  const petalHolder=document.getElementById('petals');for(let i=0;i<17;i++){const p=document.createElement('i');p.className='petal';p.style.left=`${(i*37+11)%100}%`;p.style.animationDuration=`${10+(i%7)*2.2}s`;p.style.animationDelay=`-${(i*1.9)%19}s`;p.style.opacity=String(.23+(i%5)*.09);petalHolder.appendChild(p)}
  show(0);
})();

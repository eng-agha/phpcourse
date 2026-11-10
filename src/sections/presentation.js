export function initPresentation(){
 const root=document.querySelector('[data-presentation]');if(!root)return
 const slides=[...root.querySelectorAll('[data-slide]')],prev=root.querySelector('[data-prev]'),next=root.querySelector('[data-next]'),dialog=root.querySelector('dialog'),opener=root.querySelector('[data-overview]'),status=root.querySelector('[data-slide-status]'),progress=root.querySelector('progress')
 let index=0
 function render(n,write=true){index=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>{s.hidden=i!==index;s.setAttribute('aria-hidden',String(i!==index))});prev.disabled=index===0;next.disabled=index===slides.length-1;status.textContent=`${index+1} / ${slides.length}`;progress.value=index+1;dialog.querySelectorAll('[data-go-slide]').forEach(b=>b.setAttribute('aria-current',Number(b.dataset.goSlide)===index+1?'step':'false'));if(write)history.replaceState(null,'',`#slide-${index+1}`);root.querySelector('.slides-stage').scrollTop=0}
 function hash(){const match=location.hash.match(/^#slide-(\d+)$/);render(match?Number(match[1])-1:0,false)}
 root.classList.add('slides-ready');hash();addEventListener('hashchange',hash)
 prev.addEventListener('click',()=>render(index-1));next.addEventListener('click',()=>render(index+1))
 opener.addEventListener('click',()=>dialog.showModal());root.querySelector('[data-close-overview]').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>opener.focus())
 dialog.querySelectorAll('[data-go-slide]').forEach(b=>b.addEventListener('click',()=>{render(Number(b.dataset.goSlide)-1);dialog.close()}))
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}})
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const buttons=[...dialog.querySelectorAll('button')],first=buttons[0],last=buttons.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}})
 async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else if(root.requestFullscreen)await root.requestFullscreen();else throw new Error('unavailable')}catch{root.querySelector('[data-presentation-message]').textContent='Fullscreen is unavailable in this browser. Presentation controls still work.'}}
 root.querySelector('[data-fullscreen]').addEventListener('click',fullscreen)
 document.addEventListener('keydown',event=>{if(dialog.open||event.ctrlKey||event.metaKey||event.altKey||event.target.closest?.('input,textarea,select,[contenteditable=true]'))return;let handled=true;if(event.key==='ArrowRight'||event.key==='PageDown')render(index+1);else if(event.key==='ArrowLeft'||event.key==='PageUp')render(index-1);else if(event.key==='Home')render(0);else if(event.key==='End')render(slides.length-1);else if(event.key.toLowerCase()==='o')dialog.showModal();else if(event.key.toLowerCase()==='f')fullscreen();else handled=false;if(handled)event.preventDefault()})
}


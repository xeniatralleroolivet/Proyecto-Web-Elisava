<style>
#reviewDock{position:fixed;right:14px;bottom:14px;z-index:1000;font:15px/1.45 Catamaran,Arial,sans-serif;color:#111}
#reviewDock button,#reviewDock textarea{font:inherit}
#reviewDock button{padding:8px 14px;border:1px solid #111;background:#f6f3ee;color:#111;cursor:pointer}
#reviewDock .primary{background:#1f2a44;color:white}
#reviewOpen{box-shadow:3px 3px #c88bae}
#reviewPanel{width:min(365px,calc(100vw - 28px));max-height:75dvh;overflow:auto;background:#f6f3ee;border:1px solid #111;padding:14px;box-shadow:4px 4px #111}
#reviewPanel strong{font:19px 'Archivo Black',Arial,sans-serif}
#reviewPanel p{margin:8px 0}#reviewPanel textarea{width:100%;min-height:82px;padding:8px;resize:vertical}
.reviewActions{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
body.reviewPicking main *{cursor:crosshair!important}
.reviewHover{outline:3px dashed #e3642a!important;outline-offset:2px}
#reviewItems{padding-left:20px;max-height:145px;overflow:auto}
</style>
<aside id="reviewDock" aria-label="Revisión de la web">
<button id="reviewOpen" class="primary" aria-expanded="false">✎ Revisar la web</button>
<div id="reviewPanel" hidden><strong>Revisar la web</strong>
<p id="reviewGuide">Elige una acción y toca la parte de la página que quieras revisar.</p>
<div class="reviewActions"><button id="reviewEdit">Editar texto</button><button id="reviewNote">Anotar</button><button id="reviewClose">Cerrar</button></div>
<form id="reviewForm" hidden><label for="reviewInput" id="reviewLabel"></label><textarea id="reviewInput" required></textarea><div class="reviewActions"><button class="primary">Guardar</button><button type="button" id="reviewCancel">Cancelar</button></div></form>
<details id="reviewList"><summary id="reviewCount">Cambios guardados</summary><ol id="reviewItems"></ol><button id="reviewExport">Descargar revisión</button></details>
<p id="reviewStatus" role="status"></p></div></aside>
<script>
(() => {
  const get = id => document.getElementById(id);
  const dock=get('reviewDock'), panel=get('reviewPanel'), form=get('reviewForm'), input=get('reviewInput');
  const localService=location.origin==='http://127.0.0.1:48763';
  const key='strava-revision-v1';
  let items=[], mode='', selected=null, hovered=null, busy=false;
  const status=text=>get('reviewStatus').textContent=text;
  const initialText=new Map();
  const editable='h1,h2,h3,p,summary,.eyebrow,.lede,.hint,.index-label';
  document.querySelectorAll('main '+editable.split(',').join(',main ')).forEach(el=>{
    if(el.closest('.original,.monthcard,#testigos,.experiment-card,.archive-detail,.duel-card,form') ||
       el.querySelector('a,button,input,svg,[id],.km-valor') || el.matches('.data-source') || el.closest('.data-banner')) return;
    initialText.set(el,el.innerHTML);
  });
  function path(el){
    if(el.id)return '#'+CSS.escape(el.id);
    const parent=el.parentElement;
    const i=Array.from(parent.children).indexOf(el)+1;
    return path(parent)+' > :nth-child('+i+')';
  }
  function resetSelection(){
    mode='';selected=null;hovered?.classList.remove('reviewHover');hovered=null;
    document.body.classList.remove('reviewPicking');form.hidden=true;
    get('reviewGuide').textContent='Elige una acción y toca la parte de la página que quieras revisar.';
  }
  function setOpen(on){
    panel.hidden=!on;get('reviewOpen').hidden=on;get('reviewOpen').setAttribute('aria-expanded',String(on));
    if(!on)resetSelection();
  }
  function start(action){
    resetSelection();mode=action;document.body.classList.add('reviewPicking');
    panel.hidden=true;get('reviewOpen').hidden=false;get('reviewOpen').textContent='Cancelar selección';
    status('');
  }
  function finishPicking(){
    get('reviewOpen').textContent='✎ Revisar la web';setOpen(true);resetSelection();
  }
  function target(e){
    if(!e.target.closest('main,header,footer')||dock.contains(e.target))return null;
    if(mode==='edit'){const el=e.target.closest(editable);return initialText.has(el)?el:null;}
    return e.target.closest('[role="button"],button,a,.monthcard,svg,h1,h2,h3,p,blockquote,article,section')||e.target;
  }
  document.addEventListener('pointerover',e=>{
    if(!mode)return;hovered?.classList.remove('reviewHover');hovered=target(e);hovered?.classList.add('reviewHover');
  });
  document.addEventListener('click',e=>{
    if(!mode||dock.contains(e.target))return;
    e.preventDefault();e.stopImmediatePropagation();
    const el=target(e);
    if(!el){finishPicking();status('Para cambiar un dato, una nota de entrenamiento o un gráfico, utiliza Anotar.');return;}
    const action=mode;finishPicking();
    const context=el.getAttribute('aria-label')||el.innerText||el.textContent||el.tagName;
    selected={action,selector:path(el),section:el.closest('section[id]')?.id||'página',context:context.trim().slice(0,180)};
    get('reviewLabel').textContent=(action==='edit'?'Editar texto':'Anotar')+' · '+selected.section+' · '+selected.context.slice(0,55);
    input.value=action==='edit'?el.innerText:'';form.hidden=false;input.focus();
  },true);
  function render(){
    for(const [el,original] of initialText)if(el.dataset.reviewChanged){el.innerHTML=original;delete el.dataset.reviewChanged;}
    const list=get('reviewItems');list.replaceChildren();
    for(const item of items){
      if(item.action==='edit'){
        const el=document.querySelector(item.selector);
        if(initialText.has(el)){el.textContent=item.value;el.dataset.reviewChanged='1';}
      }
      const li=document.createElement('li');li.textContent=item.section+' · '+(item.action==='edit'?'Texto':'Nota')+' · '+item.value;list.prepend(li);
    }
    get('reviewCount').textContent='Revisión ('+items.length+')';
  }
  const ready=(async()=>{
    try{if(localService){
      const r=await fetch('/revision',{cache:'no-store'});if(!r.ok)throw Error();items=await r.json();
    }else items=JSON.parse(localStorage.getItem(key)||'[]');
    render();status(localService?'Al guardar, tus cambios llegan al proyecto.':'Los cambios se guardan en este navegador. Descarga la revisión para enviarla por el chat.');
    }catch{status('No se ha podido leer la revisión guardada.');}
  })();
  form.onsubmit=async e=>{
    e.preventDefault();if(busy||!selected||!input.value.trim())return;
    busy=true;const entry={...selected,value:input.value,id:crypto.randomUUID()};
    try{
      await ready;
      if(localService){
        const r=await fetch('/revision',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)});
        if(!r.ok)throw Error();items=await r.json();
      }else{const updated=[...items,entry];localStorage.setItem(key,JSON.stringify(updated));items=updated;}
      render();resetSelection();status(localService?'Guardado en el proyecto.':'Guardado en este navegador.');
    }catch{status('No se pudo guardar. Tu texto sigue en el editor.');}
    finally{busy=false;}
  };
  get('reviewOpen').onclick=()=>{if(mode)finishPicking();else setOpen(true);};
  get('reviewClose').onclick=()=>setOpen(false);get('reviewCancel').onclick=resetSelection;
  get('reviewEdit').onclick=()=>start('edit');get('reviewNote').onclick=()=>start('note');
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mode)finishPicking();});
  get('reviewExport').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(items,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='Revision_Strava.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
})();
</script>

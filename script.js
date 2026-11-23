'use strict';
// Las categorías editoriales corresponden a notas revisadas.
const lecturas = {
  "2026-04-12:4022965944": "dificil",
  "2026-04-26:1553647313": "agradable",
  "2026-04-28:2332195374": "neutro",
  "2026-05-29:1815910366": "dificil",
  "2026-05-31:1658591062": "mixto",
  "2026-05-31:788419764": "dificil",
  "2026-06-05:2697348672": "agradable",
  "2026-06-10:1125660650": "neutro",
  "2026-06-16:977961532": "mixto",
  "2026-06-20:2563020740": "neutro",
  "2026-06-22:2881429678": "dificil",
  "2026-06-26:2415323289": "agradable",
  "2026-06-29:2243451261": "mixto",
  "2026-07-01:207690420": "mixto",
  "2026-07-13:1432717449": "neutro",
  "2026-07-20:2364672572": "dificil",
  "2026-07-21:3452545505": "dificil",
  "2026-07-29:1802881427": "agradable",
  "2026-08-04:1286451463": "mixto",
  "2026-08-09:783290791": "dificil",
  "2026-08-13:560724050": "neutro",
  "2026-08-15:595849790": "dificil",
  "2026-08-29:1970525321": "neutro",
  "2026-08-31:1420891064": "agradable",
  "2026-09-02:4259839125": "dificil",
  "2026-09-06:3137891841": "mixto",
  "2026-09-09:3946380878": "neutro",
  "2026-09-12:2946588427": "neutro",
  "2026-09-13:3079431568": "neutro",
  "2026-09-15:1556940709": "agradable",
  "2026-09-17:477080563": "dificil",
  "2026-09-21:1124516924": "agradable",
  "2026-09-23:1506761284": "agradable",
  "2026-09-26:2334387995": "agradable",
  "2026-09-28:205662343": "dificil",
  "2026-09-30:1780719937": "mixto",
  "2026-10-02:2495693946": "dificil",
  "2026-10-06:1588662665": "neutro",
  "2026-10-08:3174777157": "dificil",
  "2026-10-11:1561479329": "mixto",
  "2026-10-13:3764264394": "neutro",
  "2026-10-16:2162096671": "mixto",
  "2026-10-20:3259145756": "neutro",
  "2026-10-22:2459317352": "neutro",
  "2026-10-28:1144451562": "dificil"
};
function huella(s){let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return h>>>0}
function leerCSV(texto) {
  const filas = [];
  let fila = [], campo = '', citado = false;
  texto = texto.replace(/^\uFEFF/, '');
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (c === '"') {
      if (citado && texto[i + 1] === '"') { campo += '"'; i++; }
      else citado = !citado;
    } else if (!citado && c === ',') {
      fila.push(campo);
      campo = '';
    } else if (!citado && (c === '\n' || c === '\r')) {
      if (c === '\r' && texto[i + 1] === '\n') i++;
      fila.push(campo);
      if (fila.some(Boolean)) filas.push(fila);
      fila = [];
      campo = '';
    } else campo += c;
  }
  if (citado) throw Error('Hay comillas sin cerrar.');
  fila.push(campo);
  if (fila.some(Boolean)) filas.push(fila);
  return filas;
}

function cargarRegistros(texto) {
  const [cabecera, ...filas] = leerCSV(texto);
  const obligatorios = ['FECHA','KM','ZONA','FEEDBACK','COMENTARIOS (MÍOS)','RITMO MEDIO'];
  if (!obligatorios.every(c => cabecera?.includes(c))) throw Error('Revisa los encabezados de la tabla.');
  const registros = [];
  let fecha;
  for (const [i, fila] of filas.entries()) {
    if (fila.length !== cabecera.length) throw Error('Revisa las columnas del registro ' + (i + 1));
    const valor = nombre => fila[cabecera.indexOf(nombre)];
    const distancia = valor('KM');
    const tramo = distancia.match(/\b(ida|vuelta)\b/i)?.[1] || '';
    if (valor('FECHA').trim()) {
      const [dia, mes] = valor('FECHA').trim().toUpperCase().replace('SEMPTIEMBRE','SEPTIEMBRE').split(/\s+/);
      const numero = meses.indexOf(mes) + 1;
      if (!numero || !/^\d{1,2}$/.test(dia)) throw Error('Revisa la fecha del registro ' + (i + 1));
      fecha = '2026-' + String(numero).padStart(2,'0') + '-' + dia.padStart(2,'0');
    } else if (!fecha || !tramo) throw Error('Falta la fecha del registro ' + (i + 1));
    if (fecha === '2026-09-16' && /cinta/i.test(valor('ZONA'))) continue;
    const km = parseFloat(distancia.replace(',','.'));
    if (!Number.isFinite(km)) throw Error('Revisa la distancia del registro ' + (i + 1));
    const comentario = valor('COMENTARIOS (MÍOS)');
    const feedback = valor('FEEDBACK').match(/^\s*(\d+)\s+kudos?\s*$/i);
    registros.push({id:i+1, fecha, tramo, km, comentario, ritmo:valor('RITMO MEDIO').replace(/\s*\/km$/i,''),
      kudos:feedback ? Number(feedback[1]) : null, lectura:lecturas[fecha + ':' + huella(comentario)] || 'sin_registro',
      datosHoja:cabecera.map((c,k)=>[c,fila[k]]).filter(([c,v])=>v && c !== 'COMENTARIOS (MÍOS)' && c !== 'FEEDBACK')});
  }
  if (!registros.length) throw Error('La tabla no contiene actividades para mostrar.');
  return registros;
}
const $ = id => document.getElementById(id);
const meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
const mesesCortos = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
const codigo = {
  agradable:{nombre:'Bienestar', color:'#ef846d',lectura:'Fragmento interpretado como una vivencia agradable.'},
  dificil:{nombre:'Dificultad', color:'#8ab1d0',lectura:'El comentario menciona una dificultad, dolor o esfuerzo.'},
  mixto:{nombre:'Sensación mixta', color:'#b6a7cb',lectura:'El comentario combina señales o sensaciones distintas.'},
  neutro:{nombre:'Rutina / contexto', color:'#a9ba9a',lectura:'Comentario descriptivo sin una emoción inequívoca.'},
  sin_registro:{nombre:'Sin lectura emocional', color:'#b7bcb4',lectura:'El registro no permite identificar una sensación con suficiente claridad.'}
};
const fmt = n => Number(n).toLocaleString('es-ES',{maximumFractionDigits:2,minimumFractionDigits:2});
const rand = n => {const x=Math.sin(n*129.13+88.23)*43758.5453;return x-Math.floor(x);};
const E = (name,attrs,parent) => {const e=document.createElementNS('http://www.w3.org/2000/svg',name);Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,String(v)));(parent||$('archiveViz')).appendChild(e);return e;};
function shapePath(cx,cy,r,seed,roughness=.37){
  const points=[];const N=11;
  for(let i=0;i<N;i++) {const angle=-Math.PI/2+i*Math.PI*2/N,rad=r*(1-roughness/2+roughness*rand(seed*23+i*7));points.push([cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad]);}
  const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
  const xy=p=>p.map(v=>v.toFixed(2)).join(' ');
  let d='M '+xy(mid(points[N-1],points[0]));
  for(let j=0;j<N;j++) d+=' Q '+xy(points[j])+' '+xy(mid(points[j],points[(j+1)%N]));
  return d+' Z';
}

function iniciarDatos(registros) {
  document.querySelectorAll('[data-fecha]').forEach(tarjeta => {
    const salida = registros.find(r => r.fecha === tarjeta.dataset.fecha);
    if (!salida) { tarjeta.hidden = true; return; }
    tarjeta.querySelector('blockquote').textContent = salida.comentario;
    tarjeta.querySelector('.km-valor').textContent = fmt(salida.km);
    tarjeta.querySelector('.duel-under').textContent = salida.ritmo + ' min/km · ' + (salida.kudos ?? '—') + (salida.kudos === 1 ? ' kudo' : ' kudos');
  });
  $('archiveCount').textContent = registros.length;
  /* 00 — Experimento. Tres salidas documentadas. */
  const casos = registros.slice(0, 3).map((salida, indice) => ({
    texto: salida.comentario,
    km: fmt(salida.km) + ' km',
    ritmo: salida.ritmo,
    kudos: String(salida.kudos ?? '—'),
    reflejo: 'Ahora que conoces las cifras, ¿cambiarías tu decisión?',
    color: ['#8ab1d0', '#ef846d', '#a9ba9a'][indice]
  }));
  let casoActual=0;
  let respuestas=[null,null,null];
  function dibujarCaso(){
    const c=casos[casoActual];
    $('scenarioText').textContent=c.texto;
    $('scenarioNumber').textContent=`HISTORIA ${String(casoActual+1).padStart(2,'0')} / ${String(casos.length).padStart(2,'0')} · SIN MÉTRICAS`;
    $('stepDots').innerHTML=casos.map((_,i)=>`<i class="${i<=casoActual?'active':''}"></i>`).join('');
    $('stepDots').setAttribute('aria-label',`Historia ${casoActual+1} de ${casos.length}`);
    const svg=$('scenarioSketch');svg.replaceChildren();
    E('path',{d:'M10 82 C65 10 100 115 150 51 S265 103 330 23',stroke:c.color,'stroke-width':9,fill:'none','stroke-linecap':'round'},svg);
    E('path',{d:'M12 26 C76 105 105 18 164 77 S252 29 325 90',stroke:'#35413c','stroke-width':2,fill:'none','stroke-dasharray':'3 9','stroke-linecap':'round',opacity:.7},svg);
    E('circle',{cx:150,cy:51,r:6,fill:'#282e2a'},svg);
    $('reveal').hidden=true;$('expEnd').hidden=true;
    document.querySelectorAll('[data-answer]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});
    if(respuestas[casoActual]) mostrarRevelacion(respuestas[casoActual]);
  }
  function mostrarRevelacion(answer){
    const c=casos[casoActual];
    $('expKm').textContent=c.km;$('expPace').textContent=c.ritmo;$('expKudos').textContent=c.kudos;
    $('expReflection').textContent=c.reflejo;
    const labels={si:'Publicaría',no:'No publicaría',depende:'Depende'};
    $('personalAnswer').textContent=labels[answer];
    document.querySelectorAll('[data-answer]').forEach(b=>{const on=b.dataset.answer===answer;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
    $('reveal').hidden=false;
    $('nextCase').hidden=casoActual===casos.length-1;
    if(casoActual===casos.length-1){
      const yes=respuestas.filter(x=>x==='si').length,no=respuestas.filter(x=>x==='no').length,depends=respuestas.filter(x=>x==='depende').length;
      $('expSummary').textContent=`De estas experiencias, compartirías ${yes}, no compartirías ${no} y en ${depends} caso(s) dependería del contexto. No hay una respuesta ideal: lo importante es preguntarte qué ha influido en cada elección. Ahora puedes contrastarlo con mis registros reales.`;
      $('expEnd').hidden=false;
    }
  }
  document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{respuestas[casoActual]=b.dataset.answer;mostrarRevelacion(b.dataset.answer);}));
  $('nextCase').addEventListener('click',()=>{casoActual=Math.min(casoActual+1,casos.length-1);dibujarCaso();});
  $('changeDecision').addEventListener('click',()=>{respuestas[casoActual]=null;$('reveal').hidden=true;$('expEnd').hidden=true;document.querySelectorAll('[data-answer]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});});
  $('restartCases').addEventListener('click',()=>{casoActual=0;respuestas=[null,null,null];dibujarCaso();});
  dibujarCaso();
  
  /* 02 — Summary derived from source rows, not demo values. */
  $('totalActivities').textContent=String(registros.length);
  $('totalKm').textContent=fmt(registros.reduce((s,d)=>s+d.km,0));
  
  /* 04 — Archive, shared record set in both views. */
  let view='sentir',filter='todas',selected=0;
  function pintarDetalle(){
    const d=registros[selected];if(!d)return;
    const dt=new Date(d.fecha+'T12:00:00');const c=codigo[d.lectura]||codigo.sin_registro;
    $('detailDay').textContent=String(dt.getDate()).padStart(2,'0');
    $('detailDate').textContent=meses[dt.getMonth()]+ ' 2026'+(d.tramo?' · '+d.tramo:'');
    $('detailMood').textContent=c.nombre;
    $('detailMood').style.color=c.color;
    $('detailText').textContent=d.comentario ?? 'Nota íntegra pendiente de cotejar con el original.';
    $('detailKm').textContent=fmt(d.km);
    $('detailPace').textContent=d.ritmo||'—';
    $('detailKudos').textContent=String(d.kudos??'—');
    $('detailScope').textContent = d.datosHoja.map(([campo, valor]) => campo + ': ' + valor).join(' · ');
  }
  function pintarArchivo(){
    const svg=$('archiveViz');svg.replaceChildren();
    const x0=33,x1=1077,step=(x1-x0)/7,y0=59,y1=298;
    for(let col=0;col<7;col++){
      const left=x0+col*step,cx=left+step/2;
      E('rect',{x:left,y:35,width:step,height:278,fill:col%2===0?'#ffffff04':'transparent'},svg);
      E('line',{x1:left,y1:35,x2:left,y2:315,stroke:'#667067','stroke-width':.8,opacity:.65},svg);
      const t=E('text',{x:cx,y:26,fill:'#d1d8ce','font-size':13,'font-weight':600,'text-anchor':'middle','letter-spacing':2,'font-family':'DM Sans,Arial'},svg);
      t.textContent=mesesCortos[col+3];
    }
    E('line',{x1:x1,y1:35,x2:x1,y2:315,stroke:'#667067',opacity:.65},svg);
    [0,1,2,3].forEach(i=>E('line',{x1:x0,y1:65+i*76,x2:x1,y2:65+i*76,stroke:'#758075','stroke-width':.7,'stroke-dasharray':'2 8',opacity:.35},svg));
    // Labels for week positions — not values on a performance axis.
    [1,10,20,30].forEach((day,i)=>{const t=E('text',{x:11,y:68+i*76,fill:'#aab7aa','font-size':9,'text-anchor':'start'},svg);t.textContent=day;});
    registros.forEach((d,i)=>{
      const m=Number(d.fecha.slice(5,7))-4; if(m<0||m>6)return;
      const day=Number(d.fecha.slice(8,10));
      const twins=registros.filter(z=>z.fecha===d.fecha);
      const sameIx=twins.length>1?twins.findIndex(z=>z.id===d.id):-1;
      const cx=x0+(m+.5)*step+(rand(i+33)-.5)*48+(sameIx<0?0:(sameIx-.5)*26);
      const cy=y0+(day-1)/30*(y1-y0)+(rand(i+55)-.5)*13+(sameIx<0?0:(sameIx-.5)*6);
      const highlighted=filter==='todas'||filter===d.lectura;
      const active=selected===i;
      const c=codigo[d.lectura]||codigo.sin_registro;
      const base=5.5+Math.sqrt(Math.max(d.km,0)/10.61)*7.5;
      const g=E('g',{class:'dot',tabindex:0,role:'button','aria-label':`${d.fecha}, ${fmt(d.km)} kilómetros, ${d.ritmo} por kilómetro, ${c.nombre}`},svg);
      E('circle',{cx,cy,r:22,fill:'transparent'},g);
      E('circle',{cx,cy,r:base+7,fill:'none',stroke:'#fbf7ed','stroke-width':1.3,opacity:active?1:0,class:'focus-ring'},g);
      if(view==='sentir'){
        E('path',{d:shapePath(cx,cy,base,i+7,d.lectura==='dificil'?.65:.32),fill:c.color,opacity:highlighted?1:.12},g);
      }else{
        E('circle',{cx,cy,r:base,fill:highlighted?'#e0e6dc':'#d1d9ce',opacity:highlighted?.9:.1,stroke:active?'#ef846d':'none','stroke-width':1.6},g);
        if(d.kudos>0)E('circle',{cx:cx+base+4,cy:cy-base-3,r:Math.min(5,1.5+d.kudos*.48),fill:'#ef846d',opacity:highlighted?1:.1},g);
      }
      const select=()=>{selected=i;pintarDetalle();pintarArchivo();};
      g.addEventListener('click',select);
      g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select();}});
    });
    const legend=$('archiveLegend');legend.replaceChildren();
    if(view==='sentir'){
      Object.values(codigo).forEach(c=>{const span=document.createElement('span');const swatch=document.createElement('i');swatch.style.background=c.color;span.appendChild(swatch);span.appendChild(document.createTextNode(c.nombre));legend.appendChild(span);});
    }else{
      legend.innerHTML='<span><i style="background:#e0e6dc"></i> Tamaño del círculo = kilómetros</span><span><i style="background:#ef846d"></i> Punto lateral = kudos recibidos</span>';
    }
  }
  function setView(v){view=v;$('viewFeeling').setAttribute('aria-pressed',String(v==='sentir'));$('viewPosted').setAttribute('aria-pressed',String(v==='registrar'));pintarArchivo();}
  $('viewFeeling').addEventListener('click',()=>setView('sentir'));
  $('viewPosted').addEventListener('click',()=>setView('registrar'));
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
    filter=b.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    const idx=registros.findIndex(x=>filter==='todas'||x.lectura===filter);
    if(idx>=0&&filter!=='todas')selected=idx;
    pintarDetalle();pintarArchivo();
  }));
  pintarDetalle();pintarArchivo();
  
  /* 05 — Monthly average kudos from recorded values. */
  const bars=$('kudosBars');
  const grouped=Array.from({length:7},(_,k)=>registros.filter(d=>Number(d.fecha.slice(5,7))===k+4));
  const avg=grouped.map(g=>g.length?g.reduce((s,x)=>s+(x.kudos||0),0)/g.length:0);
  const barMax=Math.max(1,...avg);
  grouped.forEach((g,k)=>{
    const col=document.createElement('div');col.className='bar-col';
    const val=document.createElement('span');val.className='bar-value';val.textContent=avg[k].toLocaleString('es-ES',{minimumFractionDigits:1,maximumFractionDigits:1});
    const bar=document.createElement('div');bar.className='bar';bar.style.height=`${Math.max(4,avg[k]/barMax*160)}px`;
    const month=document.createElement('small');month.textContent=mesesCortos[k+3];
    col.title=`${meses[k+3]}: ${avg[k].toFixed(2)} kudos medios en ${g.length} registros`;
    col.append(val,bar,month);bars.appendChild(col);
  });
}

/* Copiar sigue siendo una acción local independiente de la publicación. */
$('copyReflection').addEventListener('click',async()=>{
  const message=$('reflection').value.trim();
  if(!message){$('reflectionPrivacy').textContent='Escribe algo antes de copiarlo.';$('reflection').focus();return;}
  try{
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(message);
    else { $('reflection').focus();$('reflection').select();if(!document.execCommand('copy'))throw Error('copy failed'); }
    $('reflectionPrivacy').textContent='Texto copiado al portapapeles. Copiar no publica la respuesta.';
  }catch(_){$('reflectionPrivacy').textContent='No se pudo copiar automáticamente. Selecciona tu texto y usa Ctrl+C.';}
});

/* 07 — Testigos: demo local + almacenamiento público conectado. */
const witnessConfig=window.TESTIGOS_CONFIG||{};
const backendUrl=String(witnessConfig.supabaseUrl||'').trim().replace(/\/$/,'');
const publicKey=String(witnessConfig.publishableKey||'').trim();
const sharedArchive=Boolean(/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(backendUrl)&&publicKey);
const demoKey='lo-que-no-cuenta-testigos-demo-v1';
const colorsWitness=['#ef846d','#8ab1d0','#a9ba9a','#b5a9c7','#d9bd7c','#c8abb0','#95b6b5'];
let witnesses=[],visibleWitnesses=48,chosenWitnessId=null,posting=false,lastPostAt=0;
const wall=$('testigosWall'),counter=$('witnessCount'),empty=$('communityEmpty');
const witnessState=$('communityState'),witnessDetail=$('testigoDetail');
const reflectionInput=$('reflection'),sendButton=$('sendReflection');
$('communityModeLabel').textContent=sharedArchive?'Archivo público conectado.':'Demostración local: solo visible en este navegador.';
$('reflectionPrivacy').textContent=sharedArchive?'Las respuestas enviadas serán públicas y anónimas.':'Modo de prueba: tus respuestas se guardan solo en este navegador. Para compartirlas entre personas hay que activar la base de datos.';
sendButton.innerHTML=sharedArchive?'Publicar mi reflexión <span aria-hidden="true">↗</span>':'Enviar mi reflexión <span aria-hidden="true">↗</span>';
reflectionInput.addEventListener('input',()=>{$('reflectionCount').textContent=`${reflectionInput.value.length} / 900 caracteres`;});
function codeFromString(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
const dated=iso=>{const d=new Date(iso);return Number.isNaN(d.getTime())?'':d.toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});};
function storeLocal(){try{return JSON.parse(localStorage.getItem(demoKey)||'[]').filter(x=>x&&typeof x.mensaje==='string');}catch(_){return [];}}
function writeLocal(list){try{localStorage.setItem(demoKey,JSON.stringify(list.slice(0,150)));return true;}catch(_){return false;}}
function headers(){const h={'apikey':publicKey,'Content-Type':'application/json'};if(publicKey.startsWith('eyJ'))h.Authorization='Bearer '+publicKey;return h;}
async function getWitnesses(){
  if(!sharedArchive)return storeLocal();
  const query='?select=id,mensaje,creado_en&publicado=eq.true&order=creado_en.desc&limit=200';
  const res=await fetch(backendUrl+'/rest/v1/testimonios'+query,{method:'GET',headers:headers(),cache:'no-store'});
  if(!res.ok)throw new Error('No se pueden cargar las respuestas ('+res.status+'). Revisa la conexión y los permisos de la base de datos.');
  const result=await res.json();return Array.isArray(result)?result:[];
}
async function saveWitness(message){
  if(!sharedArchive){
    const item={id:(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():'testigo-'+Date.now()+'-'+Math.random()),mensaje:message,creado_en:new Date().toISOString()};
    const ok=writeLocal([item,...storeLocal()]);if(!ok)throw new Error('El navegador no permite guardar la respuesta.');return item;
  }
  const res=await fetch(backendUrl+'/rest/v1/testimonios',{method:'POST',headers:{...headers(),Prefer:'return=representation'},body:JSON.stringify({mensaje:message})});
  if(!res.ok){let reason='';try{const data=await res.json();reason=String(data.message||'').slice(0,220)}catch(_){}throw new Error('No se pudo publicar ('+res.status+'). '+reason)}
  const result=await res.json();if(!Array.isArray(result)||!result[0])throw new Error('La respuesta no se pudo confirmar.');return result[0];
}
function showWitness(item,index){
  chosenWitnessId=item.id;
  $('testigoNumber').textContent='TESTIGO '+String(index+1).padStart(2,'0');
  $('testigoDate').textContent=dated(item.creado_en);
  $('testigoText').textContent=item.mensaje;
  witnessDetail.style.setProperty('--witness-color',colorsWitness[codeFromString(String(item.id))%colorsWitness.length]);
  witnessDetail.hidden=false;
  wall.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===String(item.id))));
}
function paintWitnesses(){
  counter.textContent=String(witnesses.length);
  wall.replaceChildren();
  empty.hidden=witnesses.length>0;
  wall.hidden=witnesses.length===0;
  const toDisplay=witnesses.slice(0,visibleWitnesses);
  toDisplay.forEach((item,index)=>{
    const seed=codeFromString(String(item.id));
    const color=colorsWitness[seed%colorsWitness.length];
    const diameter=20+seed%25;
    const offsets=[-9,2,8,-4,0,5];
    const button=document.createElement('button');button.type='button';button.className='testigo-button';button.dataset.id=String(item.id);
    button.setAttribute('aria-label','Leer reflexión anónima '+(index+1)+(dated(item.creado_en)?', '+dated(item.creado_en):''));
    button.setAttribute('aria-pressed',String(item.id===chosenWitnessId));
    button.style.setProperty('--diameter',diameter+'px');
    button.style.setProperty('--dot-color',color);
    button.style.setProperty('--rotation',(seed%27-13)+'deg');
    button.style.setProperty('--offset',offsets[seed%offsets.length]+'px');
    button.style.setProperty('--shape',`${44+(seed%13)}% ${42+(seed%17)}% ${46+(seed%12)}% ${41+(seed%14)}% / ${42+(seed%15)}% ${45+(seed%11)}% ${43+(seed%17)}% ${41+(seed%12)}%`);
    button.addEventListener('click',()=>showWitness(item,index));
    wall.appendChild(button);
  });
  const current=witnesses.find(x=>String(x.id)===String(chosenWitnessId));
  if(current){showWitness(current,witnesses.indexOf(current));}else{chosenWitnessId=null;witnessDetail.hidden=true;}
  $('loadMoreTestigos').hidden=visibleWitnesses>=witnesses.length;
}
async function loadTestigos(){
  witnessState.textContent='Cargando testimonios…';
  try{witnesses=await getWitnesses();paintWitnesses();witnessState.textContent=witnesses.length?sharedArchive?'Reflexiones anónimas compartidas por quienes han visitado esta página. Pulsa un círculo.':'Respuestas de esta demostración, guardadas en este navegador. Pulsa un círculo.':sharedArchive?'Todavía no hay reflexiones públicas.':'Todavía no hay respuestas en este navegador.';}
  catch(e){witnessState.textContent=e.message||'No se ha podido cargar el archivo.';}
}
$('reflectionForm').addEventListener('submit',async event=>{
  event.preventDefault();if(posting)return;
  const message=reflectionInput.value.trim();
  if(message.length<10){$('reflectionPrivacy').textContent='Escribe una reflexión de al menos 10 caracteres.';reflectionInput.focus();return;}
  if(message.length>900){$('reflectionPrivacy').textContent='La reflexión supera los 900 caracteres.';return;}
  if(!$('publicConsent').checked){$('reflectionPrivacy').textContent='Para enviar, confirma primero que deseas compartir tu respuesta.';return;}
  if(Date.now()-lastPostAt<15000){$('reflectionPrivacy').textContent='Espera unos segundos antes de enviar otra reflexión.';return;}
  posting=true;sendButton.disabled=true;sendButton.textContent='Enviando…';
  try{
    const item=await saveWitness(message);lastPostAt=Date.now();
    witnesses=[item,...witnesses.filter(x=>String(x.id)!==String(item.id))];visibleWitnesses=Math.max(48,visibleWitnesses);
    paintWitnesses();showWitness(item,0);
    reflectionInput.value='';$('reflectionCount').textContent='0 / 900 caracteres';$('publicConsent').checked=false;
    $('reflectionPrivacy').textContent=sharedArchive?'Reflexión publicada. Ya puede leerla cualquier visitante.':'Reflexión guardada en este navegador. La publicación colectiva necesitará conectar la base de datos.';
    witnessState.textContent=sharedArchive?'Tu testigo se ha añadido al archivo público.':'Tu testigo se ha añadido a esta demostración local.';
    witnessDetail.scrollIntoView({behavior:'smooth',block:'nearest'});
  }catch(e){$('reflectionPrivacy').textContent=e.message||'Se ha producido un error al enviar la reflexión.';}
  finally{posting=false;sendButton.disabled=false;sendButton.innerHTML=sharedArchive?'Publicar mi reflexión <span aria-hidden="true">↗</span>':'Enviar mi reflexión <span aria-hidden="true">↗</span>';}
});
$('refreshTestigos').addEventListener('click',loadTestigos);
$('loadMoreTestigos').addEventListener('click',()=>{visibleWitnesses+=48;paintWitnesses();});
loadTestigos();

/* Header + reading progress */
const menu=$('navlinks'),menuBtn=$('menuBtn');
menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');menuBtn.textContent=open?'×':'☰';});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}));
function progress(){const doc=document.documentElement;const max=doc.scrollHeight-doc.clientHeight;$('progress').style.width=(max>0?window.scrollY/max*100:0)+'%';}
window.addEventListener('scroll',progress,{passive:true});window.addEventListener('resize',progress);progress();

async function abrirDatos(archivo) {
  try {
    let texto;
    if (archivo) texto = await archivo.text();
    else {
      const respuesta = await fetch('./STRAVA_estadisticas.csv', {cache:'no-store'});
      if (!respuesta.ok) throw Error('No se pudo descargar la tabla.');
      texto = await respuesta.text();
    }
    iniciarDatos(cargarRegistros(texto));
    $('csvPanel').hidden = true;
  } catch (error) {
    $('csvEstado').textContent = 'No se pudo abrir el CSV. ' + error.message;
    $('csvPanel').hidden = false;
  }
}
$('csvArchivo').addEventListener('change', event => {
  const archivo = event.target.files[0];
  if (archivo) abrirDatos(archivo);
});
if (location.protocol === 'file:') $('csvPanel').hidden = false;
else abrirDatos();


'use strict';
/* Las notas pendientes se representan con null. */
const registros = [
  {
    "fecha": "2026-04-12",
    "km": 5.53,
    "ritmo": "12:40",
    "kudos": 2,
    "comentario": "HORRIBLE estaba muerta. gran parte andando. he vuelto en bus",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 1
  },
  {
    "fecha": "2026-04-26",
    "km": 6.76,
    "ritmo": "7:51",
    "kudos": 0,
    "comentario": "mejor de lo que me esperaba 😎",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 2
  },
  {
    "fecha": "2026-04-28",
    "km": 9.03,
    "ritmo": "7:37",
    "kudos": 1,
    "comentario": "tiempo total 1h33m. 20 minutos de pausa: beber agua, esperar semaforos у paradita técnica en la fib para hacer pipi",
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 3
  },
  {
    "fecha": "2026-05-29",
    "km": 7.01,
    "ritmo": "7:16",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 4
  },
  {
    "fecha": "2026-05-31",
    "km": 5.22,
    "ritmo": "6:44",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 5
  },
  {
    "fecha": "2026-05-31",
    "km": 3.53,
    "ritmo": "8:12",
    "kudos": 0,
    "tramo": "vuelta",
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 6
  },
  {
    "fecha": "2026-06-05",
    "km": 6,
    "ritmo": "6:54",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 7
  },
  {
    "fecha": "2026-06-10",
    "km": 6.3,
    "ritmo": "6:45",
    "kudos": 1,
    "comentario": "me he encontrado un gatito por el camino 😋\nbuen ritmo\nparando lo necesario 🥵",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 8
  },
  {
    "fecha": "2026-06-16",
    "km": 8.04,
    "ritmo": "6:42",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 9
  },
  {
    "fecha": "2026-06-20",
    "km": 6.26,
    "ritmo": "6:36",
    "kudos": 1,
    "comentario": "dándole mucho al pico como siempre 🥴🌟🎀\nUNA PUTA MIERDA COMO UNA CASA 💩\nFATAL\nCALORRRO INFERNAL",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 10
  },
  {
    "fecha": "2026-06-22",
    "km": 2.63,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 11
  },
  {
    "fecha": "2026-06-26",
    "km": 5.03,
    "ritmo": "6:44",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 12
  },
  {
    "fecha": "2026-06-29",
    "km": 8.1,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": "voy a tener que pillarle el ritmo porque sino me muero 🫁🫀🥵\nuna bromita 🥲🤣\nhoy ha costado un poquito más",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 13
  },
  {
    "fecha": "2026-07-01",
    "km": 4.03,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 14
  },
  {
    "fecha": "2026-07-13",
    "km": 5.02,
    "ritmo": "6:30",
    "kudos": 1,
    "comentario": "mucho viento en contra por eso 😪💔\nestar de viaje y salir de fiesta pasan factura 🆘\nmuy dura la vuelta al running 🥵\nMUCHISIMO CALOR estaba CHORREANDO BESTIA 😭\ntan duro que pensaba que me plantaba a los 4k",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 15
  },
  {
    "fecha": "2026-07-20",
    "km": 5.6,
    "ritmo": "6:27",
    "kudos": 1,
    "comentario": "no he llegado ni a la fuente de cervantes\nuna putita mierda 💩\nestaba reventada 🤣",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 16
  },
  {
    "fecha": "2026-07-21",
    "km": 3.21,
    "ritmo": "6:30",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 17
  },
  {
    "fecha": "2026-07-29",
    "km": 10.61,
    "ritmo": "6:36",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 18
  },
  {
    "fecha": "2026-08-04",
    "km": 1.23,
    "ritmo": "6:47",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 19
  },
  {
    "fecha": "2026-08-09",
    "km": 5.14,
    "ritmo": "6:41",
    "kudos": 0,
    "comentario": "horrible correr en agosto por bcn 💀💔 no podía con mi vida",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 20
  },
  {
    "fecha": "2026-08-13",
    "km": 5.08,
    "ritmo": "6:43",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 21
  },
  {
    "fecha": "2026-08-15",
    "km": 2.4,
    "ritmo": "7:26",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 22
  },
  {
    "fecha": "2026-08-29",
    "km": 4.2,
    "ritmo": "6:36",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 23
  },
  {
    "fecha": "2026-08-31",
    "km": 6.04,
    "ritmo": "6:23",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 24
  },
  {
    "fecha": "2026-09-02",
    "km": 4,
    "ritmo": "6:40",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 25
  },
  {
    "fecha": "2026-09-06",
    "km": 6.19,
    "ritmo": "6:37",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 26
  },
  {
    "fecha": "2026-09-09",
    "km": 5,
    "ritmo": "6:29",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 27
  },
  {
    "fecha": "2026-09-12",
    "km": 5.05,
    "ritmo": "7:00",
    "kudos": 0,
    "comentario": "de tranquis 😎 investigando a ver como funciona mi nuevo reloj",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 28
  },
  {
    "fecha": "2026-09-13",
    "km": 6.14,
    "ritmo": "7:00",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 29
  },
  {
    "fecha": "2026-09-15",
    "km": 6.64,
    "ritmo": "6:20",
    "kudos": 0,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 30
  },
  {
    "fecha": "2026-09-17",
    "km": 5.31,
    "ritmo": "6:38",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 31
  },
  {
    "fecha": "2026-09-21",
    "km": 8.01,
    "ritmo": "6:01",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 32
  },
  {
    "fecha": "2026-09-23",
    "km": 7.08,
    "ritmo": "6:02",
    "kudos": 3,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 33
  },
  {
    "fecha": "2026-09-26",
    "km": 4.05,
    "ritmo": "6:30",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 34
  },
  {
    "fecha": "2026-09-28",
    "km": 5.35,
    "ritmo": "6:18",
    "kudos": 1,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 35
  },
  {
    "fecha": "2026-09-30",
    "km": 8.06,
    "ritmo": "6:07",
    "kudos": 4,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 36
  },
  {
    "fecha": "2026-10-02",
    "km": 1.8,
    "ritmo": "6:18",
    "kudos": 3,
    "comentario": "RE MAL",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 37
  },
  {
    "fecha": "2026-10-06",
    "km": 6.03,
    "ritmo": "5:53",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 38
  },
  {
    "fecha": "2026-10-08",
    "km": 3.11,
    "ritmo": "6:09",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 39
  },
  {
    "fecha": "2026-10-11",
    "km": 10.03,
    "ritmo": "6:35",
    "kudos": 6,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 40
  },
  {
    "fecha": "2026-10-13",
    "km": 5.17,
    "ritmo": "5:51",
    "kudos": 3,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 41
  },
  {
    "fecha": "2026-10-16",
    "km": 8.03,
    "ritmo": "6:22",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 42
  },
  {
    "fecha": "2026-10-20",
    "km": 6.28,
    "ritmo": "6:25",
    "kudos": 6,
    "comentario": "easyrun",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 43
  },
  {
    "fecha": "2026-10-22",
    "km": 6.54,
    "ritmo": "6:19",
    "kudos": 2,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 44
  },
  {
    "fecha": "2026-10-28",
    "km": 8.04,
    "ritmo": "6:13",
    "kudos": 5,
    "comentario": null,
    "lectura": "sin_registro",
    "visibilidad": null,
    "id": 45
  }
];
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

/* 00 — Experimento. Tres salidas documentadas. */
const casos = registros.slice(0, 3).map((salida, indice) => ({
  texto: salida.comentario,
  km: fmt(salida.km) + ' km',
  ritmo: salida.ritmo,
  kudos: String(salida.kudos),
  reflejo: 'Ahora que conoces las cifras, ¿cambiarías tu decisión?',
  color: ['#8ab1d0', '#ef846d', '#a9ba9a'][indice]
}));
let casoActual=0;
let respuestas=[null,null,null];
function dibujarCaso(){
  const c=casos[casoActual];
  $('scenarioText').textContent=c.texto;
  $('scenarioNumber').textContent=`HISTORIA ${String(casoActual+1).padStart(2,'0')} / 03 · SIN MÉTRICAS`;
  $('stepDots').innerHTML=casos.map((_,i)=>`<i class="${i<=casoActual?'active':''}"></i>`).join('');
  $('stepDots').setAttribute('aria-label',`Historia ${casoActual+1} de 3`);
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
    $('expSummary').textContent=`De estas tres experiencias, compartirías ${yes}, no compartirías ${no} y en ${depends} caso(s) dependería del contexto. No hay una respuesta ideal: lo importante es preguntarte qué ha influido en cada elección. Ahora puedes contrastarlo con mis registros reales.`;
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
  $('detailScope').textContent=d.comentario ? c.lectura : '';
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

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const host = '127.0.0.1:48763';
const dataFile = path.join(root, 'Revision_Strava.json');
const readNotes = () => fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile,'utf8')) : [];
http.createServer(async (req,res) => {
  const reply=(code,type,value)=>{res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(value);};
  try {
    if(req.headers.host!==host)return reply(403,'text/plain','Origen desconocido');
    if(req.method==='GET'&&req.url==='/')return reply(200,'text/html; charset=utf-8',fs.readFileSync(path.join(root,'Strava_editable.html')));
    if(req.method==='GET'&&req.url==='/revision')return reply(200,'application/json',JSON.stringify(readNotes()));
    if(req.method==='POST'&&req.url==='/revision'){
      if(req.headers.origin!=='http://'+host||req.headers['content-type']!=='application/json')return reply(403,'text/plain','Origen desconocido');
      let size=0;const chunks=[];for await(const chunk of req){size+=chunk.length;if(size>262144)return reply(413,'text/plain','Demasiado extenso');chunks.push(chunk);}
      const item=JSON.parse(Buffer.concat(chunks).toString('utf8'));
      if(!['edit','note'].includes(item.action)||!['id','selector','context','section','value'].every(k=>typeof item[k]==='string'))return reply(400,'text/plain','Datos incompletos');
      const notes=readNotes();
      if(!notes.some(n=>n.id===item.id)){notes.push(item);fs.writeFileSync(dataFile+'.tmp',JSON.stringify(notes,null,2));fs.renameSync(dataFile+'.tmp',dataFile);}
      return reply(200,'application/json',JSON.stringify(notes));
    }
    reply(404,'text/plain','No encontrado');
  }catch{reply(500,'text/plain','Error al leer o guardar');}
}).listen(48763,'127.0.0.1');

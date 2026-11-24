const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=__dirname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.glb':'model/gltf-binary','.png':'image/png','.webp':'image/webp','.json':'application/json'};
function resolveFile(url){
 const pathname=decodeURIComponent(new URL(url,'http://localhost').pathname);
 if(pathname.includes('\\')||pathname.includes('\0'))return null;
 const base=pathname.startsWith('/models/')?path.join(root,'public'):root;
 const file=path.resolve(base,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(base+path.sep))return null;
 if(!['/','/index.html','/styles.css','/app.js','/node_modules/@google/model-viewer/dist/model-viewer.min.js'].includes(pathname)&&!pathname.startsWith('/models/'))return null;
 return file;
}
const server=http.createServer((req,res)=>{
 let file;try{file=resolveFile(req.url)}catch{res.writeHead(400).end();return}
 if(!file){res.writeHead(404).end('Not found');return}
 fs.stat(file,(err,stat)=>{
  if(err||!stat.isFile()){res.writeHead(404).end('Not found');return}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':stat.size,'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
  if(req.method==='HEAD'){res.end();return}
  const stream=fs.createReadStream(file);stream.on('error',()=>res.destroy());stream.pipe(res);
 });
});
if(require.main===module)server.listen(process.env.PORT||5199,'0.0.0.0',()=>console.log('VCLabS ready: http://localhost:'+(process.env.PORT||5199)));
module.exports={server,resolveFile};

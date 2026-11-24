const assert=require('node:assert/strict');
const {resolveFile}=require('./server.cjs');
assert.equal(resolveFile('/'),require('node:path').join(__dirname,'index.html'));
assert.ok(resolveFile('/models/main-lobby.glb').endsWith('public\\models\\main-lobby.glb')||resolveFile('/models/main-lobby.glb').endsWith('public/models/main-lobby.glb'));
assert.equal(resolveFile('/../package.json'),null);
console.log('VCLabS server self-check passed');

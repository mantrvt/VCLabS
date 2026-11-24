const rooms = [
  {id:'lobby', number:'01', title:'Main Lobby', short:'Your starting point', file:'/models/main-lobby.glb', description:'The central navigation hub that connects students to every learning space.'},
  {id:'tutorial', number:'02', title:'Tutorial Room', short:'Learn the basics', file:'/models/tutorial-room.glb', description:'A guided introduction to movement, interaction, safety and the virtual lab.'},
  {id:'apparatus', number:'03', title:'Apparatus Room', short:'Meet your tools', file:'/models/apparatus-room.glb', description:'Explore the equipment used in simple chemistry experiments before entering the lab.'},
  {id:'experiment', number:'04', title:'Experiment Room', short:'Put it into practice', file:'/models/experiment-room.glb', description:'The practical space where students follow a step-by-step chemistry experiment.'},
  {id:'quiz', number:'05', title:'Quiz Game Room', short:'Check your learning', file:'/models/quiz-room.glb', description:'A reflective space for checking understanding after exploration and experimentation.'}
];
const grid=document.querySelector('#room-grid');
const viewer=document.querySelector('#room-viewer');
const title=document.querySelector('#viewer-title');
const description=document.querySelector('#viewer-description');
const kicker=document.querySelector('#viewer-kicker');
const status=document.querySelector('#viewer-status');
viewer.addEventListener('load',()=>{status.textContent='Drag to rotate · scroll to zoom';});
viewer.addEventListener('error',()=>{status.textContent='This model could not be loaded. Check the server and try again.';});
rooms.forEach((room,index)=>{
  const card=document.createElement('button'); card.className='room-card'+(index===0?' active':''); card.type='button'; card.dataset.room=room.id;
  card.innerHTML=`<span class="room-number">${room.number}</span><h3>${room.title}</h3><p>${room.short}</p>`;
  card.addEventListener('click',()=>selectRoom(room)); grid.appendChild(card);
});
function selectRoom(room){
  status.textContent=`Loading ${room.title}… Larger rooms may take a moment.`;
  viewer.setAttribute('loading','eager');
  viewer.setAttribute('camera-orbit','auto auto auto');
  viewer.setAttribute('camera-target','auto auto auto');
  viewer.setAttribute('field-of-view','auto');
  viewer.setAttribute('src',room.file);
  viewer.setAttribute('alt',`Interactive 3D model of the VCLabS ${room.title}`); title.textContent=room.title; description.textContent=room.description; kicker.textContent=`Room ${room.number} · selected`;
  document.querySelectorAll('.room-card').forEach(card=>card.classList.toggle('active',card.dataset.room===room.id));
  document.querySelector('#viewer-panel').scrollIntoView({behavior:'smooth',block:'center'});
}
document.querySelector('#reset-view').addEventListener('click',()=>{viewer.cameraOrbit='auto auto auto';viewer.fieldOfView='auto';});
document.querySelector('#fullscreen').addEventListener('click',()=>viewer.requestFullscreen?.());

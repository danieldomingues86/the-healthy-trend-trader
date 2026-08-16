const menu=document.querySelector('.menu-toggle');
if(menu){menu.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')))}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

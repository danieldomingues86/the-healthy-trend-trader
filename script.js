const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-toggle');const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});
menu.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));});
navLinks.forEach(link=>link.addEventListener('click',()=>{document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('#leadForm');form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='Cadastro demonstrativo realizado. Na versão publicada, este formulário será conectado à sua plataforma de e-mail.';form.reset();});

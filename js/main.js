const WHATSAPP_NUMBER = '5511963065856'; // Exemplo: 5511999999999
const WHATSAPP_MESSAGE = 'Olá, Daniel! Conheci o The Healthy Trend Follower e quero saber mais sobre o método.';

const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
menu.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menu.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const track = document.querySelector('.carousel-track');
const slides = [...document.querySelectorAll('.trade-card')];
const counter = document.querySelector('.carousel-counter');
let index = 0;
function showSlide(nextIndex) {
  index = (nextIndex + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}
document.querySelector('.carousel-button.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.carousel-button.next').addEventListener('click', () => showSlide(index + 1));
let touchStart = 0;
track.addEventListener('touchstart', event => touchStart = event.touches[0].clientX, { passive: true });
track.addEventListener('touchend', event => {
  const delta = event.changedTouches[0].clientX - touchStart;
  if (Math.abs(delta) > 45) showSlide(index + (delta < 0 ? 1 : -1));
}, { passive: true });

function openWhatsApp(event) {
  event.preventDefault();
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  const url = number
    ? `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
document.querySelectorAll('.js-whatsapp').forEach(link => link.addEventListener('click', openWhatsApp));

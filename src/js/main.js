import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WHATS = 'https://wa.me/5582996164201?text=';

// Botões "Quero esse": abre o WhatsApp já com o nome do serviço.
document.querySelectorAll('[data-servico]').forEach((link) => {
  const msg = `Olá! Vim pelo site e gostaria de um orçamento de: ${link.dataset.servico}.`;
  link.href = WHATS + encodeURIComponent(msg);
});

// Ano atual no rodapé.
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Header: ganha fundo ao rolar, some ao descer e volta ao subir.
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate(self) {
    const y = self.scroll();
    header.classList.toggle('is-scrolled', y > 20);
    const menuOpen = nav.classList.contains('is-open');
    header.classList.toggle('is-hidden', !menuOpen && self.direction === 1 && y > 400);
  },
});

// Menu mobile.
function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenu(false);
    burger.focus();
  }
});

// Animações de entrada. Com "reduzir movimento", tudo fica estático.
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Fundo do hero: leve zoom de entrada e parallax ao rolar.
  gsap.from('.hero__bg', { scale: 1.12, duration: 1.8, ease: 'power2.out' });
  gsap.to('.hero__media', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  gsap.from('[data-hero]', {
    y: 32,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.1,
  });

  // O estado inicial só é aplicado pelo JS: se ele falhar, o conteúdo continua visível.
  gsap.set('[data-reveal]', { y: 40, opacity: 0 });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }),
  });
});

window.addEventListener('load', () => ScrollTrigger.refresh());

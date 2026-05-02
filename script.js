gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from('.line1', { duration: 1, y: 100, opacity: 0, ease: 'power4.out' });
gsap.from('.line2', { duration: 1, y: 100, opacity: 0, ease: 'power4.out', delay: 0.2 });
gsap.from('.hero-content p', { duration: 1, y: 50, opacity: 0, ease: 'power4.out', delay: 0.4 });
gsap.from('.btn', { duration: 1, y: 30, opacity: 0, ease: 'power4.out', delay: 0.6 });

// Sections reveal
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  });
});

// Cards stagger
gsap.from('.card', {
  scrollTrigger: {
    trigger: '.grid',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power4.out'
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Image reveal animations
gsap.utils.toArray('.section-img').forEach(img => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'power3.out'
  });
});
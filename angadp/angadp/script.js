// Animate on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach((el, i) => {
    setTimeout(() => {
      el.style.animationDelay = (i * 0.15) + 's';
      el.classList.add('animated');
    }, 100);
  });
});

// Animate on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-fade-in:not(.animated), .animate-slide-up:not(.animated)');
  const triggerBottom = window.innerHeight * 0.95;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('animated');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);

// Initial trigger
animateOnScroll(); 
document.addEventListener('DOMContentLoaded', () => {
  // --- Intersection Observer for Fade-in Animations ---
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
  });

  // --- Smooth Scroll for CTA Buttons ---
  const smoothScrollButtons = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for potential header
          behavior: 'smooth'
        });
      }
    });
  });
});

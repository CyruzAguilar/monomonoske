
function handleAnimations(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('service-item')) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }

        if (
          entry.target.classList.contains('contact-item') ||
          entry.target.classList.contains('contact-form') ||
          entry.target.classList.contains('typing-effect') ||
          entry.target.matches('.contact-form input, .contact-form textarea, .contact-form button')
        ) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }

        observer.unobserve(entry.target);
      }
    });
  }
  const serviceItems = document.querySelectorAll('.service-item');
  const sectionTitle = document.querySelector('.section-title');
  const contactItems = document.querySelectorAll('.contact-item');
  const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form button');
  const typingElements = document.querySelectorAll('.typing-effect');
  const observer = new IntersectionObserver(handleAnimations, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });
  
  serviceItems.forEach(item => {
    observer.observe(item);
  });
  
  observer.observe(sectionTitle);
  
  contactItems.forEach(item => {
    observer.observe(item);
  });
  
  formElements.forEach(item => {
    observer.observe(item);
  });
  
  typingElements.forEach(item => { // Observe elements for typing effect
    observer.observe(item);
  });
  
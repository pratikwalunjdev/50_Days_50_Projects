const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const clickedFaq = toggle.parentNode;
    const isActive = clickedFaq.classList.contains('active');

    // Close all other open FAQs
    document.querySelectorAll('.faq.active').forEach(activeFaq => {
      if (activeFaq !== clickedFaq) {
        activeFaq.classList.remove('active');
      }
    });

    clickedFaq.classList.toggle('active');
  })
})
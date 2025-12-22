// ============================================================
// Minimal JS Enhancements
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href !== '#') {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // External links open in new tab
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });
  
});

document.addEventListener('DOMContentLoaded', function () {
  var isHome = document.querySelector('.hero-slideshow');
  if (!isHome) {
    var wa = document.createElement('a');
    wa.href = 'https://wa.me/22890490908';
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.className = 'whatsapp-float';
    wa.textContent = '\uD83D\uDCAC';
    wa.title = 'Contactez-nous sur WhatsApp';
    document.body.appendChild(wa);
  }
});
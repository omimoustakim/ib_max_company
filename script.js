document.addEventListener('DOMContentLoaded', function () {

  // ── Menu mobile drawer ──
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  var overlay = document.getElementById('navOverlay');

  function openMenu() {
    if (nav) nav.classList.add('open');
    if (toggle) toggle.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    if (nav) nav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('open')) { closeMenu(); }
      else { openMenu(); }
    });
  }

  // Fermer au clic sur l'overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Fermer au clic sur un lien du menu
  if (nav) {
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Fermer avec Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  // ── Slideshow ──
  var slides = document.querySelectorAll('.slide');
  var dotsContainer = document.getElementById('slideshowDots');
  if (slides.length > 0 && dotsContainer) {
    var current = 0;
    slides.forEach(function (_, i) {
      var dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function () { goToSlide(i); });
      dotsContainer.appendChild(dot);
    });
    function goToSlide(n) {
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('active');
      current = n;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('active');
    }
    setInterval(function () {
      goToSlide((current + 1) % slides.length);
    }, 4000);
  }

  // ── Sélection catégorie / type ──
  var catData = {
    smartphones: ['iPhone', 'Samsung', 'OPPO', 'Xiaomi', 'Huawei', 'Autre'],
    ordinateurs: ['Portable', 'PC fixe', 'Tablette', 'Autre'],
    audio: ['Casque', 'Écouteur', 'Autre'],
    accessoires: ['Power bank', 'Chargeur', 'Coque', 'Autre']
  };
  var catGrid = document.getElementById('catGrid');
  var typePanel = document.getElementById('typePanel') || document.getElementById('typeSection');
  var typesGrid = document.getElementById('typesGrid');
  var catWhatsappBtn = document.getElementById('catWhatsappBtn');
  var selectedCat = '';
  var selectedType = '';

  if (catGrid) {
    catGrid.querySelectorAll('.cat-card').forEach(function (card) {
      card.addEventListener('click', function () {
        catGrid.querySelectorAll('.cat-card').forEach(function (c) { c.classList.remove('selected'); });
        card.classList.add('selected');
        selectedCat = card.dataset.cat;
        selectedType = '';

        typesGrid.innerHTML = '';
        var types = catData[selectedCat] || [];
        types.forEach(function (t) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'type-btn';
          btn.textContent = t;
          btn.addEventListener('click', function () {
            typesGrid.querySelectorAll('.type-btn').forEach(function (b) { b.classList.remove('selected'); });
            btn.classList.add('selected');
            selectedType = t;
            var label = selectedCat.charAt(0).toUpperCase() + selectedCat.slice(1);
            var msg = 'Bonjour, je suis intéressé par ' + label + ' — ' + selectedType + '. Quels sont les modèles et prix disponibles ?';
            catWhatsappBtn.href = 'https://wa.me/22890490908?text=' + encodeURIComponent(msg);
            catWhatsappBtn.style.display = 'inline-flex';
          });
          typesGrid.appendChild(btn);
        });

        catWhatsappBtn.style.display = 'none';
        typePanel.style.display = 'block';
        typePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  // ── Recherche directe WhatsApp catalogue ──
  var catSearchInput = document.getElementById('catSearchInput');
  var catSearchBtn = document.getElementById('catSearchBtn');
  if (catSearchInput && catSearchBtn) {
    function sendCatSearch() {
      var q = catSearchInput.value.trim();
      if (!q) { catSearchInput.focus(); return; }
      var msg = 'Bonjour, je cherche : ' + q + '. Quels sont les modèles et prix disponibles ?';
      window.open('https://wa.me/22890490908?text=' + encodeURIComponent(msg), '_blank');
    }
    catSearchBtn.addEventListener('click', sendCatSearch);
    catSearchInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendCatSearch(); });
  }

  // ── Filtres catalogue ──
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.product-card');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-brand') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });



  // ── Galerie photos (flèches) ──
  var galleryTrack = document.getElementById('galleryTrack');
  var galleryPrev = document.getElementById('galleryPrev');
  var galleryNext = document.getElementById('galleryNext');
  if (galleryTrack && galleryPrev && galleryNext) {
    var scrollAmount = 220;
    galleryPrev.addEventListener('click', function () {
      galleryTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    galleryNext.addEventListener('click', function () {
      galleryTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // ── Lightbox modal ──
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxName = document.getElementById('lightboxName');
  var lightboxBrand = document.getElementById('lightboxBrand');
  var lightboxRef = document.getElementById('lightboxRef');
  var lightboxSpecs = document.getElementById('lightboxSpecs');
  var lightboxPrice = document.getElementById('lightboxPrice');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxCartBtn = document.getElementById('lightboxCartBtn');
  var lightboxWhatsappBtn = document.getElementById('lightboxWhatsappBtn');
  function openLightbox(item) {
    var img = item.querySelector('img');
    if (!img || !lightbox) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = item.dataset.name || '';
    lightboxName.textContent = item.dataset.name || 'Appareil en stock';
    lightboxBrand.textContent = item.dataset.brand || '';
    if (lightboxPrice) lightboxPrice.textContent = '';

    var ref = item.dataset.ref || '';
    if (lightboxRef) {
      lightboxRef.textContent = ref ? 'Réf. ' + ref : '';
      lightboxRef.style.display = ref ? '' : 'none';
    }

    // Specs
    lightboxSpecs.textContent = '';
    var specs = [
      { label: 'Stockage', value: item.dataset.storage },
      { label: 'Écran', value: item.dataset.screen },
      { label: 'Batterie', value: item.dataset.battery },
      { label: 'Processeur', value: item.dataset.chip }
    ];
    specs.forEach(function (s) {
      if (s.value) {
        var div = document.createElement('div');
        div.className = 'lightbox-spec';
        var labelDiv = document.createElement('div');
        labelDiv.className = 'lightbox-spec-label';
        labelDiv.textContent = s.label;
        var valDiv = document.createElement('div');
        valDiv.className = 'lightbox-spec-value';
        valDiv.textContent = s.value;
        div.appendChild(labelDiv);
        div.appendChild(valDiv);
        lightboxSpecs.appendChild(div);
      }
    });

    var siteUrl = 'https://ibmaxcompany.netlify.app/index.html';
    var waMsg = ref
      ? 'Bonjour, je suis intéressé par la photo ' + ref + ' de votre catalogue IB MAX COMPANY. Quel est ce modèle et son prix ?\n\nVoir la photo : ' + siteUrl
      : 'Bonjour, je suis intéressé par ' + (item.dataset.name || 'cet appareil') + '. Quel est le prix ?';
    lightboxWhatsappBtn.href = 'https://wa.me/22890490908?text=' + encodeURIComponent(waMsg);

    lightbox.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  // ── Clic image galerie → Lightbox ──
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      openLightbox(item);
    });
  });

  // Fermer le lightbox
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ── Smooth scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          closeMenu();
        }
      }
    });
  });

  // ── Troc form photo preview ──
  var photoInput = document.getElementById('trocPhotos');
  var photoPreview = document.getElementById('photoPreview');
  var photoFiles = [];
  if (photoInput && photoPreview) {
    photoInput.addEventListener('change', function () {
      var newFiles = Array.from(photoInput.files);
      newFiles.forEach(function (file) {
        photoFiles.push(file);
      });
      renderPhotoPreview();
      photoInput.value = '';
    });

    function renderPhotoPreview() {
      photoPreview.innerHTML = '';
      photoFiles.forEach(function (file, index) {
        var div = document.createElement('div');
        div.className = 'photo-preview-item';
        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        div.appendChild(img);
        var removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'photo-preview-remove';
        removeBtn.textContent = '\u2715';
        removeBtn.addEventListener('click', function () {
          photoFiles.splice(index, 1);
          renderPhotoPreview();
        });
        div.appendChild(removeBtn);
        photoPreview.appendChild(div);
      });
    }
  }

  // ── Troc form submit via WhatsApp ──
  var trocForm = document.getElementById('trocForm');
  if (trocForm) {
    trocForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('trocName').value;
      var phone = document.getElementById('trocPhone').value;
      var brand = document.getElementById('trocBrand').value;
      var model = document.getElementById('trocModel').value;
      var condition = document.getElementById('trocCondition').value;
      var type = document.getElementById('trocType').value;
      var message = document.getElementById('trocMessage').value;

      var msg = '*Demande de troc - IB MAX COMPANY*\n\n';
      msg += '*Nom :* ' + name + '\n';
      msg += '*Téléphone :* ' + phone + '\n\n';
      msg += '*Appareil :*\n';
      msg += '- Marque : ' + brand + '\n';
      msg += '- Modèle : ' + model + '\n';
      msg += '- État : ' + condition + '\n';
      msg += '- Demande : ' + type + '\n';
      if (message) msg += '\n*Message :* ' + message + '\n';
      msg += '\nMerci d\'ajouter les photos de votre appareil dans cette conversation.';

      var waUrl = 'https://wa.me/22890490908?text=' + encodeURIComponent(msg);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

});
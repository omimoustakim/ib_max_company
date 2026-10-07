/* IB MAX COMPANY — Vanilla JS */

(function () {
  const whatsappBase = "https://wa.me/22890490908";

  function waLink(msg) {
    return whatsappBase + "?text=" + encodeURIComponent(msg || "Bonjour IB MAX, je souhaite avoir des informations.");
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ───────── Menu mobile ───────── */
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuBackdrop = document.getElementById("menuBackdrop");

  function openMenu() {
    mobileMenu?.classList.add("open");
    menuBackdrop?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    menuToggle?.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileMenu?.classList.remove("open");
    menuBackdrop?.classList.add("hidden");
    document.body.style.overflow = "";
    menuToggle?.setAttribute("aria-expanded", "false");
  }
  menuToggle?.addEventListener("click", () => {
    if (mobileMenu?.classList.contains("open")) closeMenu();
    else openMenu();
  });
  menuClose?.addEventListener("click", closeMenu);
  menuBackdrop?.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("open")) closeMenu();
  });

  /* ───────── Cartes produit ───────── */
  const products = window.IBMAX_PRODUCTS || [];

  // Trier par "prix" estimé (tier 1 = plus cher) pour le catalogue
  function getPriceTier(p) {
    const name = (p.name || '').toLowerCase();
    const cat = (p.cat || '').toLowerCase();
    // Smartphones flagships
    if (cat.includes('smartphone')) {
      if (name.includes('15 pro') || name.includes('s26 ultra') || name.includes('s25 ultra') || name.includes('s24 ultra') || name.includes('s23 ultra') ||
          name.includes('z fold') || name.includes('pixel 11 pro xl') || name.includes('pixel 10 pro xl') || name.includes('pixel 9 pro xl') || name.includes('pixel 8 pro xl') || name.includes('pixel 7 pro xl') ||
          name.includes('xiaomi 18 pro max') || name.includes('xiaomi 17 ultra') || name.includes('xiaomi 17 pro max') || name.includes('mi 11 ultra') ||
          name.includes('magic 9 pro max') || name.includes('magic8 pro') || name.includes('600 pro')) return 1;
      if (name.includes('11 pro') || name.includes('s26') || name.includes('s25') || name.includes('s24') || name.includes('s23') ||
          name.includes('z flip') || name.includes('pixel 11') || name.includes('pixel 10') || name.includes('pixel 9') || name.includes('pixel 8') || name.includes('pixel 7') ||
          name.includes('xiaomi 17') || name.includes('xiaomi 18') ||
          name.includes('magic 9') || name.includes('magic 8') || name.includes('600') || name.includes('400 pro')) return 2;
      if (name.includes('a56') || name.includes('a54') || name.includes('a17') || name.includes('a16')) return 3;
      return 4;
    }
    // Ordinateurs / Tablettes
    if (cat.includes('ordinateur') || cat.includes('tablette')) return 4;
    // Audio / Power banks / Accessoires
    return 5;
  }

  function productCard(p) {
    const count = p.images.length > 1 ? `<span class="pv-count">📷 ${p.images.length} photos</span>` : "";
    const chips = p.chips.map((c) => `<li>${esc(c)}</li>`).join("");
    const msg = `Bonjour IB MAX, je suis intéressé(e) par : ${p.name}. Est-il disponible ?`;
    return `
      <article class="product-card reveal" data-category="${esc(p.cat)}" data-id="${esc(p.id)}" tabindex="0">
        <div class="product-visual">
          ${p.deal ? `<span class="deal-ribbon">🔥 ${esc(p.deal)}</span>` : ""}
          <span class="product-badge">${esc(p.badge)}</span>
          <img src="${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy">
          ${count}
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-category">${esc(p.cat)}</span>
            <span class="condition-pill">${esc(p.cond)}</span>
          </div>
          <h3>${esc(p.name)}</h3>
          <p class="product-tagline">${esc(p.tagline)}</p>
          <ul class="spec-chips">${chips}</ul>
          <div class="product-actions">
            <button type="button" class="button button-outline" data-open="${esc(p.id)}">Détails</button>
            <a class="button button-primary" href="${waLink(msg)}" target="_blank" rel="noopener"><i class="bi bi-whatsapp" aria-hidden="true"></i> Dispo ?</a>
          </div>
        </div>
      </article>`;
  }

  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    featuredGrid.innerHTML = products.filter((p) => p.featured).slice(0, 8).map(productCard).join("");
  }
  const dealsGrid = document.getElementById("dealsGrid");
  if (dealsGrid) {
    dealsGrid.innerHTML = products.filter((p) => p.deal).slice(0, 4).map(productCard).join("");
  }
  const catalogGrid = document.getElementById("catalogGrid");
  if (catalogGrid) {
    const sorted = [...products].sort((a, b) => getPriceTier(a) - getPriceTier(b));
    catalogGrid.innerHTML = sorted.map(productCard).join("");
  }

  /* ───────── Modale détail ───────── */
  const modal = document.createElement("div");
  modal.className = "pm-backdrop";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  document.body.appendChild(modal);
  let lastFocus = null;

  function openModal(id) {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    const thumbs = p.images.length > 1
      ? `<div class="pm-thumbs">${p.images.map((src, i) => `<button type="button" class="${i === 0 ? "active" : ""}" data-src="${esc(src)}" aria-label="Photo ${i + 1}"><img src="${esc(src)}" alt=""></button>`).join("")}</div>`
      : "";
    const specs = p.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    const msg = `Bonjour IB MAX, je souhaite avoir des informations sur : ${p.name} (disponibilité et tarif).`;
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'pm-close';
    closeBtn.setAttribute('aria-label', 'Fermer');
    closeBtn.textContent = '✕';

    const modalHTML = `
      <div class="pm-dialog"></div>`;
    modal.innerHTML = modalHTML;
    const dialog = modal.querySelector('.pm-dialog');
    dialog.appendChild(closeBtn);
    
    const gallery = document.createElement('div');
    gallery.className = 'pm-gallery';
    const mainImg = document.createElement('div');
    mainImg.className = 'pm-main';
    const img = document.createElement('img');
    img.src = esc(p.images[0]);
    img.alt = esc(p.name);
    img.id = 'pmMain';
    mainImg.appendChild(img);
    gallery.appendChild(mainImg);
    if (thumbs) {
      const thumbsDiv = document.createElement('div');
      thumbsDiv.className = 'pm-thumbs';
      thumbsDiv.innerHTML = thumbs;
      gallery.appendChild(thumbsDiv);
    }
    dialog.appendChild(gallery);

    const body = document.createElement('div');
    body.className = 'pm-body';
    const catSpan = document.createElement('span');
    catSpan.className = 'product-category';
    catSpan.textContent = esc(p.cat) + ' · ' + esc(p.cond);
    body.appendChild(catSpan);
    
    const h2 = document.createElement('h2');
    h2.textContent = esc(p.name);
    body.appendChild(h2);
    
    const taglineP = document.createElement('p');
    taglineP.textContent = esc(p.tagline);
    body.appendChild(taglineP);
    
    const specsDl = document.createElement('dl');
    specsDl.className = 'pm-specs';
    specsDl.innerHTML = specs;
    body.appendChild(specsDl);
    
    const waLinkEl = document.createElement('a');
    waLinkEl.className = 'button button-primary button-large';
    waLinkEl.style.width = '100%';
    waLinkEl.href = waLink(msg);
    waLinkEl.target = '_blank';
    waLinkEl.rel = 'noopener noreferrer';
    waLinkEl.innerHTML = '<i class="bi bi-whatsapp" aria-hidden="true"></i> Demander la disponibilité';
    body.appendChild(waLinkEl);
    
    const noteP = document.createElement('p');
    noteP.className = 'pm-note';
    noteP.textContent = 'Caractéristiques indicatives, selon le stock du moment. Tarif et disponibilité confirmés sur WhatsApp.';
    body.appendChild(noteP);
    
    dialog.appendChild(body);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector(".pm-close").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    lastFocus?.focus?.();
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".pm-close")) return closeModal();
    const thumb = e.target.closest(".pm-thumbs button");
    if (thumb) {
      modal.querySelectorAll(".pm-thumbs button").forEach((b) => b.classList.remove("active"));
      thumb.classList.add("active");
      modal.querySelector("#pmMain").src = thumb.dataset.src;
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest(".product-card[data-id]");
    if (card) openModal(card.dataset.id);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.classList?.contains("product-card")) openModal(e.target.dataset.id);
  });

  /* ───────── Filtres catalogue ───────── */
  const filterBtns = document.querySelectorAll("[data-filter]");
  const searchInput = document.getElementById("catSearch");
  const searchBtn = document.getElementById("catSearchBtn");
  const countEl = document.getElementById("catalogCount");

  function applyFilters() {
    const cards = document.querySelectorAll("#catalogGrid [data-category]");
    if (!cards.length) return;
    const active = document.querySelector("[data-filter].active")?.getAttribute("data-filter") || "Tout";
    const q = (searchInput?.value || "").trim().toLowerCase();
    let shown = 0;
    cards.forEach((card) => {
      const cat = card.getAttribute("data-category") || "";
      const p = products.find((x) => x.id === card.dataset.id);
      const hay = (card.textContent + " " + (p ? p.specs.flat().join(" ") : "")).toLowerCase();
      const isDeal = !!(p && p.deal);
      const ok = (active === "Tout" || (active === "Deals" ? isDeal : cat === active)) && (!q || hay.includes(q));
      card.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    if (countEl) countEl.textContent = shown + (shown > 1 ? " appareils" : " appareil");
    let empty = document.getElementById("emptyState");
    if (!shown) {
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "emptyState";
        empty.className = "empty-state";
        empty.innerHTML = `<p style="font-size:1.1rem;font-weight:800;margin-bottom:.5rem">Aucun résultat pour cette recherche.</p><p>Demandez-nous : on peut peut-être le trouver pour vous.</p>`;
        catalogGrid.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", applyFilters);
  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = searchInput.value.trim();
      if (q) window.open(waLink("Bonjour IB MAX, je cherche : " + q), "_blank");
    }
  });
  searchBtn?.addEventListener("click", () => {
    const q = (searchInput?.value || "").trim();
    window.open(
      waLink(q ? "Bonjour IB MAX, je cherche : " + q : "Bonjour IB MAX, je souhaite voir le stock disponible."),
      "_blank"
    );
  });

  // Pré-sélection depuis l'URL (?cat=Audio)
  const catParam = new URLSearchParams(window.location.search).get("cat");
  if (catParam && filterBtns.length) {
    filterBtns.forEach((b) => {
      if (b.getAttribute("data-filter") === catParam) {
        filterBtns.forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
      }
    });
  }
  applyFilters();

  /* ───────── Formulaire contact → WhatsApp (anti-spam) ───────── */
  const contactForm = document.getElementById("contactForm");
  const RATE_LIMIT_KEY = 'ibmax_contact_ratelimit';
  const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 min
  const RATE_LIMIT_MAX = 3; // max 3 submissions per window

  function checkRateLimit() {
    const now = Date.now();
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    const recent = stored.filter(ts => now - ts < RATE_LIMIT_WINDOW);
    if (recent.length >= RATE_LIMIT_MAX) return false;
    recent.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
    return true;
  }

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Honeypot check
    const honeypot = document.getElementById("hp_website");
    if (honeypot && honeypot.value) {
      // Bot detected - silently fail (don't open WhatsApp)
      console.warn('[Anti-spam] Honeypot triggered');
      return;
    }
    // Rate limit check
    if (!checkRateLimit()) {
      alert('Trop de tentatives. Merci de patienter quelques minutes avant de réessayer.');
      return;
    }
    const name = document.getElementById("cName")?.value || "";
    const phone = document.getElementById("cPhone")?.value || "";
    const msg = document.getElementById("cMsg")?.value || "";
    window.open(waLink("Bonjour IB MAX,\nNom: " + name + "\nTél: " + phone + "\nMessage: " + msg), "_blank");
  });

  /* ───────── Apparition au scroll ───────── */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ───────── Ticker seamless ───────── */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) {
    tickerTrack.classList.add('seamless');
    const spans = Array.from(tickerTrack.children);
    const originalCount = spans.length;
    if (originalCount > 0) {
      spans.forEach(s => {
        const clone = s.cloneNode(true);
        tickerTrack.appendChild(clone);
      });
    }
  }
})();

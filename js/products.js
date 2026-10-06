/* IB MAX COMPANY — Catalogue produits (sans prix)
   Modifiez ce fichier pour ajouter / retirer un appareil.
   Ajoutez  deal: "texte"  sur un appareil pour l’afficher dans la section Deals.
   Chaque produit : nom, catégorie, état, photos, caractéristiques.
   Les prix et la disponibilité sont confirmés sur WhatsApp. */

window.IBMAX_PRODUCTS = [
  /* ───────── SMARTPHONES ───────── */
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    cat: "Smartphones",
    cond: "Neuf",
    badge: "Neuf",
    featured: true,
    priceTier: 1,
    images: ["images/ibmax-phones.jpg", "images/crops/iphone-face.jpg", "images/crops/iphone-dos.jpg", "images/crops/iphone-vert.jpg"],
    tagline: "Le haut de gamme Apple, en titane, avec USB-C.",
    chips: ["Puce A17 Pro", "Caméra 48 Mpx", "USB-C"],
    specs: [
      ["Écran", "6,1″ Super Retina XDR (OLED)"],
      ["Processeur", "Apple A17 Pro"],
      ["Stockage", "128 / 256 / 512 Go"],
      ["Caméra arrière", "Triple 48 Mpx + zoom optique"],
      ["Connectique", "USB-C"],
      ["Sécurité", "Face ID"],
      ["Finition", "Titane (plusieurs coloris)"]
    ]
  },
  {
    id: "iphone-11-pro",
    deal: "Reconditionné à saisir",
    name: "iPhone 11 Pro",
    cat: "Smartphones",
    cond: "Reconditionné",
    badge: "Recond.",
    featured: true,
    priceTier: 2,
    images: ["images/phone1.jpg"],
    tagline: "Triple caméra et écran OLED, testé point par point.",
    chips: ["OLED 5,8″", "Triple caméra", "Face ID"],
    specs: [
      ["Écran", "5,8″ Super Retina XDR (OLED)"],
      ["Processeur", "Apple A13 Bionic"],
      ["Stockage", "64 / 256 Go"],
      ["Caméra arrière", "Triple 12 Mpx"],
      ["Étanchéité", "IP68"],
      ["Sécurité", "Face ID"],
      ["État", "Reconditionné, batterie contrôlée"]
    ]
  },

  /* ───────── ORDINATEURS ───────── */
  {
    id: "macbook-pro-13",
    name: "MacBook Pro 13″",
    cat: "Ordinateurs",
    cond: "Neuf / Reconditionné",
    badge: "Pro",
    featured: true,
    images: ["images/laptop1.jpg", "images/crops/macbook-bureau.jpg"],
    tagline: "Fiable pour le travail, les études et le montage léger.",
    chips: ["Écran Retina", "SSD", "Clavier rétroéclairé"],
    specs: [
      ["Écran", "13″ Retina"],
      ["Mémoire", "8 / 16 Go selon version"],
      ["Stockage", "SSD 256 / 512 Go"],
      ["Clavier", "Rétroéclairé"],
      ["Système", "macOS"],
      ["Autonomie", "Journée de travail"],
      ["État", "Neuf ou reconditionné selon stock"]
    ]
  },
  {
    id: "macbook-air-13",
    name: "MacBook Air 13″",
    cat: "Ordinateurs",
    cond: "Neuf / Reconditionné",
    badge: "Léger",
    images: ["images/crops/macbook-airpods.jpg"],
    tagline: "Fin, silencieux, parfait pour les déplacements.",
    chips: ["Ultra-fin", "SSD rapide", "Silencieux"],
    specs: [
      ["Écran", "13″ Retina"],
      ["Mémoire", "8 / 16 Go selon version"],
      ["Stockage", "SSD 256 / 512 Go"],
      ["Poids", "Format ultraportable"],
      ["Système", "macOS"],
      ["Refroidissement", "Sans ventilateur (selon version)"],
      ["État", "Neuf ou reconditionné selon stock"]
    ]
  },

  /* ───────── TABLETTES ───────── */
  {
    id: "ipad-pro-11",
    name: "iPad Pro 11″",
    cat: "Tablettes",
    cond: "Reconditionné",
    badge: "Créatif",
    featured: true,
    images: ["images/tablet1.jpg", "images/crops/ipad-stylet.jpg"],
    tagline: "Grand écran fluide, compatible stylet pour dessiner et noter.",
    chips: ["Écran 11″", "Face ID", "Stylet compatible"],
    specs: [
      ["Écran", "11″ Liquid Retina"],
      ["Stockage", "64 / 256 / 512 Go"],
      ["Connectique", "USB-C"],
      ["Sécurité", "Face ID"],
      ["Accessoires", "Apple Pencil compatible"],
      ["Usage", "Études, dessin, vidéo, travail"],
      ["État", "Reconditionné, testé avant vente"]
    ]
  },

  /* ───────── POWER BANKS ───────── */
  {
    id: "xiaomi-power-bank",
    name: "Xiaomi Power Bank",
    cat: "Power banks",
    cond: "Neuf",
    badge: "Autonomie +",
    featured: true,
    images: ["images/powerbank1.jpg"],
    tagline: "Boîtier métal compact, la batterie qui ne vous lâche pas.",
    chips: ["10 000 mAh", "USB-C", "Boîtier métal"],
    specs: [
      ["Capacité", "10 000 mAh"],
      ["Entrée / sortie", "USB-C + USB-A"],
      ["Charge", "Rapide"],
      ["Boîtier", "Aluminium"],
      ["Format", "Poche, très fin"],
      ["Protection", "Surcharge et court-circuit"],
      ["Compatible", "Smartphones, écouteurs, tablettes"]
    ]
  },
  {
    id: "power-bank-20000",
    deal: "Offre pack",
    name: "Power bank 20 000 mAh",
    cat: "Power banks",
    cond: "Neuf",
    badge: "Grande capacité",
    images: ["images/crops/powerbank-noir.jpg", "images/crops/macbook-airpods.jpg"],
    tagline: "Plusieurs recharges complètes, pour tenir plusieurs jours.",
    chips: ["20 000 mAh", "2 sorties USB", "Indicateur LED"],
    specs: [
      ["Capacité", "20 000 mAh"],
      ["Sorties", "2 ports USB"],
      ["Indicateur", "4 LED de niveau"],
      ["Recharges", "Jusqu’à 4 smartphones"],
      ["Finition", "Noir mat"],
      ["Protection", "Surcharge et température"],
      ["Usage", "Voyage, coupures de courant"]
    ]
  },

  /* ───────── AUDIO ───────── */
  {
    id: "casque-bluetooth-anc",
    name: "Casque Bluetooth sans fil",
    cat: "Audio",
    cond: "Neuf",
    badge: "Nouveau",
    featured: true,
    images: ["images/crops/casque-noir.jpg", "images/crops/casque-jaune.jpg", "images/headphones1.jpg"],
    tagline: "Coussinets confortables, son riche, micro intégré.",
    chips: ["Bluetooth", "Micro intégré", "Pliable"],
    specs: [
      ["Connexion", "Bluetooth + câble audio"],
      ["Autonomie", "Plusieurs dizaines d’heures"],
      ["Micro", "Intégré, appels mains libres"],
      ["Confort", "Coussinets mémoire de forme"],
      ["Format", "Circum-auriculaire, pliable"],
      ["Commandes", "Boutons sur l’oreillette"],
      ["Coloris", "Noir (autres sur demande)"]
    ]
  },
  {
    id: "ecouteurs-true-wireless",
    deal: "Bon plan",
    name: "Écouteurs True Wireless",
    cat: "Audio",
    cond: "Neuf",
    badge: "Sans fil",
    images: ["images/crops/ecouteurs-boitier.jpg"],
    tagline: "Boîtier de charge compact, connexion automatique.",
    chips: ["Bluetooth", "Boîtier de charge", "Micro"],
    specs: [
      ["Connexion", "Bluetooth"],
      ["Boîtier", "Recharge les écouteurs plusieurs fois"],
      ["Micro", "Intégré, appels mains libres"],
      ["Appairage", "Automatique à l’ouverture"],
      ["Format", "Intra-auriculaire"],
      ["Coloris", "Noir"],
      ["Usage", "Sport, trajets, appels"]
    ]
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    cat: "Audio",
    cond: "Neuf",
    badge: "Best-seller",
    featured: true,
    images: ["images/crops/airpods-pro.jpg", "images/accessories1.jpg"],
    tagline: "Réduction de bruit active et mode transparence.",
    chips: ["Réduction de bruit", "Mode transparence", "Boîtier de charge"],
    specs: [
      ["Audio", "Réduction active du bruit"],
      ["Mode", "Transparence"],
      ["Embouts", "Silicone, plusieurs tailles"],
      ["Résistance", "Eau et transpiration"],
      ["Boîtier", "Charge sans fil (selon version)"],
      ["Compatible", "iPhone, iPad, Mac, Android"],
      ["Contenu", "Boîtier, câble, embouts"]
    ]
  },

  /* ───────── ACCESSOIRES ───────── */
  {
    id: "cable-usbc-tresse",
    name: "Câble USB-C tressé",
    cat: "Accessoires",
    cond: "Neuf",
    badge: "Essentiel",
    featured: true,
    images: ["images/crops/cable-usbc.jpg"],
    tagline: "Nylon tressé, résistant aux plis et aux tractions.",
    chips: ["USB-A vers USB-C", "Nylon tressé", "Charge + données"],
    specs: [
      ["Connecteurs", "USB-A vers USB-C"],
      ["Matière", "Nylon tressé renforcé"],
      ["Usage", "Charge rapide et transfert de données"],
      ["Longueur", "1 m / 2 m selon stock"],
      ["Attache", "Velcro de rangement"],
      ["Compatible", "Smartphones, tablettes, power banks"]
    ]
  },
  {
    id: "pack-accessoires",
    deal: "Pack à prix réduit",
    name: "Pack accessoires essentiels",
    cat: "Accessoires",
    cond: "Neuf",
    badge: "Pack",
    featured: true,
    images: ["images/ibmax-accessories.jpg", "images/ibmax-hero.jpg"],
    tagline: "Power bank, audio et câble : l’équipement complet.",
    chips: ["Power bank", "Audio sans fil", "Câble USB-C"],
    specs: [
      ["Contenu", "Power bank + écouteurs + câble"],
      ["Option", "Casque Bluetooth en supplément"],
      ["Usage", "Tous les jours, voyage, bureau"],
      ["Composition", "Modulable selon votre budget"],
      ["Conseil", "Demandez-nous de composer votre pack"]
    ]
  },

  /* ───────── SMARTPHONES SAMSUNG, GOOGLE PIXEL, XIAOMI & HONOR ───────── */
  {
    "id": "catalogue-samsung-1",
    "name": "Samsung Galaxy A56",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/01-a56.jpg"
    ],
    "tagline": "Samsung Galaxy A56 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Super AMOLED 6,7″",
      "Exynos 1580, selon version",
      "50 Mpx + ultra grand-angle"
    ],
    "specs": [
      [
        "Écran",
        "Écran Super AMOLED 6,7″"
      ],
      [
        "Processeur",
        "Exynos 1580, selon version"
      ],
      [
        "Photo",
        "50 Mpx + ultra grand-angle"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, stockage 128/256 Go"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-2",
    "name": "Samsung Galaxy A56",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/02-a56.jpg"
    ],
    "tagline": "Samsung Galaxy A56 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Super AMOLED 6,7″",
      "Exynos 1580, selon version",
      "50 Mpx + ultra grand-angle"
    ],
    "specs": [
      [
        "Écran",
        "Écran Super AMOLED 6,7″"
      ],
      [
        "Processeur",
        "Exynos 1580, selon version"
      ],
      [
        "Photo",
        "50 Mpx + ultra grand-angle"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, stockage 128/256 Go"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-3",
    "name": "Samsung Galaxy A54",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/03-a54.jpg"
    ],
    "tagline": "Samsung Galaxy A54 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Super AMOLED 6,4″ 120 Hz",
      "Exynos 1380",
      "50 Mpx avec stabilisation"
    ],
    "specs": [
      [
        "Écran",
        "Écran Super AMOLED 6,4″ 120 Hz"
      ],
      [
        "Processeur",
        "Exynos 1380"
      ],
      [
        "Photo",
        "50 Mpx avec stabilisation"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, IP67"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-4",
    "name": "Samsung Galaxy A17",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/04-a17.jpg"
    ],
    "tagline": "Samsung Galaxy A17 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran 6,7″, selon version",
      "Processeur octa-core, selon version",
      "Appareil photo triple, jusqu’à 50 Mpx"
    ],
    "specs": [
      [
        "Écran",
        "Écran 6,7″, selon version"
      ],
      [
        "Processeur",
        "Processeur octa-core, selon version"
      ],
      [
        "Photo",
        "Appareil photo triple, jusqu’à 50 Mpx"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "4G/5G selon version"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-5",
    "name": "Samsung Galaxy A16",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/05-a16.png"
    ],
    "tagline": "Samsung Galaxy A16 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Super AMOLED 6,7″",
      "Processeur octa-core, selon version",
      "50 Mpx + macro + profondeur"
    ],
    "specs": [
      [
        "Écran",
        "Écran Super AMOLED 6,7″"
      ],
      [
        "Processeur",
        "Processeur octa-core, selon version"
      ],
      [
        "Photo",
        "50 Mpx + macro + profondeur"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "4G/5G selon version"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-6",
    "name": "Samsung Galaxy Z Fold 8",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/06-z fold 8.jpg"
    ],
    "tagline": "Samsung Galaxy Z Fold 8 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable intérieur grand format",
      "Processeur haut de gamme, selon version",
      "Système photo multiple"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable intérieur grand format"
      ],
      [
        "Processeur",
        "Processeur haut de gamme, selon version"
      ],
      [
        "Photo",
        "Système photo multiple"
      ],
      [
        "Batterie",
        "Batterie double cellule"
      ],
      [
        "Connectivité / fonctions",
        "5G, stylet selon version"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-7",
    "name": "Samsung Galaxy Z Fold 7",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/07-z fold 7.jpg"
    ],
    "tagline": "Samsung Galaxy Z Fold 7 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable intérieur + écran externe",
      "Processeur haut de gamme, selon version",
      "Triple appareil photo, selon version"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable intérieur + écran externe"
      ],
      [
        "Processeur",
        "Processeur haut de gamme, selon version"
      ],
      [
        "Photo",
        "Triple appareil photo, selon version"
      ],
      [
        "Batterie",
        "Batterie double cellule"
      ],
      [
        "Connectivité / fonctions",
        "5G, multitâche Android"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-8",
    "name": "Samsung Galaxy Z Fold 6",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/08-z fold 6.jpg"
    ],
    "tagline": "Samsung Galaxy Z Fold 6 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable 7,6″ + écran externe",
      "Snapdragon 8 Gen 3 for Galaxy",
      "Triple 50 + 12 + 10 Mpx"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable 7,6″ + écran externe"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 3 for Galaxy"
      ],
      [
        "Photo",
        "Triple 50 + 12 + 10 Mpx"
      ],
      [
        "Batterie",
        "Batterie 4 400 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, Galaxy AI"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-9",
    "name": "Samsung Galaxy Z Fold 5",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/09-z fold 5.jpg"
    ],
    "tagline": "Samsung Galaxy Z Fold 5 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable 7,6″ + écran externe",
      "Snapdragon 8 Gen 2 for Galaxy",
      "Triple appareil photo"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable 7,6″ + écran externe"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 2 for Galaxy"
      ],
      [
        "Photo",
        "Triple appareil photo"
      ],
      [
        "Batterie",
        "Batterie 4 400 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, S Pen compatible"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-10",
    "name": "Samsung Galaxy S26 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/10-s26-ultra.jpg"
    ],
    "tagline": "Samsung Galaxy S26 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Dynamic AMOLED 2X, selon version",
      "Puce flagship, selon version",
      "Appareil photo Ultra haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran Dynamic AMOLED 2X, selon version"
      ],
      [
        "Processeur",
        "Puce flagship, selon version"
      ],
      [
        "Photo",
        "Appareil photo Ultra haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, S Pen, Galaxy AI"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-11",
    "name": "Samsung Galaxy S25 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/11-s25-ultra.jpg"
    ],
    "tagline": "Samsung Galaxy S25 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Dynamic AMOLED 2X 6,9″",
      "Snapdragon 8 Elite for Galaxy",
      "200 Mpx + téléobjectifs"
    ],
    "specs": [
      [
        "Écran",
        "Écran Dynamic AMOLED 2X 6,9″"
      ],
      [
        "Processeur",
        "Snapdragon 8 Elite for Galaxy"
      ],
      [
        "Photo",
        "200 Mpx + téléobjectifs"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, S Pen, Galaxy AI"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-12",
    "name": "Samsung Galaxy S24 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/12-s24-ultra.jpg"
    ],
    "tagline": "Samsung Galaxy S24 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Dynamic AMOLED 2X 6,8″ 120 Hz",
      "Snapdragon 8 Gen 3 for Galaxy",
      "200 Mpx + téléobjectifs"
    ],
    "specs": [
      [
        "Écran",
        "Écran Dynamic AMOLED 2X 6,8″ 120 Hz"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 3 for Galaxy"
      ],
      [
        "Photo",
        "200 Mpx + téléobjectifs"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, S Pen, IP68"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-13",
    "name": "Samsung Galaxy S23 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/13-s23-ultra.jpg"
    ],
    "tagline": "Samsung Galaxy S23 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran Dynamic AMOLED 2X 6,8″ 120 Hz",
      "Snapdragon 8 Gen 2 for Galaxy",
      "200 Mpx + téléobjectifs"
    ],
    "specs": [
      [
        "Écran",
        "Écran Dynamic AMOLED 2X 6,8″ 120 Hz"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 2 for Galaxy"
      ],
      [
        "Photo",
        "200 Mpx + téléobjectifs"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, S Pen, IP68"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-14",
    "name": "Samsung Galaxy Z Flip 8",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/14-z-flip-8.jpg"
    ],
    "tagline": "Samsung Galaxy Z Flip 8 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable compact + FlexWindow",
      "Processeur haut de gamme, selon version",
      "Double appareil photo, selon version"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable compact + FlexWindow"
      ],
      [
        "Processeur",
        "Processeur haut de gamme, selon version"
      ],
      [
        "Photo",
        "Double appareil photo, selon version"
      ],
      [
        "Batterie",
        "Batterie double cellule"
      ],
      [
        "Connectivité / fonctions",
        "5G, FlexCam"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-15",
    "name": "Samsung Galaxy Z Flip 7",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/15-z-flip-7.jpg"
    ],
    "tagline": "Samsung Galaxy Z Flip 7 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable compact + FlexWindow",
      "Processeur haut de gamme, selon version",
      "Double appareil photo"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable compact + FlexWindow"
      ],
      [
        "Processeur",
        "Processeur haut de gamme, selon version"
      ],
      [
        "Photo",
        "Double appareil photo"
      ],
      [
        "Batterie",
        "Batterie double cellule"
      ],
      [
        "Connectivité / fonctions",
        "5G, FlexCam"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-16",
    "name": "Samsung Galaxy Z Flip 6",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/16-z-flip-6.jpg"
    ],
    "tagline": "Samsung Galaxy Z Flip 6 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable 6,7″ + FlexWindow",
      "Snapdragon 8 Gen 3 for Galaxy",
      "Double 50 + 12 Mpx"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable 6,7″ + FlexWindow"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 3 for Galaxy"
      ],
      [
        "Photo",
        "Double 50 + 12 Mpx"
      ],
      [
        "Batterie",
        "Batterie 4 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, Galaxy AI"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-samsung-17",
    "name": "Samsung Galaxy Z Flip 5",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Samsung",
    "featured": false,
    "images": [
      "images/catalogue-phones/17-z-flip-5.jpg"
    ],
    "tagline": "Samsung Galaxy Z Flip 5 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran pliable 6,7″ + FlexWindow",
      "Snapdragon 8 Gen 2 for Galaxy",
      "Double 12 Mpx"
    ],
    "specs": [
      [
        "Écran",
        "Écran pliable 6,7″ + FlexWindow"
      ],
      [
        "Processeur",
        "Snapdragon 8 Gen 2 for Galaxy"
      ],
      [
        "Photo",
        "Double 12 Mpx"
      ],
      [
        "Batterie",
        "Batterie 3 700 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, FlexWindow"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-google-pixel-20",
    "name": "Google Pixel 11 Pro XL",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Google Pixel",
    "featured": false,
    "images": [
      "images/catalogue-phones/20-pixel-11-pro-xl.jpg"
    ],
    "tagline": "Google Pixel 11 Pro XL — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO, selon version",
      "Google Tensor, génération selon modèle",
      "Triple caméra Pixel avec IA"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO, selon version"
      ],
      [
        "Processeur",
        "Google Tensor, génération selon modèle"
      ],
      [
        "Photo",
        "Triple caméra Pixel avec IA"
      ],
      [
        "Batterie",
        "Batterie grande capacité, selon version"
      ],
      [
        "Connectivité / fonctions",
        "5G, Android, Gemini"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-google-pixel-21",
    "name": "Google Pixel 10 Pro XL",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Google Pixel",
    "featured": false,
    "images": [
      "images/catalogue-phones/21-pixel-10-pro-xl.jpg"
    ],
    "tagline": "Google Pixel 10 Pro XL — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO grand format",
      "Google Tensor, selon version",
      "Triple caméra Pro avec traitement IA"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO grand format"
      ],
      [
        "Processeur",
        "Google Tensor, selon version"
      ],
      [
        "Photo",
        "Triple caméra Pro avec traitement IA"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, Android, Gemini"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-google-pixel-22",
    "name": "Google Pixel 9 Pro XL",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Google Pixel",
    "featured": false,
    "images": [
      "images/catalogue-phones/22-pixel-9-pro-xl.png"
    ],
    "tagline": "Google Pixel 9 Pro XL — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO 6,8″",
      "Google Tensor G4",
      "Triple caméra Pro, zoom et IA"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO 6,8″"
      ],
      [
        "Processeur",
        "Google Tensor G4"
      ],
      [
        "Photo",
        "Triple caméra Pro, zoom et IA"
      ],
      [
        "Batterie",
        "Batterie 5 060 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, Gemini, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-google-pixel-23",
    "name": "Google Pixel 8 Pro XL",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Google Pixel",
    "featured": false,
    "images": [
      "images/catalogue-phones/23-pixel-8-pro-xl.jpg"
    ],
    "tagline": "Google Pixel 8 Pro XL — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO 6,7″ 120 Hz",
      "Google Tensor G3",
      "Triple caméra Pro, 50 Mpx principal"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO 6,7″ 120 Hz"
      ],
      [
        "Processeur",
        "Google Tensor G3"
      ],
      [
        "Photo",
        "Triple caméra Pro, 50 Mpx principal"
      ],
      [
        "Batterie",
        "Batterie 5 050 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, IA photo, IP68"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-google-pixel-24",
    "name": "Google Pixel 7 Pro XL",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Google Pixel",
    "featured": false,
    "images": [
      "images/catalogue-phones/24-pixel-7-pro-xl.jpg"
    ],
    "tagline": "Google Pixel 7 Pro XL — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO 6,7″ 120 Hz",
      "Google Tensor G2",
      "Triple caméra, zoom téléobjectif"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO 6,7″ 120 Hz"
      ],
      [
        "Processeur",
        "Google Tensor G2"
      ],
      [
        "Photo",
        "Triple caméra, zoom téléobjectif"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, Android, IP68"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-xiaomi-25",
    "name": "Xiaomi 17 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Xiaomi",
    "featured": false,
    "images": [
      "images/catalogue-phones/25-xiaomi-17-ultra.jpg"
    ],
    "tagline": "Xiaomi 17 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED haut de gamme, selon version",
      "Snapdragon flagship, selon version",
      "Caméra Leica, capteur principal haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED haut de gamme, selon version"
      ],
      [
        "Processeur",
        "Snapdragon flagship, selon version"
      ],
      [
        "Photo",
        "Caméra Leica, capteur principal haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-xiaomi-26",
    "name": "Xiaomi 17 Pro Max",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Xiaomi",
    "featured": false,
    "images": [
      "images/catalogue-phones/26-xiaomi-17-pro-max.jpg"
    ],
    "tagline": "Xiaomi 17 Pro Max — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED grand format",
      "Snapdragon flagship, selon version",
      "Système photo Leica, selon version"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED grand format"
      ],
      [
        "Processeur",
        "Snapdragon flagship, selon version"
      ],
      [
        "Photo",
        "Système photo Leica, selon version"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-xiaomi-27",
    "name": "Xiaomi 18 Pro Max",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Xiaomi",
    "featured": false,
    "images": [
      "images/catalogue-phones/27-xiaomi-18-pro-max.jpg"
    ],
    "tagline": "Xiaomi 18 Pro Max — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED grand format, selon version",
      "Puce flagship, selon version",
      "Système photo haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED grand format, selon version"
      ],
      [
        "Processeur",
        "Puce flagship, selon version"
      ],
      [
        "Photo",
        "Système photo haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, HyperOS"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-xiaomi-28",
    "name": "Xiaomi Mi 11 Ultra",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Xiaomi",
    "featured": false,
    "images": [
      "images/catalogue-phones/28-xiaomi-11-ultra.jpg"
    ],
    "tagline": "Xiaomi Mi 11 Ultra — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED 6,81″ 120 Hz",
      "Snapdragon 888",
      "Triple caméra 50 + 48 + 48 Mpx"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED 6,81″ 120 Hz"
      ],
      [
        "Processeur",
        "Snapdragon 888"
      ],
      [
        "Photo",
        "Triple caméra 50 + 48 + 48 Mpx"
      ],
      [
        "Batterie",
        "Batterie 5 000 mAh"
      ],
      [
        "Connectivité / fonctions",
        "5G, écran arrière, IP68"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-29",
    "name": "HONOR Magic 9 Pro Max",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/29-honor-magic-9-pro-max.jpg"
    ],
    "tagline": "HONOR Magic 9 Pro Max — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED incurvé, selon version",
      "Puce flagship, selon version",
      "Caméra principale haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED incurvé, selon version"
      ],
      [
        "Processeur",
        "Puce flagship, selon version"
      ],
      [
        "Photo",
        "Caméra principale haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-30",
    "name": "HONOR 600 Pro",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/30-honor-600-pro.jpg"
    ],
    "tagline": "HONOR 600 Pro — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED, selon version",
      "Processeur, selon version",
      "Caméra principale haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED, selon version"
      ],
      [
        "Processeur",
        "Processeur, selon version"
      ],
      [
        "Photo",
        "Caméra principale haute définition"
      ],
      [
        "Batterie",
        "Batterie 6 400 mAh, selon fiche"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-31",
    "name": "HONOR Magic8 Pro",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/31-honor-magic-8-pro.png"
    ],
    "tagline": "HONOR Magic8 Pro — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED LTPO, selon version",
      "Puce flagship, selon version",
      "Système photo avancé, zoom téléobjectif"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED LTPO, selon version"
      ],
      [
        "Processeur",
        "Puce flagship, selon version"
      ],
      [
        "Photo",
        "Système photo avancé, zoom téléobjectif"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-32",
    "name": "HONOR 600",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/32-honor-600.jpg"
    ],
    "tagline": "HONOR 600 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran OLED, selon version",
      "Processeur, selon version",
      "Caméra principale haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran OLED, selon version"
      ],
      [
        "Processeur",
        "Processeur, selon version"
      ],
      [
        "Photo",
        "Caméra principale haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-33",
    "name": "HONOR 400",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/33-honor-400.png"
    ],
    "tagline": "HONOR 400 — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED, selon version",
      "Processeur, selon version",
      "Caméra principale haute définition"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED, selon version"
      ],
      [
        "Processeur",
        "Processeur, selon version"
      ],
      [
        "Photo",
        "Caméra principale haute définition"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G selon version, Android"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  },
  {
    "id": "catalogue-honor-34",
    "name": "HONOR 400 Pro",
    "cat": "Smartphones",
    "cond": "Neuf / selon stock",
    "badge": "Honor",
    "featured": false,
    "images": [
      "images/catalogue-phones/34-honor-400-pro.webp"
    ],
    "tagline": "HONOR 400 Pro — fiche technique indicative, sans prix affiché.",
    "chips": [
      "Écran AMOLED, selon version",
      "Processeur, selon version",
      "Caméra principale + téléobjectif"
    ],
    "specs": [
      [
        "Écran",
        "Écran AMOLED, selon version"
      ],
      [
        "Processeur",
        "Processeur, selon version"
      ],
      [
        "Photo",
        "Caméra principale + téléobjectif"
      ],
      [
        "Batterie",
        "Batterie grande capacité"
      ],
      [
        "Connectivité / fonctions",
        "5G, recharge rapide"
      ],
      [
        "Disponibilité",
        "À confirmer avec IB MAX selon le stock"
      ]
    ]
  }
];

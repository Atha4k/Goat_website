const artists = [
  {
    id: "ahmet",
    name: "Ahmet",
    role: "Dark work realism",
    image: "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/unnamed-1-768x1024.webp",
    bio: "A Beyoglu tattoo artist with a rebellious spirit, focused on dark work realism since 2018.",
    works: [
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_0805-768x1024.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_1725-768x1024.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2073-768x1024.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2256-1-768x1024.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2810-768x1024.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_6646-768x1024.webp",
    ],
  },
  {
    id: "emre",
    name: "Emre",
    role: "Founder and tattoo artist",
    image: "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2462-576x1024.webp",
    bio: "Founder of Grimm Tattoo Istanbul, tattooing since 1995 with a strong hand for bold personal pieces.",
    works: [
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_4339-768x1024.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_7184-768x1024.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_7185-1024x768.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_7186-819x1024.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_7911-768x1024.webp",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_9973-576x1024.webp",
    ],
  },
  {
    id: "ugur",
    name: "Ugur",
    role: "Award-winning tattoo artist",
    image: "https://www.grimmtattooistanbul.com/wp-content/uploads/2020/02/Leo-Zamora.jpg",
    bio: "Ugur Avcu has been tattooing professionally since 2010 and has participated in national and international expos.",
    works: [
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image0-2.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image1-1.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image2-2.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image3-2.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image4-1.jpeg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image7-1.jpeg",
    ],
  },
  {
    id: "melih",
    name: "Melih",
    role: "Black and grey tattoo artist",
    image: "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/1ccfb47c-e558-4d0a-bc92-6e68e0ff7f7c-300x300.jpg",
    bio: "A Grimm Tattoo artist with a clean black and grey style and a calm, precise approach to each project.",
    works: [
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/2160c961-5048-4682-a7ac-d9857c2e4e07-768x1024.jpg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/21e23c0e-bd2d-4428-b0a9-f4dac482e731-768x1024.jpg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/2726cbe9-43a8-4d62-8a10-97e898a94751-768x1024.jpg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/3d08dc47-c65c-4a31-86aa-027f69fe2221-768x1024.jpg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/4af7d548-f38a-44d2-a380-58befc354464-768x1024.jpg",
      "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/74d0d48e-cc85-4e34-ba7d-6a6903999d91-768x1024.jpg",
    ],
  },
];

const galleryImages = [
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/08/9bf7d0d0-e858-4b70-aba0-5774276ad3ca-768x1024.jpg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image10.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2256-1-768x1024.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/4db10ef9-c807-4fc4-9150-3769e2a393f3.jpg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_7186-819x1024.webp",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image4-1.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/74d0d48e-cc85-4e34-ba7d-6a6903999d91-768x1024.jpg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_0805-768x1024.webp",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_1725-768x1024.webp",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2073-768x1024.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/IMG_2810-768x1024.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image0-2.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image1-1.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/02/image2-2.jpeg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/2160c961-5048-4682-a7ac-d9857c2e4e07-768x1024.jpg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/21e23c0e-bd2d-4428-b0a9-f4dac482e731-768x1024.jpg",
  "https://www.grimmtattooistanbul.com/wp-content/uploads/2025/05/2726cbe9-43a8-4d62-8a10-97e898a94751-768x1024.jpg",
];

const translations = {
  en: {
    navHome: "Home",
    navReservation: "Reservation",
    navArtists: "Artists",
    navInformation: "Information",
    menuReady: "Ready for the next piece?",
    bookConsultation: "Book a consultation",
    heroEyebrow: "Tattoo studio based in Beyoglu",
    experienceTitle: "The best tattoo experience",
    bestProducts: "Best Products",
    bestProductsText: "Top-quality inks and equipment for vibrant, long-lasting tattoos.",
    customDesign: "Custom Design",
    customDesignText: "Artists build personal designs around your body, story, and style.",
    professionalArtists: "Professional Artists",
    professionalArtistsText: "Experienced hands, careful placement, and strong visual direction.",
    sterile: "Sterile Environment",
    sterileText: "A clean studio process from consultation to aftercare.",
    artistsEyebrow: "Artists",
    artistsTitle: "Our Artists",
    galleryTitle: "Tattoo Gallery",
    seeMoreGallery: "See more designs",
    infoEyebrow: "Information",
    infoTitle: "Free consultation",
    infoText: "Share the design, size, placement, and preferred date. The studio can help plan the right artist and appointment.",
    locationTitle: "Location",
    hoursTitle: "Working hours",
    hoursText: "Monday - Saturday 11:00 - 20:00",
    phoneTitle: "Phone",
    mailTitle: "Email",
    reservationEyebrow: "Reservation",
    reservationTitle: "Book an appointment",
    reservationText: "Choose an artist, leave the project idea, and the studio can follow up with available times.",
  },
  tr: {
    navHome: "Ana sayfa",
    navReservation: "Rezervasyon",
    navArtists: "Sanatçılar",
    navInformation: "Bilgi",
    menuReady: "Yeni dövmen için hazır mısın?",
    bookConsultation: "Danışma randevusu al",
    heroEyebrow: "Beyoğlu merkezli dövme stüdyosu",
    experienceTitle: "En iyi dövme deneyimi",
    bestProducts: "Kaliteli ürünler",
    bestProductsText: "Canlı ve uzun ömürlü dövmeler için kaliteli boya ve ekipman.",
    customDesign: "Özel tasarım",
    customDesignText: "Sanatçılar tasarımı vücuduna, hikayene ve tarzına göre hazırlar.",
    professionalArtists: "Profesyonel sanatçılar",
    professionalArtistsText: "Deneyimli eller, doğru yerleşim ve güçlü görsel yönlendirme.",
    sterile: "Steril ortam",
    sterileText: "Danışmadan bakım sürecine kadar temiz ve güvenli stüdyo düzeni.",
    artistsEyebrow: "Sanatçılar",
    artistsTitle: "Sanatçılarımız",
    galleryTitle: "Dövme Galerisi",
    seeMoreGallery: "Daha fazla tasarım gör",
    infoEyebrow: "Bilgi",
    infoTitle: "Ücretsiz danışma",
    infoText: "Tasarım, boyut, bölge ve istediğin tarihi paylaş. Stüdyo doğru sanatçı ve randevu için yardımcı olur.",
    locationTitle: "Konum",
    hoursTitle: "Çalışma saatleri",
    hoursText: "Pazartesi - Cumartesi 11:00 - 20:00",
    phoneTitle: "Telefon",
    mailTitle: "E-posta",
    reservationEyebrow: "Rezervasyon",
    reservationTitle: "Randevu al",
    reservationText: "Sanatçı seç, fikrini bırak, stüdyo uygun saatler için dönüş yapsın.",
  },
};

const artistGrid = document.querySelector("[data-artist-grid]");
const galleryGrid = document.querySelector("[data-gallery]");
const artistPage = document.querySelector("[data-artist-page]");
const menu = document.querySelector("[data-menu]");
const artistSelect = document.querySelector("[data-artist-select]");
const formNote = document.querySelector("[data-form-note]");
const langCurrent = document.querySelector("[data-lang-current]");
let currentLang = "en";
let visibleGalleryCount = 8;

function instagramIconMarkup() {
  return '<span class="instagram-icon" aria-hidden="true"></span>';
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderArtists() {
  artistGrid.innerHTML = artists
    .map(
      (artist) => `
        <a class="artist-card reveal-left" href="#artist-${artist.id}" aria-label="View ${artist.name}'s work">
          <span class="artist-card__image">
            <img src="${artist.image}" alt="${artist.name} tattoo work" loading="lazy" />
          </span>
          <h3>${artist.name}</h3>
          <span class="artist-card__links">
            <span class="artist-card__social" aria-label="Instagram">${instagramIconMarkup()}</span>
            <i data-lucide="message-circle" aria-hidden="true"></i>
          </span>
        </a>
      `,
    )
    .join("");

  artists.forEach((artist) => {
    const option = document.createElement("option");
    option.value = artist.name;
    option.textContent = artist.name;
    artistSelect.append(option);
  });
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages
    .slice(0, visibleGalleryCount)
    .map(
      (src, index) => `
        <figure class="gallery-item">
          <img src="${src}" alt="Grimm Tattoo gallery piece ${index + 1}" loading="lazy" />
        </figure>
      `,
    )
    .join("");

  const button = document.querySelector("[data-see-more-gallery]");
  if (button) {
    button.hidden = visibleGalleryCount >= galleryImages.length;
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  langCurrent.textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key] || translations.en[key] || element.textContent;
  });
}

function renderArtistPage(artist) {
  artistPage.hidden = false;
  artistPage.innerHTML = `
    <button class="back-link" type="button" data-back-artists>
      <i data-lucide="arrow-left"></i>
      Back to all artists
    </button>
    <div class="artist-detail">
      <div class="reveal-left is-visible">
        <p class="eyebrow">${artist.role}</p>
        <h2>${artist.name}</h2>
        <p>${artist.bio}</p>
        <div class="artist-detail__actions">
          <button class="primary-button" type="button" data-book-artist="${artist.name}">Book with ${artist.name}</button>
          <a class="ghost-button" href="#gallery">View gallery</a>
        </div>
      </div>
      <div class="artist-work-grid reveal-right is-visible">
        ${artist.works.map((src) => `<img src="${src}" alt="${artist.name} tattoo work" loading="lazy" />`).join("")}
      </div>
    </div>
  `;
  initIcons();
  artistPage.querySelector("[data-back-artists]").addEventListener("click", () => {
    location.hash = "artists";
  });
  artistPage.querySelector("[data-book-artist]").addEventListener("click", () => {
    bookArtist(artist.name);
  });
  setTimeout(() => artistPage.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
}

function handleRoute() {
  const id = location.hash.replace("#artist-", "");
  const artist = artists.find((item) => item.id === id);

  if (artist) {
    renderArtistPage(artist);
    return;
  }

  artistPage.hidden = true;
  artistPage.innerHTML = "";
}

function bookArtist(name) {
  artistSelect.value = name || "Any artist";
  closeMenu();
  document.querySelector("#reservation").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openMenu() {
  document.body.classList.add("menu-open");
  menu.classList.add("open");
  menu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
}

function initMenu() {
  document.querySelector("[data-menu-open]").addEventListener("click", openMenu);
  document.querySelectorAll("[data-menu-close]").forEach((button) => button.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-menu-link]").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelector("[data-book-general]").addEventListener("click", () => bookArtist("Any artist"));
  document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "tr" : "en");
  });
}

function initGalleryActions() {
  document.querySelector("[data-see-more-gallery]").addEventListener("click", () => {
    visibleGalleryCount = Math.min(visibleGalleryCount + 4, galleryImages.length);
    renderGallery();
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal-left, .reveal-right").forEach((element) => observer.observe(element));
}

function initRotators() {
  document.querySelectorAll("[data-rotator]").forEach((frame, frameIndex) => {
    const images = [...frame.querySelectorAll("img")];
    let active = 0;

    setInterval(() => {
      images[active].classList.remove("active");
      active = (active + 1) % images.length;
      images[active].classList.add("active");
    }, 3800 + frameIndex * 650);
  });
}

function initForm() {
  document.querySelector("[data-booking-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const firstName = new FormData(form).get("firstName") || "Your";
    formNote.textContent = `${firstName}, your demo reservation is ready. In the final version this can send to WhatsApp, email, or a booking system.`;
  });
}

renderArtists();
renderGallery();
applyLanguage(currentLang);
initIcons();
initMenu();
initGalleryActions();
initReveal();
initRotators();
initForm();
handleRoute();

window.addEventListener("hashchange", handleRoute);

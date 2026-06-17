const galleryImages = [
  "assets/yapbi/work-03.jpg",
  "assets/yapbi/work-07.jpg",
  "assets/yapbi/work-08.jpg",
  "assets/yapbi/work-10.jpg",
  "assets/yapbi/work-11.jpg",
  "assets/yapbi/work-12.jpg",
  "assets/yapbi/work-02.jpg",
  "assets/yapbi/work-04.jpg",
  "assets/yapbi/work-06.jpg",
  "assets/yapbi/work-09.jpg",
  "assets/yapbi/work-01.jpg",
  "assets/yapbi/work-05.jpg",
];

const translations = {
  en: {
    navHome: "Home",
    navInformation: "Information",
    navPricing: "Pricing",
    navReservation: "Reservation",
    navGallery: "Gallery",
    dmForBooking: "DM for booking",
    heroEyebrow: "Besiktas tattoo and piercing studio",
    heroTitle: "Minimal lines.<br />Clean piercing.",
    heroLead: "Fine-line tattoos, handwritten pieces, small custom designs, and professional piercing in Besiktas Carsi.",
    bookAppointment: "Book appointment",
    viewWorks: "View works",
    infoTitle: "Tattoo and piercing, kept simple.",
    infoText:
      "Yapbi focuses on clean placement, fine line details, minimal designs, and sterile professional piercing. Share your reference, size, placement, and date to plan the appointment.",
    fineLine: "Fine-line tattoo",
    fineLineText: "Small symbols, initials, dates, short text, and small custom pieces.",
    allStyles: "All styles",
    allStylesText: "Minimal work is the main feel, with flexible tattoo styles by request.",
    piercing: "Piercing",
    piercingText: "Ear, nose, belly, and other piercing options with fresh jewelry choices.",
    sterile: "Sterile setup",
    sterileText: "Clean tools, professional process, and aftercare guidance before you leave.",
    pricingEyebrow: "Pricing",
    pricingTitle: "Clear starting points",
    pricingText:
      "Final pricing depends on design detail, size, placement, jewelry choice, and session time. Send a reference image for the cleanest quote.",
    minimalTattoo: "Minimal tattoo",
    minimalTattooText: "Fine-line symbols, initials, dates, short text, and small custom pieces.",
    quoteByDesign: "Quote by design",
    piercingService: "Piercing service",
    piercingServiceText: "Piercing appointment with sterile setup and jewelry options at the studio.",
    quoteByJewelry: "Quote by jewelry",
    customPlanning: "Custom planning",
    customPlanningText: "Send size, placement, style reference, and preferred date before booking.",
    dmForPrice: "DM for price",
    reservationEyebrow: "Reservation",
    reservationTitle: "Plan your next piece",
    reservationText:
      "Use the form for the demo website. In the live version this can send directly to Instagram DM, WhatsApp, email, or a booking system.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    serviceLabel: "Service",
    dateLabel: "Preferred date",
    messageLabel: "Idea / placement / size",
    sendRequest: "Prepare request",
    galleryTitle: "Gallery",
    galleryText: "Recent tattoo and piercing work from Yapbi's Instagram.",
    seeMore: "See more",
    formReady: "your request is ready. In the final version this button can send it to Instagram DM or WhatsApp.",
  },
  tr: {
    navHome: "Ana sayfa",
    navInformation: "Bilgi",
    navPricing: "Fiyat",
    navReservation: "Rezervasyon",
    navGallery: "Galeri",
    dmForBooking: "Randevu icin DM",
    heroEyebrow: "Besiktas dovme ve piercing studyosu",
    heroTitle: "Minimal cizgiler.<br />Temiz piercing.",
    heroLead: "Fine-line dovmeler, el yazisi isler, kucuk ozel tasarimlar ve Besiktas Carsi'da profesyonel piercing.",
    bookAppointment: "Randevu al",
    viewWorks: "Isleri gor",
    infoTitle: "Dovme ve piercing, sade ve temiz.",
    infoText:
      "Yapbi temiz yerlestirme, ince cizgi detaylari, minimal tasarimlar ve steril profesyonel piercing odakli calisir. Randevu icin referans, boyut, bolge ve tarihi paylas.",
    fineLine: "Fine-line dovme",
    fineLineText: "Kucuk semboller, bas harfler, tarihler, kisa yazilar ve minimal ozel parcalar.",
    allStyles: "Tum stiller",
    allStylesText: "Genel his minimal; talebe gore farkli dovme stilleri planlanabilir.",
    piercing: "Piercing",
    piercingText: "Kulak, burun, gobek ve diger piercing secenekleri, yeni taki alternatifleriyle.",
    sterile: "Steril duzen",
    sterileText: "Temiz ekipman, profesyonel surec ve cikmadan once bakim bilgisi.",
    pricingEyebrow: "Fiyat",
    pricingTitle: "Net baslangic bilgisi",
    pricingText:
      "Net fiyat tasarim detayi, boyut, bolge, taki secimi ve seans suresine gore belirlenir. En dogru teklif icin referans gorsel gonder.",
    minimalTattoo: "Minimal dovme",
    minimalTattooText: "Ince cizgi semboller, bas harf, tarih, kisa yazi ve kucuk ozel tasarimlar.",
    quoteByDesign: "Tasarima gore",
    piercingService: "Piercing hizmeti",
    piercingServiceText: "Steril kurulum ve studyodaki taki secenekleriyle piercing randevusu.",
    quoteByJewelry: "Takiya gore",
    customPlanning: "Ozel planlama",
    customPlanningText: "Randevu oncesi boyut, bolge, stil referansi ve uygun tarihi gonder.",
    dmForPrice: "Fiyat icin DM",
    reservationEyebrow: "Rezervasyon",
    reservationTitle: "Yeni isini planla",
    reservationText:
      "Bu form demo website icin hazirlandi. Canli versiyonda Instagram DM, WhatsApp, e-posta veya randevu sistemine baglanabilir.",
    nameLabel: "Isim",
    phoneLabel: "Telefon",
    serviceLabel: "Hizmet",
    dateLabel: "Tercih edilen tarih",
    messageLabel: "Fikir / bolge / boyut",
    sendRequest: "Talebi hazirla",
    galleryTitle: "Galeri",
    galleryText: "Yapbi Instagram'indan son dovme ve piercing isleri.",
    seeMore: "Daha fazla",
    formReady: "talebin hazir. Final versiyonda bu buton Instagram DM veya WhatsApp'a gonderebilir.",
  },
};

const menu = document.querySelector("[data-menu]");
const galleryGrid = document.querySelector("[data-gallery]");
const formNote = document.querySelector("[data-form-note]");
const langCurrent = document.querySelector("[data-lang-current]");
let currentLang = "en";
let visibleGalleryCount = 8;

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages
    .slice(0, visibleGalleryCount)
    .map(
      (src, index) => `
        <figure class="gallery-item">
          <img src="${src}" alt="Yapbi tattoo and piercing gallery image ${index + 1}" loading="lazy" />
        </figure>
      `,
    )
    .join("");

  const button = document.querySelector("[data-see-more-gallery]");
  button.hidden = visibleGalleryCount >= galleryImages.length;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  langCurrent.textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key] || translations.en[key] || element.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = translations[lang][key] || translations.en[key] || element.innerHTML;
  });
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
  document.querySelectorAll("[data-menu-close], [data-menu-link]").forEach((item) => item.addEventListener("click", closeMenu));
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
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal-left, .reveal-right").forEach((element) => observer.observe(element));
}

function initRotators() {
  document.querySelectorAll("[data-rotator]").forEach((frame, frameIndex) => {
    const images = [...frame.querySelectorAll("img")];
    let active = 0;

    if (images.length < 2) return;

    setInterval(() => {
      images[active].classList.remove("active");
      active = (active + 1) % images.length;
      images[active].classList.add("active");
    }, 3900 + frameIndex * 500);
  });
}

function initForm() {
  document.querySelector("[data-booking-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = new FormData(form).get("name") || "Your";
    formNote.textContent = `${name}, ${translations[currentLang].formReady}`;
  });
}

renderGallery();
applyLanguage(currentLang);
initIcons();
initMenu();
initGalleryActions();
initReveal();
initRotators();
initForm();

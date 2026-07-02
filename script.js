const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const bookingForm = document.querySelector("[data-booking-form]");
const bookingStatus = document.querySelector("[data-booking-status]");
const bookingArtistSelect = document.querySelector("[data-booking-artist]");
const artistOptionButtons = [...document.querySelectorAll("[data-artist-option]")];
const languageButton = document.querySelector("[data-language-toggle]");
const langCurrent = document.querySelector("[data-lang-current]");
const workSlides = [...document.querySelectorAll(".work-slide")];
const approachSection = document.querySelector("#approach");
const noteItems = [...document.querySelectorAll("[data-note-item]")];
const drawingCanvas = document.querySelector("[data-drawing-canvas]");
const uploadInput = document.querySelector("[data-design-upload]");
const uploadPreview = document.querySelector("[data-upload-preview]");
const clearDesignButton = document.querySelector("[data-clear-design]");
const emptyIdea = document.querySelector("[data-empty-idea]");
const dropZone = document.querySelector("[data-drop-zone]");
const bodyButtons = [...document.querySelectorAll("[data-body-part]")];
const placementPreview = document.querySelector("[data-placement-preview]");
const bodyPreview = document.querySelector("[data-body-preview]");
const designPlacement = document.querySelector("[data-design-placement]");
const placementPlaceholder = document.querySelector("[data-placement-placeholder]");
const resetPlacementButton = document.querySelector("[data-reset-placement]");
const placementScaleInput = document.querySelector("[data-placement-scale]");

const bodyPartAssets = {
  arm: "assets/body-parts/arm.svg",
  leg: "assets/body-parts/leg.svg",
  chest: "assets/body-parts/chest.svg",
  back: "assets/body-parts/back.svg",
  neck: "assets/body-parts/neck.svg",
};

const bookingState = {
  designSource: "",
  selectedBodyPart: "arm",
  selectedArtist: "Artist #1",
  placement: {
    x: 0,
    y: 0,
    scale: 1,
  },
};

let noteMobilePlayed = false;

const translations = {
  en: {
    navWork: "Work",
    navApproach: "Approach",
    navBooking: "Booking",
    navContact: "Contact",
    heroTitle: "GOAT Art Society",
    heroLead: "A clean tattoo studio experience shaped around strong work, calm lighting, and direct booking.",
    startBooking: "Start a booking",
    viewInstagram: "View Instagram",
    workEyebrow: "Studio work",
    workTitle: "Selected tattoos",
    workText:
      "A rotating preview of selected tattoo work from the studio. Replace these frames as the final GOAT archive grows.",
    allWorks: "See all works",
    worksPageEyebrow: "Portfolio",
    worksPageTitle: "Studio works",
    worksPageText: "A dedicated gallery page for GOAT Art Society tattoo work. These are placeholders until the full studio archive is added.",
    cardOne: "Cover-up flow",
    cardTwo: "Red contrast",
    cardThree: "Floral blackwork",
    cardFour: "Custom placement",
    noteReference: "reference",
    notePlacement: "placement",
    noteSize: "size",
    noteDate: "date",
    approachEyebrow: "How it works",
    approachTitle: "Send the idea. Shape the mark.",
    stepOneTitle: "Share references",
    stepOneText: "Send images, mood, subject, size, and body placement through Instagram DM.",
    stepTwoTitle: "Confirm the design",
    stepTwoText: "The piece is planned around flow, detail level, and how it will age on skin.",
    stepThreeTitle: "Book the session",
    stepThreeText: "Once the date and quote are clear, the appointment details are locked in.",
    bookingEyebrow: "Booking helper",
    bookingTitle: "Send a booking request.",
    bookingText:
      "Add your name, idea, and preferred artist. The selected body part and design preview stay connected to the request.",
    nameLabel: "Customer name",
    placementLabel: "Placement",
    placementPlaceholder: "Forearm, ribs, ankle...",
    sizeLabel: "Approx. size",
    sizePlaceholder: "5 cm, palm size...",
    dateLabel: "Preferred date",
    ideaLabel: "Tattoo idea / description",
    ideaPlaceholder: "Describe the tattoo, references, size, and anything important.",
    prepareMessage: "Prepare message",
    messagePlaceholder: "Your prepared message will appear here.",
    copyMessage: "Copy message",
    copied: "Copied",
    openInstagram: "Open Instagram DM",
    contactEyebrow: "Contact",
    contactTitle: "Ready when the real work is.",
    dmInstagram: "DM on Instagram",
    dmIntro: "Hi GOAT Art Society, I would like to ask about a tattoo appointment.",
    dmName: "Name",
    dmPlacement: "Placement",
    dmSize: "Approx. size",
    dmDate: "Preferred date",
    dmIdea: "Idea",
  },
  tr: {
    navWork: "Isler",
    navApproach: "Surec",
    navBooking: "Randevu",
    navContact: "Iletisim",
    heroTitle: "GOAT Art Society",
    heroLead: "Guclu isler, sakin isik ve direkt randevu akisi etrafinda kurulan temiz bir dovme stüdyosu deneyimi.",
    startBooking: "Randevu baslat",
    viewInstagram: "Instagram'i gor",
    workEyebrow: "Stüdyo isleri",
    workTitle: "Secili dovmeler",
    workText:
      "Stüdyodan secili dovme isleri icin donen bir onizleme. GOAT arsivi buyudukce bu kareleri final islerle degistiririz.",
    allWorks: "Tum isleri gor",
    worksPageEyebrow: "Portfolyo",
    worksPageTitle: "Stüdyo isleri",
    worksPageText: "GOAT Art Society dovme isleri icin ayrilmis galeri sayfasi. Tam stüdyo arsivi eklenene kadar burada placeholder gorseller var.",
    cardOne: "Cover-up akis",
    cardTwo: "Kirmizi kontrast",
    cardThree: "Floral blackwork",
    cardFour: "Ozel yerlestirme",
    noteReference: "referans",
    notePlacement: "bolge",
    noteSize: "boyut",
    noteDate: "tarih",
    approachEyebrow: "Surec",
    approachTitle: "Fikri gonder. Izi sekillendir.",
    stepOneTitle: "Referanslari paylas",
    stepOneText: "Gorsel, mood, konu, boyut ve vucut bolgesini Instagram DM uzerinden gonder.",
    stepTwoTitle: "Tasarimi netlestir",
    stepTwoText: "Is; akis, detay seviyesi ve tende nasil yaslanacagi dusunulerek planlanir.",
    stepThreeTitle: "Seansi ayarla",
    stepThreeText: "Tarih ve fiyat netlestiginde randevu detaylari kesinlesir.",
    bookingEyebrow: "Randevu yardimcisi",
    bookingTitle: "Randevu talebi gonder.",
    bookingText:
      "Ismini, fikrini ve tercih ettigin sanatciyi ekle. Secilen bolge ve tasarim onizlemesi talebe bagli kalir.",
    nameLabel: "Musteri ismi",
    placementLabel: "Bolge",
    placementPlaceholder: "On kol, kaburga, bilek...",
    sizeLabel: "Yaklasik boyut",
    sizePlaceholder: "5 cm, avuc ici kadar...",
    dateLabel: "Tercih edilen tarih",
    ideaLabel: "Dovme fikri / aciklama",
    ideaPlaceholder: "Dovmeyi, referanslari, boyutu ve onemli detaylari anlat.",
    prepareMessage: "Mesaji hazirla",
    messagePlaceholder: "Hazirlanan mesaj burada gorunecek.",
    copyMessage: "Mesaji kopyala",
    copied: "Kopyalandi",
    openInstagram: "Instagram DM ac",
    contactEyebrow: "Iletisim",
    contactTitle: "Gercek isler gelince hazir.",
    dmInstagram: "Instagram'dan DM",
    dmIntro: "Merhaba GOAT Art Society, dovme randevusu hakkinda bilgi almak istiyorum.",
    dmName: "Isim",
    dmPlacement: "Bolge",
    dmSize: "Yaklasik boyut",
    dmDate: "Tercih edilen tarih",
    dmIdea: "Fikir",
  },
};

let currentLang = "en";

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton?.classList.remove("is-open");
  mobileMenu?.classList.remove("is-open");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  langCurrent.textContent = lang.toUpperCase();
  languageButton.querySelector("small").textContent = lang === "en" ? "TR" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = translations[lang][element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });

}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function updateNotebookScroll() {
  if (!approachSection || !noteItems.length) return;

  const rect = approachSection.getBoundingClientRect();
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  if (isMobile && noteMobilePlayed) {
    noteItems.forEach((item) => {
      item.style.setProperty("--note-x", "0px");
      item.style.setProperty("--note-opacity", "1");
      item.style.setProperty("--shine-opacity", "0");
      item.classList.add("is-placed");
    });
    return;
  }

  const travel = isMobile ? window.innerHeight * 0.5 : rect.height + window.innerHeight * 0.55;
  const triggerLine = isMobile ? window.innerHeight * 0.96 : window.innerHeight * 0.74;
  const progress = clamp((triggerLine - rect.top) / travel);

  noteItems.forEach((item, index) => {
    const start = index * (isMobile ? 0.1 : 0.16);
    const end = start + (isMobile ? 0.2 : 0.32);
    const itemProgress = clamp((progress - start) / (end - start));
    const eased = easeOutCubic(itemProgress);
    const side = item.dataset.enterSide || (index % 2 ? "right" : "left");
    const direction = side === "left" ? -1 : 1;
    const travelX = direction * (1 - eased) * (isMobile ? 48 : 220);
    const shineTravel = side === "left"
      ? `${-135 + itemProgress * 270}%`
      : `${135 - itemProgress * 270}%`;
    const shineOpacity = Math.sin(itemProgress * Math.PI) * 0.9;

    item.style.setProperty("--note-x", `${travelX}px`);
    item.style.setProperty("--note-opacity", `${clamp(itemProgress * 1.25)}`);
    item.style.setProperty("--shine-x", shineTravel);
    item.style.setProperty("--shine-opacity", `${shineOpacity}`);
    item.classList.toggle("is-placed", itemProgress >= 1);
  });
}

function playMobileNotebook() {
  if (noteMobilePlayed || !window.matchMedia("(max-width: 700px)").matches) return;

  noteMobilePlayed = true;
  noteItems.forEach((item, index) => {
    const side = item.dataset.enterSide || (index % 2 ? "right" : "left");
    const direction = side === "left" ? -1 : 1;
    item.style.setProperty("--note-x", `${direction * 36}px`);
    item.style.setProperty("--note-opacity", "0");
    item.style.setProperty("--shine-opacity", "0");

    window.setTimeout(() => {
      item.style.setProperty("--note-x", "0px");
      item.style.setProperty("--note-opacity", "1");
      item.style.setProperty("--shine-x", side === "left" ? "0%" : "0%");
      item.style.setProperty("--shine-opacity", "0.85");
      item.classList.add("is-placed");

      window.setTimeout(() => {
        item.style.setProperty("--shine-opacity", "0");
      }, 360);
    }, index * 140);
  });
}

function updatePlacementTransform() {
  if (!designPlacement) return;

  designPlacement.style.setProperty("--tattoo-x", `${bookingState.placement.x}px`);
  designPlacement.style.setProperty("--tattoo-y", `${bookingState.placement.y}px`);
  designPlacement.style.setProperty("--tattoo-scale", `${bookingState.placement.scale}`);

  if (placementScaleInput) placementScaleInput.value = String(bookingState.placement.scale);
}

function resetPlacement() {
  bookingState.placement = {
    x: 0,
    y: 0,
    scale: 1,
  };
  updatePlacementTransform();
}

function syncDesignPreview() {
  const hasDesign = Boolean(bookingState.designSource);

  document.querySelector(".idea-paper")?.classList.toggle("has-design", hasDesign);
  if (emptyIdea) emptyIdea.hidden = hasDesign;

  if (designPlacement) {
    designPlacement.hidden = !hasDesign;
    if (hasDesign) designPlacement.src = bookingState.designSource;
  }

  if (placementPlaceholder) {
    placementPlaceholder.hidden = hasDesign;
  }
}

function setDesignSource(source) {
  bookingState.designSource = source;
  syncDesignPreview();
}

function loadDesignFile(file) {
  if (!file || !/^image\/(png|jpe?g|webp)$/i.test(file.type)) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const source = String(reader.result || "");
    if (uploadPreview) {
      uploadPreview.src = source;
      uploadPreview.hidden = false;
    }
    setDesignSource(source);
    resetPlacement();
  });
  reader.readAsDataURL(file);
}

function resizeDrawingCanvas() {
  if (!drawingCanvas) return;

  const rect = drawingCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const snapshot = drawingCanvas.width && drawingCanvas.height ? drawingCanvas.toDataURL("image/png") : "";

  drawingCanvas.width = Math.max(1, Math.floor(rect.width * ratio));
  drawingCanvas.height = Math.max(1, Math.floor(rect.height * ratio));

  const context = drawingCanvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 3.2;
  context.strokeStyle = "#111111";

  if (snapshot) {
    const image = new Image();
    image.onload = () => {
      context.drawImage(image, 0, 0, rect.width, rect.height);
      setDesignSource(drawingCanvas.toDataURL("image/png"));
    };
    image.src = snapshot;
  }
}

function setupDrawingBoard() {
  if (!drawingCanvas) return;

  const context = drawingCanvas.getContext("2d");
  let isDrawing = false;

  function pointFromEvent(event) {
    const rect = drawingCanvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function startDrawing(event) {
    isDrawing = true;
    drawingCanvas.setPointerCapture?.(event.pointerId);
    const point = pointFromEvent(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  }

  function draw(event) {
    if (!isDrawing) return;
    const point = pointFromEvent(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopDrawing() {
    if (!isDrawing) return;
    isDrawing = false;
    setDesignSource(drawingCanvas.toDataURL("image/png"));
  }

  resizeDrawingCanvas();
  drawingCanvas.addEventListener("pointerdown", startDrawing);
  drawingCanvas.addEventListener("pointermove", draw);
  drawingCanvas.addEventListener("pointerup", stopDrawing);
  drawingCanvas.addEventListener("pointercancel", stopDrawing);
}

function clearDrawingBoard() {
  if (!drawingCanvas) return;

  const context = drawingCanvas.getContext("2d");
  const rect = drawingCanvas.getBoundingClientRect();
  context.clearRect(0, 0, rect.width, rect.height);
  if (uploadPreview) {
    uploadPreview.hidden = true;
    uploadPreview.removeAttribute("src");
  }
  if (uploadInput) uploadInput.value = "";
  setDesignSource("");
  resetPlacement();
}

function setupBookingFlow() {
  setupDrawingBoard();
  syncDesignPreview();
  updatePlacementTransform();

  uploadInput?.addEventListener("change", () => {
    const file = uploadInput.files?.[0];
    loadDesignFile(file);
  });

  dropZone?.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("is-dragging");
  });

  dropZone?.addEventListener("dragleave", () => {
    dropZone.classList.remove("is-dragging");
  });

  dropZone?.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("is-dragging");
    loadDesignFile(event.dataTransfer?.files?.[0]);
  });

  clearDesignButton?.addEventListener("click", clearDrawingBoard);
  resetPlacementButton?.addEventListener("click", resetPlacement);

  placementScaleInput?.addEventListener("input", () => {
    bookingState.placement.scale = Number(placementScaleInput.value);
    updatePlacementTransform();
  });

  bodyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      bookingState.selectedBodyPart = button.dataset.bodyPart || "arm";
      bodyButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.bodyPart === bookingState.selectedBodyPart));
      placementPreview?.setAttribute("data-body-surface", bookingState.selectedBodyPart);
      if (bodyPreview) {
        bodyPreview.src = bodyPartAssets[bookingState.selectedBodyPart] || bodyPartAssets.arm;
        bodyPreview.alt = `${button.textContent.trim()} placement preview`;
      }
      resetPlacement();
    });
  });

  setupPlacementInteraction();

  artistOptionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      bookingState.selectedArtist = button.dataset.artistOption || "Artist #1";
      artistOptionButtons.forEach((item) => {
        item.classList.toggle("is-active", item.dataset.artistOption === bookingState.selectedArtist);
      });
      if (bookingArtistSelect) bookingArtistSelect.value = bookingState.selectedArtist;
    });
  });

  bookingArtistSelect?.addEventListener("change", () => {
    bookingState.selectedArtist = bookingArtistSelect.value;
    artistOptionButtons.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.artistOption === bookingState.selectedArtist);
    });
  });
}

function setupPlacementInteraction() {
  if (!designPlacement || !placementPreview) return;

  const pointers = new Map();
  let startPlacement = { ...bookingState.placement };
  let startPoint = null;
  let startDistance = 0;

  function pointerPoint(event) {
    return { x: event.clientX, y: event.clientY };
  }

  function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function handlePointerDown(event) {
    if (designPlacement.hidden) return;
    event.preventDefault();
    designPlacement.classList.add("is-moving");
    designPlacement.setPointerCapture?.(event.pointerId);
    pointers.set(event.pointerId, pointerPoint(event));
    startPlacement = { ...bookingState.placement };
    const values = [...pointers.values()];
    startPoint = values[0];
    if (values.length >= 2) {
      startDistance = distance(values[0], values[1]);
    }
  }

  function handlePointerMove(event) {
    if (!pointers.has(event.pointerId)) return;
    event.preventDefault();
    pointers.set(event.pointerId, pointerPoint(event));
    const values = [...pointers.values()];

    if (values.length >= 2) {
      const currentDistance = distance(values[0], values[1]);
      const scaleRatio = startDistance ? currentDistance / startDistance : 1;
      bookingState.placement.scale = clamp(startPlacement.scale * scaleRatio, 0.45, 1.8);
    } else if (startPoint) {
      bookingState.placement.x = startPlacement.x + values[0].x - startPoint.x;
      bookingState.placement.y = startPlacement.y + values[0].y - startPoint.y;
    }

    updatePlacementTransform();
  }

  function handlePointerUp(event) {
    pointers.delete(event.pointerId);
    if (!pointers.size) {
      designPlacement.classList.remove("is-moving");
      return;
    }

    startPlacement = { ...bookingState.placement };
    const values = [...pointers.values()];
    startPoint = values[0];
    if (values.length >= 2) {
      startDistance = distance(values[0], values[1]);
    }
  }

  designPlacement.addEventListener("pointerdown", handlePointerDown);
  designPlacement.addEventListener("pointermove", handlePointerMove);
  designPlacement.addEventListener("pointerup", handlePointerUp);
  designPlacement.addEventListener("pointercancel", handlePointerUp);
}

let notebookFrame = 0;

function queueNotebookScroll() {
  if (notebookFrame) return;

  notebookFrame = window.requestAnimationFrame(() => {
    notebookFrame = 0;
    updateNotebookScroll();
  });
}

menuButton?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.toggle("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

languageButton?.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "tr" : "en");
});

if (workSlides.length > 1) {
  let activeSlide = 0;

  setInterval(() => {
    workSlides[activeSlide].classList.remove("is-active");
    activeSlide = (activeSlide + 1) % workSlides.length;
    workSlides[activeSlide].classList.add("is-active");
  }, 3200);
}

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  bookingState.selectedArtist = String(data.get("artist") || bookingArtistSelect?.value || "Artist #1");
  bookingForm.dataset.lastBooking = JSON.stringify({
    name: data.get("name") || "",
    idea: data.get("idea") || "",
    artist: bookingState.selectedArtist,
    bodyPart: bookingState.selectedBodyPart,
    hasDesign: Boolean(bookingState.designSource),
    placement: bookingState.placement,
  });

  if (bookingStatus) {
    bookingStatus.textContent = "Booking request saved";
  }
});

if (noteItems.length) {
  document.documentElement.classList.add("note-scroll-ready");
  updateNotebookScroll();
  window.addEventListener("scroll", queueNotebookScroll, { passive: true });
  window.addEventListener("resize", queueNotebookScroll);

  if ("IntersectionObserver" in window) {
    const noteObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        playMobileNotebook();
      }
    }, { threshold: 0.28 });
    noteObserver.observe(approachSection);
  }
}

setupBookingFlow();

applyLanguage(currentLang);

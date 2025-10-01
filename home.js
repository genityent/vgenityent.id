/* =========================
   THEME TOGGLE
========================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

/* =========================
   NAVIGATION UNDERLINE
========================= */
const navLinks = document.querySelectorAll(".nav-links a");
const underline = document.querySelector(".underline");

// Fungsi set posisi underline
function setUnderline(element) {
  underline.style.width = element.offsetWidth + "px";
  underline.style.left = element.offsetLeft + "px";
}

// Klik menu → aktifkan underline
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    setUnderline(link);
  });
});

// Scroll → auto pindah underline sesuai section aktif
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // jarak biar lebih pas
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
      setUnderline(link);
    }
  });
});

// Set default underline ke menu yang aktif saat load
window.onload = () => {
  const activeLink = document.querySelector(".nav-links a.active");
  setUnderline(activeLink);
};

/* =========================
   3D CAROUSEL LAYANAN
========================= */
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".carousel .card");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let angle = 0;
const totalCards = cards.length;
const rotateStep = 360 / totalCards;

// Posisi awal setiap card dalam lingkaran 3D
cards.forEach((card, i) => {
  const theta = i * rotateStep;
  card.style.transform = `rotateY(${theta}deg) translateZ(400px)`;
});

// Fungsi rotasi carousel
function rotateCarousel() {
  carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
}

// Klik tombol next → geser kanan
nextBtn.addEventListener("click", () => {
  angle -= rotateStep;
  rotateCarousel();
});

// Klik tombol prev → geser kiri
prevBtn.addEventListener("click", () => {
  angle += rotateStep;
  rotateCarousel();
});

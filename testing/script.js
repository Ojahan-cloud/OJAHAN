document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR MOBILE
window.toggleMenu = () => {
  document.getElementById("navMenu").classList.toggle("active");
};
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});

  // DARK MODE
  window.toggleDark = () => {
    document.body.classList.toggle("dark");
    darkBtn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
  };

  // TRANSLATION
  let currentLang = "id";

  const translations = {
    id: {
      sub: "Web Developer | Designer | Tech Enthusiast",
      aboutT: "👤 Tentang Saya",
      aboutX:
        "Saya adalah developer di bawah naungan HANS GROUP yang fokus pada pengembangan web dan solusi digital inovatif, dan saya adalah mahasiswa aktif Teknik Perkeretaapian ITERA.",
      edu: "🎓 Pendidikan",
      edul: "S1 Teknik Perkeretaapian, Institut Teknologi Sumatera"
    },
    en: {
      sub: "Web Developer | Designer | Technology Enthusiast",
      aboutT: "👤 About Me",
      aboutX:
        "I am a developer under the auspices of HANS GROUP who focuses on web development and innovative digital solutions, and I am an active student of Railway Engineering at ITERA.",
      edu: "🎓 Education",
      edul: "Bachelor of Railway Engineering, Institut Teknologi Sumatera"
    }
  };

  window.toggleLang = () => {
    currentLang = currentLang === "id" ? "en" : "id";

    subtitle.innerText = translations[currentLang].sub;
    aboutTitle.innerText = translations[currentLang].aboutT;
    aboutText.innerText = translations[currentLang].aboutX;
    eduTitle.innerText = translations[currentLang].edu;
    edul.innerText = translations[currentLang].edul;
  };

  // CARD ANIMATION
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
  });

  document.querySelectorAll(".card").forEach(card => observer.observe(card));

  // SLIDER
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach(s => s.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  window.nextSlide = () => showSlide(currentSlide + 1);
  window.prevSlide = () => showSlide(currentSlide - 1);

  setInterval(window.nextSlide, 5000);
});

// ==================== Toggle Icon Navbar ====================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// ==================== Scroll Section Active Link ====================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector('header nav a[href*="' + id + '"]')
        .classList.add("active");
    }
  });

  // ==================== Sticky Navbar ====================
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ==================== Close Navbar When Link Clicked ====================
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// ==================== Scroll Reveal Animation ====================
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: true
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

// ==================== Typed.js Animation ====================
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});

// ==================== Flying Dragon Movement ====================
const dragon = document.querySelector(".flying-dragon");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (dragon) {
    dragon.style.transform = `translateX(${scrollY * 0.4}px) translateY(${Math.sin(scrollY / 100) * 15}px)`;
  }
});

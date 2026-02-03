/* ===============================
   PORTFOLIO INTERACTIONS
================================ */

/* Active navbar */
const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* Fade-in on scroll */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

/* Typing effect */
const typing = document.getElementById("typing");
const words = ["AI Projects", "Chess Engines", "Web Experiences"];
let w = 0, c = 0, deleting = false;

function type() {
  if (!typing) return;
  const word = words[w];

  if (!deleting) {
    typing.textContent = word.slice(0, ++c);
    if (c === word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typing.textContent = word.slice(0, --c);
    if (c === 0) {
      deleting = false;
      w = (w + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 50 : 100);
}
type();

/* Cursor glow */
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  if (!glow) return;
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

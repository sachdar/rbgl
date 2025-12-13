// ✅ Mobile Menu Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".desktop-nav ul");
navToggle.addEventListener("click", () => navMenu.classList.toggle("show"));

// ✅ Stats Counter Animation
const counters = document.querySelectorAll(".stat-box");
let statsAnimated = false;
const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const update = () => {
      count += Math.ceil(target / 200);
      counter.innerText = "+" + (count < target ? count : target).toLocaleString();
      if (count < target) requestAnimationFrame(update);
    };
    update();
  });
};
window.addEventListener("scroll", () => {
  const rect = document.querySelector(".stats").getBoundingClientRect();
  if (!statsAnimated && rect.top < innerHeight && rect.bottom >= 0) {
    animateCounters(); statsAnimated = true;
  }
});

// ✅ FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  const q = item.querySelector(".faq-question");
  const a = item.querySelector(".faq-answer");
  a.style.display = "none";
  q.addEventListener("click", () => a.style.display = a.style.display === "block" ? "none" : "block");
});

// ✅ Mobile Menu Toggle (only on mobile)
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".desktop-nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ✅ Stats Counter Animation
const counters = document.querySelectorAll(".stat-box");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const update = () => {
      count += Math.ceil(target / 200);
      if (count < target) {
        counter.innerText = "+" + count.toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = "+" + target.toLocaleString();
      }
    };
    update();
  });
};

// Trigger animation when stats section is in view
const statsSection = document.querySelector(".stats");
let statsAnimated = false;

window.addEventListener("scroll", () => {
  const rect = statsSection.getBoundingClientRect();
  if (!statsAnimated && rect.top < window.innerHeight && rect.bottom >= 0) {
    animateCounters();
    statsAnimated = true;
  }
});

// ✅ FAQ Expand/Collapse
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  answer.style.display = "none"; // hide by default

  question.addEventListener("click", () => {
    const isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
  });
});
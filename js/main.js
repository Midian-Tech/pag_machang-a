document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Scroll Animation for Elements with .scroll-fade class
  const scrollElements = document.querySelectorAll(".scroll-fade");

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Run animation on scroll and load
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();

  // Page-specific enhancements can go here:
  // Example: Highlight active nav link (if needed)
  const navItems = document.querySelectorAll(".nav-links a");
  const currentUrl = window.location.pathname.split("/").pop();

  navItems.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
// Event Registration Modal
const modal = document.getElementById("registration-modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("registration-form");
const eventNameInput = document.getElementById("event-name");

document.querySelectorAll(".register-btn").forEach(button => {
  button.addEventListener("click", () => {
    const eventName = button.getAttribute("data-event");
    eventNameInput.value = eventName;
    modal.style.display = "flex";
  });
});

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registration submitted! Thank you.");
    modal.style.display = "none";
    form.reset();
  });
}
// Join Ministry Modal
const joinButtons = document.querySelectorAll('.join-btn');
const commitmentModal = document.getElementById('commitment-modal');
const commitmentForm = document.getElementById('commitment-form');
const selectedMinistryInput = document.getElementById('selected-ministry');
const ministryNameText = document.getElementById('ministry-name');
const closeCommitment = document.querySelector('.close-btn');

joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    const ministry = button.getAttribute('data-ministry');
    selectedMinistryInput.value = ministry;
    ministryNameText.textContent = ministry;
    commitmentModal.style.display = 'flex';
  });
});

if (closeCommitment && commitmentModal) {
  closeCommitment.addEventListener('click', () => {
    commitmentModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === commitmentModal) {
      commitmentModal.style.display = 'none';
    }
  });

  commitmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const ministry = selectedMinistryInput.value;

    if ((ministry === 'Men’s Ministry' || ministry === 'Women’s Ministry') && age < 25) {
      alert('You must be at least 25 years old to join the Men’s or Women’s Ministry.');
      return;
    }

    alert(`Thank you for joining the ${ministry}! We’ll get in touch with you soon.`);
    commitmentForm.reset();
    commitmentModal.style.display = 'none';
  });
}

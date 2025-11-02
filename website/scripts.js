document.addEventListener("DOMContentLoaded", function () {
  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;
  let scrollTimer;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Add floating effect when scrolling down
    if (currentScroll > 50) {
      navbar.classList.add("floating");
    } else {
      navbar.classList.remove("floating");
    }

    // Hide/show navbar based on scroll direction with delay
    clearTimeout(scrollTimer);

    if (currentScroll > lastScroll) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;

    // Show navbar after stopping scroll
    scrollTimer = setTimeout(() => {
      navbar.classList.remove("hidden");
    }, 1000);
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "auto";
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      body.style.overflow = "auto";
    }
  });

  // Close mobile menu when clicking on a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      body.style.overflow = "auto";
    });
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Levels Slider
  const slider = document.querySelector(".levels-slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Form Submission
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Add your form submission logic here
    const formData = new FormData(contactForm);
    console.log("Form submitted:", Object.fromEntries(formData));

    // Reset form
    contactForm.reset();

    // Show success message
    alert("תודה על פנייתך! נחזור אליך בהקדם.");
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Dynamic Level Progress
  const levelButtons = document.querySelectorAll(".level-button");

  levelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const level = this.parentElement;
      level.classList.add("completed");
      this.textContent = "הושלם ✓";
      this.disabled = true;
    });
  });

  // Writing Guide Modal
  const modal = document.getElementById("writing-guide-modal");
  const closeModal = document.querySelector(".close-modal");
  const openGuideBtn = document.querySelector(".open-guide-btn");

  // Open modal when clicking the guide button
  openGuideBtn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Close modal when clicking on X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Add scroll-based parallax effect to hero section
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = -(scrolled * 0.5) + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("mainNav");
  const navHeight = nav ? nav.offsetHeight : 0;
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault(); // Prevent default anchor scroll

        // Collapse the navbar if open
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }

        // Delay scroll slightly so menu can collapse first
        setTimeout(() => {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offset = elementTop - navHeight;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }, 300); // 300ms is enough for collapse animation
      }
    });
  });

  // Set scroll-padding-top for direct anchor clicks (e.g., page load with #services)
  if (nav) {
    document.documentElement.style.scrollPaddingTop = nav.offsetHeight + "px";
  }
});

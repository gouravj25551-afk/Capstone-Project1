document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active"); 
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      });
    });
  }

  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const email = document.querySelector("input[type='text']").value;
      const pass = document.querySelector("input[type='password']").value;

      if (email === "" || pass === "") {
        alert("⚠ Please fill all fields!");
      } else {
        alert("🎉 Login Successful!");
      }
    });
  }
});

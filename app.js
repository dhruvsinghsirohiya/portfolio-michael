
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.querySelectorAll(".menu-close");
    const navItems = document.getElementById("nav-items");

    // console.log(menuClose);

    // Open menu with animation
    menuOpen.addEventListener("click", () => {
        navItems.classList.remove("nav-items-hidden"); 
        navItems.classList.remove("hidden");
        navItems.classList.add("flex");
        navItems.classList.add("nav-items");
    });

    // Close menu with animation
    menuClose.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
          navItems.classList.remove("nav-items");
          navItems.classList.add("nav-items-hidden"); 
          setTimeout(() => {
              navItems.classList.remove("flex");
              navItems.classList.add("hidden");
          }, 1000);
      });
  });

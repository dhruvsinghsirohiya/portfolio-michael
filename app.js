
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.querySelectorAll(".menu-close");
    const navItems = document.getElementById("nav-items");
    const navGray =document.querySelectorAll(".nav-background");

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
        // console.log(closeBtn);
      closeBtn.addEventListener("click", () => {
          navItems.classList.remove("nav-items");
          navItems.classList.add("nav-items-hidden"); 
          setTimeout(() => {
              navItems.classList.remove("flex");
              navItems.classList.add("hidden");
          }, 1000);
      });
  });

  // Add smooth scrolling to navigation links
  const handleScroll = () => {
    if (window.scrollY > 50) {
        navGray.forEach((navBg) => {
        navBg.classList.remove("bg-[#2b2c2c]");
        navBg.classList.add("bg-[#252525]");
      });
    } else {
        navGray.forEach((navBg) => {
        navBg.classList.remove("bg-[#252525]");
        navBg.classList.add("bg-[#2b2c2c]");
      });
    }
  };

  window.addEventListener("scroll", handleScroll);


    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.querySelectorAll(".menu-close");
    const navItems = document.getElementById("nav-items");
    const navGray =document.querySelectorAll(".nav-background");
    const downloadBtn = document.getElementById("downloadBtn");
    const contactForm = document.getElementById("contactForm");

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

  // download pdf button js
  downloadBtn.addEventListener(
    "click", function() {

    const pdfUrl = 'pdf/dbPDF.pdf'; // file Path

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    
    a.click();
     document.body.removeChild(a);
    });

    // contact form validation

    contactForm.addEventListener(
        "submit", 
        function (e) {
        let error = false;

        // Validate each field
        error = validate(e.target.name, "* Please enter your name"); // yaha per hum ek function ko call lga rhe hai ...
        error = validate(e.target.phone, "* Please enter your phone number");
    
        // Validate email format
        if (!validateEmail(e.target.email.value)) {
            e.target.email.nextElementSibling.innerText = "* Please enter a valid email";
            error = true;
        } else {
            e.target.email.nextElementSibling.innerText = "";
        }
    
        // Prevent form submission if there's an error
        if (error) {
            e.preventDefault();
        } else{
            alert("Form submitted successfully!");
            e.preventDefault();
            e.target.name.value = "";
            e.target.phone.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
        }
    });
    
    // Validate email format
    function validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    
    // Validate fields
    function validate(elem, msg) {
        if (elem.value === "") {
            elem.nextElementSibling.innerText = msg;
            return true;
        } else {
            elem.nextElementSibling.innerText = "";
            return false;
        }
    }
    


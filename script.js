
    const navbar = document.getElementById("navbar");
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    const themeToggle = document.getElementById("themeToggle");
    const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");
    const themeToggleText = themeToggle.querySelector(".theme-toggle-text");

        const applyTheme = (theme) => {
            const isDark = theme === "dark";

    document.body.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggleIcon.textContent = isDark ? "☾" : "☀";
    themeToggleText.textContent = isDark ? "Dark" : "Light";

    localStorage.setItem("innovara-theme", theme);
        };

    const savedTheme = localStorage.getItem("innovara-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    applyTheme(savedTheme || preferredTheme);

        themeToggle.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
    applyTheme(currentTheme === "dark" ? "light" : "dark");
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
        navbar.classList.add("shrink");
            } else {
        navbar.classList.remove("shrink");
            }
        });

    const animatedElements = document.querySelectorAll(".fade-up");

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
        }, {
        threshold: 0.15
        });

        animatedElements.forEach((element) => observer.observe(element));

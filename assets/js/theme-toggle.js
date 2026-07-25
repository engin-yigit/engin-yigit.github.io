(function () {
  "use strict";

  const storageKey = "engin-yigit-theme";
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");

  if (!button) {
    return;
  }

  const icon = button.querySelector("i");
  const label = button.querySelector(".theme-toggle-text");

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";

    root.classList.toggle("dark-mode", isDark);
    root.setAttribute("data-theme", theme);

    button.setAttribute(
      "aria-label",
      isDark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"
    );

    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }

    if (label) {
      label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
  }

  applyTheme(getPreferredTheme());

  button.addEventListener("click", function () {
    const nextTheme = root.classList.contains("dark-mode")
      ? "light"
      : "dark";

    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
})();

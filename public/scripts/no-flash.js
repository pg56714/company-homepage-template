// IIFE - To avoid flash of default theme: light
(() => {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === null || JSON.parse(savedDarkMode)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

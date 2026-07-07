// Set theme before paint to avoid flash; persist user choice.
(function () {
  var saved = localStorage.getItem("theme");
  var theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
})();

function toggleTheme() {
  var root = document.documentElement;
  var next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
}

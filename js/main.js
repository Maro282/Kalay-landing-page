const loadingPage = document.querySelector(".loading-page");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadingPage.style.display = "none";
  }, 1000);
});

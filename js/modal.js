document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openWeatherModal");
  const closeBtn = document.getElementById("closeWeatherModal");
  const modal = document.getElementById("weatherModal");

  openBtn.addEventListener("click", () => modal.classList.add("is-active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("is-active"));
});

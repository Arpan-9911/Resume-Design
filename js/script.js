document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.display = "none";
  }, 2000);

  const sections = document.querySelectorAll(".container > div");
  const handleScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight* 0.9;

      if (isVisible) {
        section.classList.add("visible");
        section.classList.remove("hidden");
      }
    });
  };
  sections.forEach((section) => section.classList.add("hidden"));
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

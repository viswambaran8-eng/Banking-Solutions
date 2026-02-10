  document.addEventListener("DOMContentLoaded", () => {
    const aboutTabs = document.querySelectorAll(".about-tab");
    const aboutContents = document.querySelectorAll(".about-desc");

    aboutTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        aboutTabs.forEach((t) => t.classList.remove("active"));
        aboutContents.forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        document
          .getElementById(tab.dataset.tab)
          .classList.add("active");
      });
    });
  });

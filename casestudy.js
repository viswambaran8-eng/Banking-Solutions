      const filterButtons = document.querySelectorAll(".filter-btn");
      const caseItems = document.querySelectorAll(".case-item");

      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          const filter = btn.dataset.filter;

          caseItems.forEach((item) => {
            if (filter === "all" || item.classList.contains(filter)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
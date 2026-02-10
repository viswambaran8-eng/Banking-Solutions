const blogGrid = document.querySelector(".blog-grid");

function loadMoreBlogs() {
  const blogHTML = `
    <!-- Blog 4 -->
    <div class="blog-card" data-aos="fade-up">
      <div class="blog-img">
            <img src="./Assets/woman-sat-with-laptop-paid-with-credit-card-cafe_11zon_11zon.webp" />

      </div>
      <div class="blog-content">
        <span class="blog-tag">Digital Analysis</span>
        <h3>Accelerating Digital Banking Transformation</h3>
        <p>
          Discover how modern banks upgrade legacy systems, improve customer
          journeys, and deliver secure digital-first banking experiences.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 5 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="100">
      <div class="blog-img">
            <img src="./Assets/hand-with-card-laptop_11zon_11zon.webp" />
      </div>
      <div class="blog-content">
        <span class="blog-tag">Automation</span>
        <h3>Intelligent Automation in Banking Operations</h3>
        <p>
          Learn how AI-powered workflows and process automation reduce costs,
          improve compliance, and increase operational efficiency in banks.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 6 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="200">
      <div class="blog-img">
        <img src="./Assets/representation-user-experience-interface-design_11zon_11zon.webp" />
      </div>
      <div class="blog-content">
        <span class="blog-tag">Banking Analytics</span>
        <h3>Using Banking Analytics for Smarter Decisions</h3>
        <p>
          See how real-time data analytics helps financial institutions manage
          risk, personalize services, and drive sustainable growth.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>
  `;

  blogGrid.insertAdjacentHTML("beforeend", blogHTML);

  document.querySelector(".load-more-btn")?.remove();
}

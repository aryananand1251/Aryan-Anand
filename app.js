document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    



    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking outside (on small screens)
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Functionality for all buttons
    // document.querySelector(".hire-me").addEventListener("click", function () {
    //     alert("Thank you for your interest! Please contact me via email.");
    // });

    document.querySelector(".portfolio-btn").addEventListener("click", function () {
        window.location.href = "#portfolio"; // Change to actual portfolio section
    });

    document.querySelector(".resume-btn").addEventListener("click", function () {
        window.location.href = "resume.pdf"; // Change to actual resume file
    });

    document.querySelector(".services-btn").addEventListener("click", function () {
        window.location.href = "#skills"; // Change to actual services section
    });

    document.querySelector(".blog-btn").addEventListener("click", function () {
        window.location.href = "blog.html"; // Change to actual blog section
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");
  const blogContent = document.getElementById("blog-content");

  // If blogContainer exists, we are on the Home Page
  if (blogContainer) {
    // Attach event listeners to existing .read-more links
    document.querySelectorAll(".read-more").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const blogId = this.getAttribute("data-id");
        localStorage.setItem("selectedBlogId", blogId);
        window.location.href = "blogs.html";
      });
    });
  }

  // If blogContent exists, we are on the Blog Details Page
  if (blogContent) {
    const blogId = localStorage.getItem("selectedBlogId");
    const blog = blogs.find(b => b.id == blogId);

    if (blog) {
      blogContent.innerHTML = `
        <img src="${blog.image}" />
        <h1>${blog.title}</h1>
        ${blog.content}
        
      `;
    } else {
      blogContent.innerHTML = "<p>Blog not found.</p>";
    }
  }
});



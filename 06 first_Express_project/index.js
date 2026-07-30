const express = require("express");
const path = require("path");
const blogs = require("./data/blogs");

const app = express();
const PORT = 3000;

// ===== MIDDLEWARE =====

// 1. Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// 2. Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 3. Parse URL-encoded data (for forms)
app.use(express.urlencoded({ extended: true }));

// 4. Parse JSON data
app.use(express.json());

// ===== ROUTES =====

// Homepage - List all blogs
app.get("/", (req, res) => {
  res.render("blogs", {
    blogs: blogs,
    title: "All Blogs",
  });
});

// Single blog page
app.get("/blog/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (blog) {
    res.render("blog", {
      blog: blog,
      title: blog.title,
    });
  } else {
    res.status(404).send("Blog not found!");
  }
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Contact page (example of serving HTML)
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// ===== ERROR HANDLING =====

// 404 - Page not found
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📝 View blogs at http://localhost:${PORT}`);
});

module.exports = app;

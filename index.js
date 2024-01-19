import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/achievement", (req, res) => {
  res.render("achievement.ejs");
});

app.get("/admission", (req, res) => {
  res.render("admission.ejs");
});

app.get("/event", (req, res) => {
  res.render("event.ejs");
});

app.get("/faculty", (req, res) => {
  res.render("faculty.ejs");
});

app.get("/fees", (req, res) => {
  res.render("fees.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/internship", (req, res) => {
  res.render("internship.ejs");
});

app.get("/research", (req, res) => {
  res.render("research.ejs");
});

app.get("/student", (req, res) => {
  res.render("student.ejs");
});

app.get("/department", (req, res) => {
  res.render("department.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
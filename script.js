function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scroll() {
  experience.scrollIntoView({ behavior: "smooth" });
}

function scroll2() {
  projects.scrollIntoView({ behavior: "smooth" });
}
function scroll3() {
  con.scrollIntoView({ behavior: "smooth" });
}
function scroll4() {
  about.scrollIntoView({behavior: 'smooth'})
}

const experience = document.querySelector(".section__text__p1");

const exp = document.querySelector("#exp");

const abouts = document.querySelector('#abouts');
const about = document.querySelector('#about')
const projects = document.querySelector("#projects");
const project = document.querySelector("#project");
const contact = document.querySelector("#contacts");
const con = document.querySelector("con");

exp.addEventListener("click", scroll);
project.addEventListener("click", scroll2);
contact.addEventListener("click", scroll3);
abouts.addEventListener('click', scroll4)

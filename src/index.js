import "./style.css";
import { createHomeScreen } from "./home.js";
import { createAboutScreen } from "./about.js";
import { createMenuScreen } from "./menu.js";

createHomeScreen();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
  createHomeScreen();
});

menuBtn.addEventListener("click", () => {
  createMenuScreen();
});

aboutBtn.addEventListener("click", () => {
  createAboutScreen();
});

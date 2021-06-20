import { load } from "./load";
import { reset } from "./reset";
import { menu } from "./menu";
import { home } from "./home";
import { contact } from "./contact";

load();

const content = document.getElementById("content");
const menuTab = document.getElementById("Menu");
const homeTab = document.getElementById("Home");
const contactTab = document.getElementById("Contact");

menuTab.addEventListener("click", () => {
  reset();
  content.append(menu);
});

homeTab.addEventListener("click", () => {
  reset();
  content.append(home);
});

contactTab.addEventListener("click", () => {
  reset();
  content.append(contact);
});

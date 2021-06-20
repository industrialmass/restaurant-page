import { makeNavItem } from "./navItem";

const navbar = (() => {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const navList = document.createElement("ul");
  navList.classList.add("navbar__list");
  navList.appendChild(makeNavItem("Home"));
  navList.appendChild(makeNavItem("Menu"));
  navList.appendChild(makeNavItem("Contact"));

  nav.appendChild(navList);
  return nav;
})();

export { navbar };

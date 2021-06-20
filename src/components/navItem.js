import { reset } from "../reset";

const makeNavItem = (text) => {
  const navItem = document.createElement("li");
  if (text) {
    navItem.textContent = text;
    navItem.id = text;
  }
  navItem.classList.add("navbar__item");
  return navItem;
};

export { makeNavItem };

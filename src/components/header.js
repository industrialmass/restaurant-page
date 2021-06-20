import { navbar } from "./navbar";

const header = (() => {
  const head = document.createElement("header");
  const headline = document.createElement("h1");
  headline.textContent = "Mondale's Lounge & Eatery";

  head.appendChild(headline);
  head.appendChild(navbar);

  head.classList.add("header");
  return head;
})();

export { header };

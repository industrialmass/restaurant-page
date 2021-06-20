import { makeText } from "./text";

const bigbox = (page) => {
  const section = document.createElement("section");
  section.classList.add("box");
  section.id = "main";
  if (page === "Home") {
    const image = document.createElement("img");
    image.setAttribute("src", "./images/chef.png");
    section.appendChild(makeText("San Diego's favorite restaurant"));
    section.appendChild(makeText("Serving the community since 1994"));
    section.appendChild(image);
    section.appendChild(makeText("Contact us today!"));
  }
  return section;
};

export { bigbox };

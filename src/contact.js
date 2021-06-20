import { bigbox } from "./components/bigbox";

const contact = (() => {
  const contactElement = bigbox("contact");
  const phone = document.createElement("h2");
  const email = document.createElement("h2");
  phone.textContent = "619 - 666 - 5432";
  email.textContent = "mondales@gmail.com";
  const image = document.createElement("img");
  image.setAttribute("src", "./images/map-large.png");
  image.setAttribute(
    "srcset",
    "./images/map-verysmall.png 210w, ./images/map-small.png 369w, ./images/map-medium.png 535w, ./images/map-large.png 969w"
  );
  image.setAttribute(
    "sizes",
    "(max-width: 400px) 210px, (max-width: 600px) 369px, (max-width: 800px) 535px, 969px"
  );
  contactElement.append(phone, email, image);

  return contactElement;
})();

export { contact };

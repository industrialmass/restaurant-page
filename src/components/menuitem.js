const makeMenuItem = (title, imageURL, text) => {
  const box = document.createElement("div");
  const headline = document.createElement("h2");
  headline.textContent = title;

  const image = document.createElement("img");
  image.setAttribute("src", imageURL);

  const description = document.createElement("p");
  description.textContent = text;

  box.append(headline, image, description);
  box.classList.add("menu-item");
  return box;
};

export { makeMenuItem };

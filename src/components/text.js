const makeText = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

export { makeText };

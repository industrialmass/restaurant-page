const reset = () => {
  console.log("Hello!");
  const main = document.getElementById("main");
  if (main) main.remove();
};

export { reset };

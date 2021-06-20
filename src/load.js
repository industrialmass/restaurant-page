import { header } from "./components/header";
import { home } from "./home";

const load = () => {
  const content = document.getElementById("content");

  content.append(header, home);
};

export { load };

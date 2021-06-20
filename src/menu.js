import { makeMenuItem } from "./components/menuitem";
import { bigbox } from "./components/bigbox";

const menu = (() => {
  const menuItems = [];
  menuItems.push(
    makeMenuItem(
      "Beef Burger",
      "../images/icons8-beef-burger-64.png",
      "A classic American-style burger made with authentic beef"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Chinese Fried Rice",
      "../images/icons8-chinese-fried-rice-64.png",
      "Fried rice served with a blend of five spices with complementary soy sauce"
    )
  );
  menuItems.push(
    makeMenuItem(
      "French Fries",
      "../images/icons8-french-fries-64.png",
      "A generous helping of French Fries made with 100% potatoes"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Hot Dog",
      "../images/icons8-hot-dog-64.png",
      "A Kosher beef hot dog grilled to order"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Sushi",
      "../images/icons8-sushi-64.png",
      "Sushi made with fresh, never-frozen fish"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Egg & Me Sandwich",
      "../images/icons8-sandwich-with-fried-egg-64.png",
      "A sunny-side-up egg sandwiched between two slices of fresh artisanal bread"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Watermelon",
      "../images/icons8-watermelon-64.png",
      "A freshly picked watermelon grown in the restaurant garden"
    )
  );
  menuItems.push(
    makeMenuItem(
      "Wine and Grapes",
      "../images/icons8-wine-and-grapes-64.png",
      "The dream of every country"
    )
  );

  const menuElement = bigbox("menu");
  menuElement.classList.add("menu");
  menuItems.forEach((element) => {
    menuElement.append(element);
  });

  return menuElement;
})();

export { menu };

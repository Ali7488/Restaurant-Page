function createMenuScreen() {
  const homeText = document.createElement("p");
  homeText.classList.add("menu");
  homeText.textContent = "My amazing restuarants Menu page";

  const container = document.getElementById("content");
  container.replaceChildren(homeText);
}

export { createMenuScreen };

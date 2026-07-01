function createAboutScreen() {
  const homeText = document.createElement("p");
  homeText.classList.add("about");
  homeText.textContent = "My amazing restuarants about page";

  const container = document.getElementById("content");
  container.replaceChildren(homeText);
}

export { createAboutScreen };

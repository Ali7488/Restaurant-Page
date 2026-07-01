function createHomeScreen() {
  const homeText = document.createElement("p");
  homeText.classList.add("home");
  homeText.textContent = "My amazing restuarants home page";

  const container = document.getElementById("content");
  container.replaceChildren(homeText);
}

export { createHomeScreen };

function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poemExample");

  new Typewriter("#poemExample", {
    strings: [
      "Whose woods these are I think I know. His house is in the village though; He will not see me stopping here; To watch his woods fill up with snow.",
    ],
    autoStart: true,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poemExample", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ef5e3f47e22310b3ote67924e5d5ea4b";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions below. Do not include a title to the poem. Include a Signature with '- ai generated -' in a <strong> Element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poemExample");
  poemElement.innerHTML = `Generating poem about ${instructionsInput.value} for you`;

  console.log("Generating poem");
  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

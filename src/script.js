function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 35,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic-input");
  let apiKey = "o974f949a162ca8at386ecd74f5bc0de";
  let prompt = `Topic: Generate a quote about ${topicInput.value}`;
  let context =
    "You are an inspirational AI assistant who loves to share motivational quotes.Share a single quote in basic HTML taking into account topic submitted. Generate a new quote each time. Please do NOT repeat a quote. Sign at the bottom of the quote with the name of the origin in <strong> and <em>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="spin">⌛</div> Generating quote on ${topicInput.value}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

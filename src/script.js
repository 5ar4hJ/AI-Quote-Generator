function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "Books give a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    autoStart: true,
    cursor: null,
    delay: 35,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

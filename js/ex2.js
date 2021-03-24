// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

const CountryElement = document.querySelector("input");
const SuggestionElement = document.getElementById("suggestions");

// Create suggestions for user
const CreateSuggestionElement = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;

// Click on a suggestion
  element.addEventListener("click", e => {

// Change input to suggested country
    CountryElement.value = e.target.textContent;

// Get rid of suggestions
    SuggestionElement.innerHTML = "";
  });
  return element;
};

// Change input
CountryElement.addEventListener("input", () => {

// Get rid of suggestions
  SuggestionElement.innerHTML = "";

  countryList.forEach(country => {

// Verify the user input matches the start of the country
    if (country.startsWith(CountryElement.value)) {

// Add in country as suggestion
      SuggestionElement.appendChild(CreateSuggestionElement(country));
    }
  });
});
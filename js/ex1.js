// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };
  
// Add in <option> tag
const OptionTag = (text, value) => {
    const element = document.createElement("option");
    element.extContent = text;
    element.value = value;
    return element;
  };
  
  // Add in <li> tag
  const addLiElement = text => {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
  };
  
  const HouseElement = document.querySelector("select");
  
  // Fill in the info of house list
  houses.forEach(house => {
    HouseElement.appendChild(OptionTag(house.name, house.code));
  });
  
  // Change the house
  HouseElement.addEventListener("change", e => {
   
    const characters = getCharacters(e.target.value);
    const CharacterElement = document.getElementById("characters");

    // Empty the list
    CharacterElement.innerHTML = "";

    // Show complete list
    characters.forEach(character => {
      CharacterElement.appendChild(addLiElement(character));
    });
  });
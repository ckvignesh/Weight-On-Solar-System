// SET THE PLANETS ARRAY OF OBJECTS

const planets = [
  {
    name: "Mercury",
    surfaceGravity: 0.38,
    imageURL: "images/mercury.png",
  },
  {
    name: "Venus",
    surfaceGravity: 0.91,
    imageURL: "images/venus.png",
  },
  {
    name: "Earth",
    surfaceGravity: 1.0,
    imageURL: "images/earth.png",
  },
  {
    name: "Moon",
    surfaceGravity: 0.17,
    imageURL: "images/moon.png",
  },
  {
    name: "Mars",
    surfaceGravity: 0.38,
    imageURL: "images/mars.png",
  },
  {
    name: "Jupiter",
    surfaceGravity: 2.53,
    imageURL: "images/jupiter.png",
  },
  {
    name: "Saturn",
    surfaceGravity: 1.07,
    imageURL: "images/saturn.png",
  },
  {
    name: "Uranus",
    surfaceGravity: 0.89,
    imageURL: "images/uranus.png",
  },
  {
    name: "Neptune",
    surfaceGravity: 1.14,
    imageURL: "images/neptune.png",
  },
  {
    name: "Pluto",
    surfaceGravity: 0.06,
    imageURL: "images/pluto.png",
  },
];

//FUNCTION CONVERTING THE WEIGHT ON DIFFERENT WORLDS

let finalConvertedWeight;

const convertedWeight = (kg, planetSurfaceGravity) => {
  return (finalConvertedWeight = Math.round(kg * planetSurfaceGravity));
};

//THE INTERACTION UPON CLICKING THE BUTTON
let button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  //details inputted
  let inputFeedback = document.querySelector(".input-feedback");
  let massInKilogram = document.querySelector("#mass").value;
  let selectedPlanet = document.querySelector("#selected-planet");

  //weight-generated template
  let yourWeightIs = document.querySelector(".your-weight-is");
  let convertedWeightText = document.querySelector(".converted-weight");
  let weightUnit = document.querySelector(".unit");
  let planetImage = document.querySelector(".planet-image");
  let weightOutputContainer = document.querySelector(
    ".weight-output-container"
  );
  weightOutputContainer.style.position = "absolute";
  let flexItemDescription = document.querySelector(".flex-item-description");

  //check if weight is given or not

  let weightIsNotFilledOut = false;

  if (massInKilogram === "") {
    weightIsNotFilledOut = true;
  }

  // check if weight is a number or not

  if (isNaN(massInKilogram)) {
    weightIsNotFilledOut = true;
  }

  if (weightIsNotFilledOut === false) {
    if (
      selectedPlanet.selectedIndex === -1 ||
      selectedPlanet.selectedIndex === 0
    ) {
      yourWeightIs.innerHTML = "";
      convertedWeightText.innerHTML = "";
      weightUnit.innerHTML = "";
      inputFeedback.innerHTML = `You haven't chosen the planet yet`;
      inputFeedback.style.color = "white";
      inputFeedback.style.fontSize = "14px";
      inputFeedback.style.backgroundColor = "hsla(0, 87%, 59%, 0.44)";
      inputFeedback.style.padding = "0.5em";
    } else if (selectedPlanet.selectedIndex !== -1) {
      inputFeedback.innerHTML = "";
      inputFeedback.removeAttribute("style");

      //filter the name, surface gravity, and the imageURL
      let weight = parseInt(massInKilogram);
      let chosenPlanet = selectedPlanet.value;
      let selectedPlanetObject = planets.find(
        (planet) => planet.name === chosenPlanet
      );

      let surfaceGravityOfTheSelectedPlanet =
        selectedPlanetObject.surfaceGravity;
      let imageURLOfTheSelectedPlanet = selectedPlanetObject.imageURL;
      planetImage.src = imageURLOfTheSelectedPlanet;
      planetImage.style.marginTop = "2rem";

      if (chosenPlanet === "Saturn") {
        planetImage.style.width = "100%";
      } else {
        planetImage.style.width = "100%";
      }

      const mediaQuery440px = window.matchMedia("(min-width: 440px)");

      if (mediaQuery440px.matches) {
        flexItemDescription.style.marginTop = "-4rem";
      }

      const mediaQuery900px = window.matchMedia("(min-width: 900px)");

      if (mediaQuery900px.matches) {
        flexItemDescription.style.display = "absolute";
        flexItemDescription.style.padding = "5px";
      }

      yourWeightIs.innerHTML = "Your <br> weight is";
      yourWeightIs.style.textTransform = "uppercase";
      yourWeightIs.style.color = "#d0d9e1";
      yourWeightIs.style.fontSize = "20px";
      yourWeightIs.style.fontFamily = "Oswald";
      yourWeightIs.style.letterSpacing = "2px";
      yourWeightIs.style.fontWeight = "600";
      yourWeightIs.style.textAlign = "right";
      yourWeightIs.style.marginTop = "-20rem";

      convertedWeightText.innerHTML = convertedWeight(
        weight,
        surfaceGravityOfTheSelectedPlanet
      );
      convertedWeightText.style.fontFamily = "Bebas Neue";
      convertedWeightText.style.fontSize = "70px";
      convertedWeightText.style.fontWeight = "600";
      convertedWeightText.style.color = "white";
      convertedWeightText.style.textAlign = "right";
      convertedWeightText.style.marginTop = "-1.25rem";
      convertedWeightText.style.marginRight = "1.75rem";
      weightUnit.innerHTML = "kg";
      weightUnit.style.fontFamily = "Oswald";
      weightUnit.style.fontSize = "25px";
      weightUnit.style.color = "white";
      weightUnit.style.textAlign = "right";
      weightUnit.style.marginTop = "-9rem";
    }
  }

  //If weight is not given, provide user a feedback

  if (weightIsNotFilledOut === true) {
    if (isNaN(massInKilogram)) {
      yourWeightIs.innerHTML = "";
      convertedWeightText.innerHTML = "";
      weightUnit.innerHTML = "";
      inputFeedback.innerHTML = `Please enter number values`;
      inputFeedback.style.color = "white";
      inputFeedback.style.fontSize = "14px";
      inputFeedback.style.backgroundColor = "hsla(0, 87%, 59%, 0.44)";
      inputFeedback.style.padding = "0.5em";
    } else if (
      selectedPlanet.selectedIndex === -1 ||
      selectedPlanet.selectedIndex === 0
    ) {
      yourWeightIs.innerHTML = "";
      convertedWeightText.innerHTML = "";
      weightUnit.innerHTML = "";
      inputFeedback.innerHTML = `You haven't filled out the needed information yet`;
      inputFeedback.style.color = "white";
      inputFeedback.style.fontSize = "14px";
      inputFeedback.style.backgroundColor = "hsla(0, 87%, 59%, 0.44)";
      inputFeedback.style.padding = "0.5em";
    } else if (
      selectedPlanet.selectedIndex !== -1 ||
      selectedPlanet.selectedIndex !== "0"
    ) {
      yourWeightIs.innerHTML = "";
      convertedWeightText.innerHTML = "";
      weightUnit.innerHTML = "";
      inputFeedback.innerHTML = "Your weight is required";
      inputFeedback.style.color = "white";
      inputFeedback.style.fontSize = "14px";
      inputFeedback.style.backgroundColor = "hsla(0, 87%, 59%, 0.44)";
      inputFeedback.style.padding = "0.5em";
    }
  }
});

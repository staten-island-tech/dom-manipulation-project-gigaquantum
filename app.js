const DOMSelectors = {
  info: {
    brand: document.getElementById("brand"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    owners: document.getElementById("owners"),
    milesDriven: document.getElementById("miles-driven"),
  },
  reset: document.getElementById("reset"),
  submit: document.getElementById("submit"),
  inputFields: document.querySelectorAll(".input"),
  resultArea: document.querySelector(".results"),
};

function resetInputs(inputArray) {
  inputArray.forEach((element) => {
    element.value = "";
  });
}

function displayResults(resultArray) {
  resultArray.for;
}

function getInfo(fetchedInfo) {
  const infoObj = {
    brand: { name: fetchedInfo.brand.name, info: fetchedInfo.brand.value },
    brand: { name: fetchedInfo.model.name, info: fetchedInfo.model.value },
    year: { name: fetchedInfo.year.name, info: fetchedInfo.year.value },
    owners: { name: fetchedInfo.owners.name, info: fetchedInfo.owners.value },
    milesDriven: {
      name: fetchedInfo.milesDriven.name,
      info: fetchedInfo.milesDriven.value,
    },
  };
  for (const [key, value] of Object.entries(infoObj)) {
    console.log(`${key}: ${value}`);
  }
}

DOMSelectors.reset.addEventListener("click", function () {
  resetInputs(DOMSelectors.inputFields);
});

/* DOMSelectors.submit.addEventListener("click", function () {
  console.log(
    `${DOMSelectors.info.model.name}: ${DOMSelectors.info.model.value}`
  );
}); */

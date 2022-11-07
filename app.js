const DOMSelectors = {
  info: {
    brand: document.getElementById("brand"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    imgURL: document.getElementById("img-url"),
  },
  reset: document.getElementById("reset"),
  submit: document.getElementById("submit"),
  inputFields: document.querySelectorAll(".input"),
  resultArea: document.querySelector(".result-bin"),
};

function resetInputs(inputArray) {
  inputArray.forEach((element) => {
    element.value = "";
  });
}

function addResultElement([brand, model, year, url]) {
  DOMSelectors.resultArea.insertAdjacentHTML(
    "beforeend",
    `
    
    `
  );
}

/* function displayResults(resultArray) {
  resultArray.entries.forEach();
} */

function getInfo(fetchedInfo) {
  const infoObj = {
    brand: fetchedInfo.brand.value,
    model: fetchedInfo.model.value,
    year: fetchedInfo.year.value,
    imgURL: fetchedInfo.imgURL.value,
  };
  console.log(Object.values(infoObj));
  Object.entries(infoObj).forEach((entry) => {
    console.log(entry[1]);
  });
}

DOMSelectors.reset.addEventListener("click", function () {
  resetInputs(DOMSelectors.inputFields);
});

DOMSelectors.submit.addEventListener("click", function () {
  /* console.log(
    `${DOMSelectors.info.model.name}: ${DOMSelectors.info.model.value}`
  ); */
  getInfo(DOMSelectors.info);
});

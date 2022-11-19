const DOMSelectors = {
  info: {
    brand: document.getElementById("brand"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    imgURL: document.getElementById("img-url"),
  },
  reset: document.getElementById("reset"),
  submit: document.getElementById("submit"),
  remove: document.querySelectorAll(".remove-btn"),
  inputFields: document.querySelectorAll(".input"),
  resultArea: document.querySelector(".result-bin"),
  resultCard: document.querySelectorAll(".result-card"),
};

function resetInputs(inputArray) {
  inputArray.forEach((element) => {
    element.value = "";
  });
}

function removeCard(cardSelector) {
  cardSelector.parentElement.remove();
}

function addCard(brand, model, year, imgURL) {
  DOMSelectors.resultArea.insertAdjacentHTML(
    "beforeend",
    `
    <div class="result-card">
        <img
          class="result-img"
          src="${imgURL}"
          alt="Error: Invalid URL"
        />
        <p class="card-text">${year} ${brand} ${model}</p>
        <p class="remove-btn" type="button">Remove</p>
      </div>
    `
  );
}

// Adds event listeners for the all of the remove buttons
function addRemoveListener(btnSelector) {
  btnSelector.forEach((element) => {
    element.addEventListener("click", function () {
      removeCard(element);
    });
  });
}

DOMSelectors.reset.addEventListener("click", function () {
  resetInputs(DOMSelectors.inputFields);
});

DOMSelectors.submit.addEventListener("click", function () {
  addCard(
    DOMSelectors.info.brand.value,
    DOMSelectors.info.model.value,
    DOMSelectors.info.year.value,
    DOMSelectors.info.imgURL.value
  );
  addRemoveListener(document.querySelectorAll(".remove-btn"));
  resetInputs(DOMSelectors.inputFields);
});

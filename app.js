let cardNum = 0;
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

function addCard(brand, model, year, imgURL) {
  cardNum++;
  DOMSelectors.resultArea.insertAdjacentHTML(
    "beforeend",
    `
    <div class="result-card" id="card-${cardNum}">
        <img
          class="result-img"
          src="${imgURL}"
          alt="Error: Invalid URL"
        />
        <p class="card-text">${year} ${brand} ${model}</p>
        <p class="remove-btn" id="btn-${cardNum}" type="button">Remove</p>
      </div>
    `
  );
}

function removeCard(event) {
  document.getElementById(event.target).remove();
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
  resetInputs(DOMSelectors.inputFields);
});

document.addEventListener("click", (element) => {
  if (element.target.matches(".remove-btn")) {
    document.getElementById(`card-${element.target.id.charAt(4)}`).remove();
  }
});

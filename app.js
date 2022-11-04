const DOMSelectors = {
  brand: document.getElementById("brand"),
  model: document.getElementById("model"),
  year: document.getElementById("year"),
  owners: document.getElementById("owners"),
  milesDriven: document.getElementById("miles-driven"),
  reset: document.getElementById("reset"),
  submit: document.getElementById("submit"),
  inputFields: document.querySelectorAll(".input"),
};

console.log(DOMSelectors.inputFields)

function resetInputs(inputArray) {
  inputArray.forEach(element => {
    element.value = "";
    console.log(element)
  });
}

function 

DOMSelectors.reset.addEventListener("click", function() {
  resetInputs(DOMSelectors.inputFields);
});
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
};

console.log(DOMSelectors.inputFields);

function resetInputs(inputArray) {
  inputArray.forEach((element) => {
    element.value = "";
  });
}

function resetResults() {
  // Work in progress
}

/* function getInfo(fetchedInfo) {
  const infoObj = fetchedInfo.value;
  console.log(infoObj);
} */

DOMSelectors.reset.addEventListener("click", function () {
  resetInputs(DOMSelectors.inputFields);
});

DOMSelectors.submit.addEventListener("click", function () {
  getInfo(DOMSelectors.inputFields);
});

/* Trying to make a function to gather any inputs
const obj = {
  name: "Jean-Luc Picard",
  rank: "Captain",
};

let objTwo = {};

// Prints "name Jean-Luc Picard" followed by "rank Captain"
Object.entries(obj).forEach((entry) => {
  objTwo.(`${entry[0]}`) = (`${entry[1]}`);
  console.log(entry[0]);
}); */

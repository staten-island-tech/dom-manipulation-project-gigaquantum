const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
};

console.log(DOMSelectors.button);
console.log(DOMSelectors.text);

const btn = DOMSelectors.button;
function abc() {
  alert("Hello!");
  console.log("HI");
}

btn.addEventListener("click", abc());

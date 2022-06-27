//IMPORT MARKUP
import { light, moderate, serious } from "./markups/markups.js";

//SELECTORS
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const results = document.querySelector("#results");
const result = document.querySelector("#result");

//SCROLL OPTIONS
const scrollOptions = { behavior: "smooth", block: "start" };

//FUNCTIONS
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function addElement(total) {
  const result = document.createElement("div");
  result.id = "result";
  result.innerHTML = total;
  return result;
}

function removeChild() {
  if (results.hasChildNodes()) {
    results.removeChild(results.children[0]);
  }
}

function appendChild(result) {
  results.appendChild(result);
}

function scroll() {
  results.scrollIntoView(scrollOptions);
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  ///////////////////////
  ///////////////////////
  //NO INPUT FROM USER

  if (isEmpty(formProps)) {
    //CREATE ELEMENT
    const result = addElement(light);

    //REMOVE PREV ELEMENT
    removeChild();

    //ADD NEW ELEMENT
    appendChild(result);

    //SCROLL
    scroll();

    //ADD TO LOCAL STORAGE
    localStorage.setItem("tsResults", 0);
  } else {
    ///////////////////////
    //////////////////////

    //USER INPUTS 3 OR LESS

    switch (true) {
      case Object.keys(formProps).length <= 3:
        //CREATE ELEMENT
        const result = addElement(moderate);

        //REMOVE PREV ELEMENT
        removeChild();

        //ADD NEW ELEMENT
        appendChild(result);

        //SCROLL
        scroll();

        localStorage.setItem("tsResults", JSON.stringify(formProps));
        break;
      ///////////////////////
      ///////////////////////

      //USER INPUTS MORE THAN 3

      case Object.keys(formProps).length > 3:
        //CREATE ELEMENT
        const resultS = addElement(serious);

        //REMOVE PREV ELEMENT
        removeChild();

        //ADD NEW ELEMENT
        appendChild(resultS);

        //SCROLL
        scroll();

        localStorage.setItem("tsResults", JSON.stringify(formProps));
        break;
    }
  }
}

form.addEventListener("submit", handleSubmit);

import { light, moderate, serious } from "./markups/markups.js";
const form = document.querySelector("form");
const main = document.querySelector("#main");
const results = document.querySelector("#results");
const scrollOptions = { behavior: "smooth", block: "start" };

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  if (isEmpty(formProps)) {
    console.log("NOTHING");
    results.insertAdjacentHTML("beforeend", light);
    results.scrollIntoView(scrollOptions);
  } else {
    switch (true) {
      case Object.keys(formProps).length <= 3:
        console.log("SOME");
        results.insertAdjacentHTML("beforeend", moderate);
        results.scrollIntoView(scrollOptions);
        break;
      case Object.keys(formProps).length > 3:
        console.log("HIGH");
        results.insertAdjacentHTML("beforeend", serious);
        results.scrollIntoView(scrollOptions);
        break;
    }

    console.log(formProps);
  }
}

form.addEventListener("submit", handleSubmit);

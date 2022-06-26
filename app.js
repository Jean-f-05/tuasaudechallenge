import { light, moderate, serious } from "./markups/markups.js";
const form = document.querySelector("form");
const main = document.querySelector("#main");

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  if (isEmpty(formProps)) {
    console.log("NOTHING");
    main.insertAdjacentHTML("beforeend", light);
  } else {
    switch (true) {
      case Object.keys(formProps).length <= 3:
        console.log("SOME");
        main.insertAdjacentHTML("beforeend", moderate);
        break;
      case Object.keys(formProps).length > 3:
        console.log("HIGH");
        main.insertAdjacentHTML("beforeend", serious);
        break;
    }

    console.log(formProps);
    console.log(light);
  }
}

form.addEventListener("submit", handleSubmit);

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

  const scrollOptions = { behavior: "smooth", block: "end" };

  if (isEmpty(formProps)) {
    console.log("NOTHING");
    main.insertAdjacentHTML("beforeend", light);
    main.scrollIntoView(scrollOptions);
  } else {
    switch (true) {
      case Object.keys(formProps).length <= 3:
        console.log("SOME");
        main.insertAdjacentHTML("beforeend", moderate);
        main.scrollIntoView(scrollOptions);
        break;
      case Object.keys(formProps).length > 3:
        console.log("HIGH");
        main.insertAdjacentHTML("beforeend", serious);
        main.scrollIntoView(scrollOptions);
        break;
    }

    console.log(formProps);
  }
}

form.addEventListener("submit", handleSubmit);

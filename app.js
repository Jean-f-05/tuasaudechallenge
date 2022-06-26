const form = document.querySelector("form");

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  if (isEmpty(formProps)) {
    console.log("NOTHING");
  } else {
    switch (true) {
      case Object.keys(formProps).length <= 3:
        console.log("SOME");
        break;
      case Object.keys(formProps).length > 3:
        console.log("HIGH");
        break;
    }

    console.log(formProps);
  }
}

form.addEventListener("submit", handleSubmit);

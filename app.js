const form = document.querySelector("form");

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  if (isEmpty(formProps)) {
    console.log("EMPTY FORM");
  } else {
    // console.log("PLEASE CONTINUE");

    console.log(formProps);
  }
}

form.addEventListener("submit", handleSubmit);

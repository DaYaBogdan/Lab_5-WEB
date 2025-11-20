const integerPattern = /^-?\d+$/;

function check(str, pattern) {
  return pattern.test(str);
}

function errorElement(element) {
  element.classList.add("error");

  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("error");
    },
    {once: true}
  );
}

$(document).ready(function prepareForm() {
  const secondAnswer = document.getElementById("secondAnswer");

  $("form").submit(function (event) {
    if (!check(secondAnswer.value, integerPattern)) {
      errorElement(secondAnswer);
      event.preventDefault();
    }
  });
});

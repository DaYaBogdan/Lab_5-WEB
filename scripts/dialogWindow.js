$(document).ready(function dialogWindow() {
  const dialogWindow = dialogWindowCreate();
  $("form").on("reset", function (e) {
    $(dialogWindow).show();

    $(continue_button).click(function () {
      $(dialogWindow).hide();
    });

    $(cancel_button).click(function () {
      $(dialogWindow).hide();
    });
  });
});

function dialogWindowCreate() {
  const back = document.createElement("div");
  back.classList.add("background");

  document.body.appendChild(back);

  const window = document.createElement("div");
  window.classList.add("dialog-window");

  const text = document.createElement("h1");
  text.style = "text-align: center; color: white; margin: 40px 20px ";
  text.textContent = "Вы подтверждаете свой выбор?";

  const buttonBlock = document.createElement("div");
  const button_yes = document.createElement("button");
  const button_no = document.createElement("button");
  buttonBlock.classList.add("dialogButtons");
  button_yes.style = "background-color: green";
  button_no.style = "background-color: red";
  button_yes.id = "continue_button";
  button_no.id = "cancel_button";

  const text_button_yes = document.createElement("h2");
  const text_button_no = document.createElement("h2");
  text_button_no.textContent = "No";
  text_button_yes.textContent = "Yes";

  button_yes.appendChild(text_button_yes);
  button_no.appendChild(text_button_no);
  buttonBlock.appendChild(button_yes);
  buttonBlock.appendChild(button_no);
  window.appendChild(buttonBlock);
  window.appendChild(text);
  back.appendChild(window);

  $(back).hide();

  return back;
}

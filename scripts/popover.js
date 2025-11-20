const tips = new Map([
  ["FIO", "Введите свою Фамилию Имя Отчество. Они должны быть разделены пробелами. В них не должно быть знаков."],
  ["email", "Введите свой email. Напоминание, но email не может быть без @ и домена (.com, .ru и т.д)"],
  ["message", "Введите своё сообщение. Можете слать многое, но троллям по рукам настучим. Главное чтобы сообщение не содержало 0 символов"],
  ["phone", "Введите свой телефон. Телефон должен начинаться с +7 или +3 и иметь в себе от 9 до 11 символов"],
]);

$(document).ready(function popover() {
  popoverTextarea = document.createElement("div");
  popoverTextarea.classList.add("popover");
  document.body.appendChild(popoverTextarea);

  popoverText = document.createElement("h4");
  popoverText.textContent = "testText";
  popoverTextarea.appendChild(popoverText);

  $(popoverText).css({
    margin: 10,
  });

  $(".text").mouseenter(function () {
    var position = $(this).offset();
    $(popoverTextarea).css({
      left: position.left - 40,
      top: position.top + 55,
    });
    popoverText.textContent = tips.get(this.name);
    $(popoverTextarea).show(400);
  });

  $(".text").mouseleave(function () {
    $(popoverTextarea).hide(400);
  });

  $(popoverTextarea).hide();
});

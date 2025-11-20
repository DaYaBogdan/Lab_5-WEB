const monthsTimer = new Map([
  [0, "Января"],
  [1, "Февраля"],
  [2, "Марта"],
  [3, "Апреля"],
  [4, "Мая"],
  [5, "Июня"],
  [6, "Июля"],
  [7, "Августа"],
  [8, "Сентября"],
  [9, "Октября"],
  [10, "Ноября"],
  [11, "Декабря"],
]);

function createMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function () {
      dropdownContent.classList.toggle("active");
    });

    // Закрываем меню при клике вне его
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        dropdownContent.classList.remove("active");
      }
    });

    dateUpdate();
    setInterval(dateUpdate, 1000);
  });
}

function dateUpdate() {
  const newDate = new Date();
  const data = newDate.getDate() + " ";
  const month = monthsTimer.get(newDate.getMonth()) + " ";
  const year = (newDate.getFullYear() % 100) + " ";
  document.getElementById("date").textContent = data + month + year;
}

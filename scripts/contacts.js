const daysHeaders = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const fromWhatYear = 1970;

const FIOPattern = /^[А-ЯЁа-яёA-Za-z]+ [А-ЯЁа-яёA-Za-z]+ [А-ЯЁа-яёA-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^\+(7|3)\d{9,11}$/;

let errorFlag = 1;

function check(pattern, name) {
  if (FIOPattern.test(pattern) && name == "FIO") return true;
  else if (emailPattern.test(pattern) && name == "email") return true;
  else if (numberPattern.test(pattern) && name == "phone") return true;
  else if (pattern.length != 0 && name == "message") return true;
  else if (pattern != 0 && name == "sex") return true;
  return false;
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

function acceptElement(element) {
  element.classList.add("accept");

  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("accept");
    },
    {once: true}
  );
}

function createListeners() {
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focusout", () => {
      if (!check(input.value, input.name)) {
        errorElement(input);
        errorFlag = 1;
      } else {
        acceptElement(input);
        errorFlag = 0;
      }
    });
  });
}

function prepareForm() {
  document.querySelectorAll("input").forEach((input) => {
    console.log(input.type);
    if (!check(input.value, input.name)) {
      errorElement(input);
      errorFlag = 1;
    }
  });

  if (!errorFlag) {
    document.getElementById("contactForm").requestSubmit();
  }
}

function createCalendar() {
  const birthday = document.getElementById("birthday");
  const calendar = document.getElementById("calendar");
  const calendarHeader = document.createElement("div");
  const calendarGrid = document.createElement("div");

  calendarHeader.classList.add("calendar-header");
  calendarGrid.classList.add("calendar-grid");

  const monthSelector = document.createElement("select");
  const yearSelector = document.createElement("select");

  monthSelector.name = "month";
  yearSelector.name = "year";

  for (var i = 0; i < months.length; i++) {
    const month = document.createElement("option");
    month.textContent = months[i];
    monthSelector.appendChild(month);
  }

  const todayYear = new Date().getFullYear();
  for (var i = fromWhatYear; i < todayYear + 1; i++) {
    const year = document.createElement("option");
    year.textContent = i;
    yearSelector.appendChild(year);
  }

  for (var i = 0; i < daysHeaders.length; i++) {
    const dayHeader = document.createElement("div");
    dayHeader.classList.add("day-header");
    dayHeader.textContent = daysHeaders[i];
    calendarGrid.appendChild(dayHeader);
  }

  for (var i = 1; i < 32; i++) {
    const day = document.createElement("button");
    day.classList.add("day");
    day.textContent = i;
    calendarGrid.appendChild(day);
    day.addEventListener("click", () => {
      birthday.value =
        day.textContent +
        "." +
        monthSelector.options[monthSelector.selectedIndex].value +
        "." +
        yearSelector.options[yearSelector.selectedIndex].value;
    });
  }

  calendarHeader.appendChild(monthSelector);
  calendarHeader.appendChild(yearSelector);

  calendar.appendChild(calendarHeader);
  calendar.appendChild(calendarGrid);
}

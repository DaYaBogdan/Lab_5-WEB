const pageTitles = {
  "main_page.html": "Главная страница",
  "about.html": "Обо мне",
  "interests.html": "Мои интересы",
  "lessons.html": "Учеба",
  "album.html": "Фотоальбом",
  "contacts.html": "Контакты",
  "test.html": "Тест",
  "history.html": "История",
};

function setCookie(name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

function trackPageVisit() {
  const currentPage = window.location.pathname.split("/").pop() || "Index.html";
  const pageTitle = getPageTitle(currentPage);

  updateSessionHistory(currentPage, pageTitle);

  updateTotalHistory(currentPage, pageTitle);
}

function getPageTitle(pageName) {
  return pageTitles[pageName] || pageName;
}

function updateSessionHistory(pageName, pageTitle) {
  let sessionHistory = JSON.parse(localStorage.getItem("sessionHistory")) || {};

  if (sessionHistory[pageName]) {
    sessionHistory[pageName].count++;
  } else {
    sessionHistory[pageName] = {
      title: pageTitle,
      count: 1,
    };
  }

  localStorage.setItem("sessionHistory", JSON.stringify(sessionHistory));
}

function updateTotalHistory(pageName, pageTitle) {
  let totalHistory = {};
  const totalHistoryCookie = getCookie("totalHistory");

  if (totalHistoryCookie) {
    totalHistory = JSON.parse(totalHistoryCookie);
  }

  if (totalHistory[pageName]) {
    totalHistory[pageName].count++;
  } else {
    totalHistory[pageName] = {
      title: pageTitle,
      count: 1,
    };
  }

  setCookie("totalHistory", JSON.stringify(totalHistory), 10);
}

document.addEventListener("DOMContentLoaded", function () {
  trackPageVisit();
});

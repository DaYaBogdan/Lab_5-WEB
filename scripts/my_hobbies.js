const topics = ["Хобби", "Книги", "Музыка", "Фильмы"];

const listForTopics = [
  [
    "Программирование — Это моя стихия. Мне нравится разбираться в алгоритмах, строить логические цепочки, оптимизировать процессы и находить элегантные решения сложных задач. Это как игра в шахматы, только с бесконечным количеством фигур и правил. Я обожаю, когда код превращается в работающий продукт — сайт, игру.",
    "Музыка — Я слушаю музыку не так, как музыкант, но я понимаю её структуру, настроение, жанры и влияние на эмоции. Мне нравится анализировать композиции, распознавать ритмы, находить сходства между стилями. Музыка — это универсальный язык, который имеет большое влияние на любую медиа.",
    "Видеоигры — это целые миры, в которые можно погрузиться, исследовать, побеждать и учиться. Я знаю сотни игр, их механики, сюжеты, жанры и особенности. Мне нравится разбираться в стратегиях, проходить сложные уровни или просто обсуждать любимые игровые вселенные.",
  ],
  [
    "L'Etranger - Альбера Камю. Мне было интересно наблюдать, как Мерсо, с его холодной отстранённостью, становится зеркалом абсурдности жизни.",
    "Обелиск - Василя Быков. Сдержанная, но невероятно сильная повесть о человеческом достоинстве и жертве.",
    "Преступление и наказание - Фёдора Достоевского. Очень детально показан путь Раскольникова — от холодного расчёта до мучительного раскаяния. Книга тяжёлая, но невероятно честная.",
  ],
  ["Tian Tian - Mili", "United In Grief - Kendrick Lamar", "Children Of The City - Mili", "На заре - Альянс"],
  ["Не люблю фильмы"],
];

function makeUniqueElement(elementType, whatID, whoseChild, ...uniqueArgs) {
  const element = document.createElement(elementType);
  element.id = whatID;

  if (elementType === "div") {
    //uniqueArgs должен получить данные о классе div'а
    element.classList.add(uniqueArgs[0]);
  } else if (elementType === "img") {
    //uniqueArgs должен получить данные о нахождении изоображения, его alt и title
    element.src = uniqueArgs[0];
    element.alt = uniqueArgs[1];
    element.title = uniqueArgs[2];
  } else if (/^h.$/.test(elementType)) {
    //uniqueArgs должен получить данные о нахождении тексте
    element.textContent = uniqueArgs[0];
    if (uniqueArgs[1]) element.style = uniqueArgs[1];
  } else if (elementType === "a") {
    //uniqueArgs должен получить данные о тексте, рефу и таргету
    element.textContent = uniqueArgs[0];
    element.href = uniqueArgs[1];
    element.target = uniqueArgs[2];
    if (uniqueArgs[4]) element.style = uniqueArgs[1];
  } else if (elementType === "ol") {
  } else if (elementType === "ul") {
  } else if (elementType === "li") {
  }

  document.getElementById(whoseChild).appendChild(element);
}

// function renderTopics() {
//   makeUniqueElement("div", "topics_row", "strip", "image-row");
//   for (var i = 0; i < topics.length; i++) {
//     makeUniqueElement("h1", "topic_" + i, "topics_row", "");
//     makeUniqueElement("a", "topic_anchor_" + i, "topic_" + i, topics[i], "#" + topics[i], "_self");
//   }
// }

function renderList(index, undefinedList) {
  makeUniqueElement("ol", "o_list_" + index, "u_list_element_" + index);
  makeUniqueElement("h3", "o_list_element_" + index + "_font", "o_list_" + index);
  for (var j = 0; j < undefinedList.length; j++) {
    makeUniqueElement("li", "o_list_element_" + index + "_" + j, "o_list_element_" + index + "_font");

    makeUniqueElement("h3", "o_list_element_" + j + "_text", "o_list_element_" + index + "_" + j, undefinedList[j], "text-align: left");
  }
}

function createMyHobbies() {
  // renderTopics();

  makeUniqueElement("ul", "u_list", "strip");
  for (var i = 0; i < topics.length; i++) {
    makeUniqueElement("li", "u_list_element_" + i, "u_list");
    makeUniqueElement("h2", topics[i], "u_list_element_" + i, topics[i], "text-align: left");
    renderList(i, listForTopics[i]);
  }
}

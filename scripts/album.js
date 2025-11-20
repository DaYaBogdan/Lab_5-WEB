const rowLength = 4;
const imagesLength = 15;

listOfNames = [
  "Mak",
  "Sebastian Schuster",
  "Yuri Krupenin",
  "Tomasz Brengos",
  "Alissa Schilling",
  "Shana Van Roosbroek",
  "Evgeni Tcherkasski",
  "Jonas Degener",
  "Leongsan",
  "Jonny Gios",
  "Christian Cueni",
  "Emma Swoboda",
  "Leongsan",
  "Clay Banks",
  "Louis Droege",
];

listOfReferences = [
  "https://unsplash.com/@mak_jp",
  "https://unsplash.com/@sebby88",
  "https://unsplash.com/@cubeofwood",
  "https://unsplash.com/@iwashis",
  "https://unsplash.com/@alissaschh",
  "https://unsplash.com/@shanavaro",
  "https://unsplash.com/@evgenit",
  "https://unsplash.com/@jonasdegener",
  "https://unsplash.com/@leongsan",
  "https://unsplash.com/@supergios",
  "https://unsplash.com/@chrigu",
  "https://unsplash.com/@emmakphoto",
  "https://unsplash.com/@leongsan",
  "https://unsplash.com/@claybanks",
  "https://unsplash.com/@lois184",
];

function prepareBigImage() {
  let indexImg;
  // Бэк + имг запилил
  bigImgBack = document.createElement("div");
  bigImgBack.classList.add("background");
  document.body.appendChild(bigImgBack);

  bigImg = document.createElement("img");
  bigImgBack.appendChild(bigImg);

  // Кнопки для переходов @$# запилил
  buttonLeft = document.createElement("button");
  buttonRight = document.createElement("button");

  statistic = document.createElement("h2");
  buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttons");

  bigImgBack.appendChild(buttonContainer);
  buttonContainer.appendChild(buttonLeft);
  buttonContainer.appendChild(statistic);
  buttonContainer.appendChild(buttonRight);

  buttonLeft.textContent = "<-";
  buttonRight.textContent = "->";

  // Закрытие как-то организовал
  buttonClose = document.createElement("button");
  buttonClose.classList.add("close-button");
  bigImgBack.appendChild(buttonClose);
  buttonClose.textContent = "x";

  // Всё это спрятал
  $(".background").hide();

  let coolAndPerfectLength = $(".image-row img").length - 1;

  // Ну и листенеры повесил
  $(".image-row img").click(function () {
    $(bigImg).attr({
      src: this.src,
    });
    indexImg = $(".image-row img").index(this);
    statistic.textContent = `${indexImg} / ${coolAndPerfectLength}`;
    $(bigImgBack).show();
  });

  $(buttonRight).click(function () {
    indexImg++;
    if (indexImg > coolAndPerfectLength) indexImg = 0;
    statistic.textContent = `${indexImg} / ${coolAndPerfectLength}`;
    $(bigImg).attr({
      src: $(".image-row img").get(indexImg).src,
    });
  });

  $(buttonLeft).click(function () {
    indexImg--;
    if (indexImg < 0) indexImg = coolAndPerfectLength;
    statistic.textContent = `${indexImg} / ${coolAndPerfectLength}`;
    $(bigImg).attr({
      src: $(".image-row img").get(indexImg).src,
    });
  });

  $(buttonClose).click(function () {
    $(bigImgBack).hide();
  });
}

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
  } else if (elementType === "a") {
    //uniqueArgs должен получить данные о тексте, рефу и таргету
    element.textContent = uniqueArgs[0];
    element.href = uniqueArgs[1];
    element.target = uniqueArgs[2];
  }

  document.getElementById(whoseChild).appendChild(element);

  return element;
}

function renderAlbum() {
  for (var i = 0; i < imagesLength / rowLength; i++) {
    makeUniqueElement("div", "row_" + i, "strip", "image-row");

    for (let j = i * rowLength; j < (i + 1) * rowLength && j < imagesLength; j++) {
      makeUniqueElement("div", "block_" + j, "row_" + i, "image-block");

      //Установка изображения
      const element = makeUniqueElement(
        "img",
        "img_" + j,
        "block_" + j,
        "../images/album/album_" + (j + 1) + ".jpg",
        "Фото принадлежит " + listOfNames[j] + " с Unsplash",
        "Фото принадлежит " + listOfNames[j] + " с Unsplash"
      );

      //Далее текст под изображением
      makeUniqueElement("h3", "text_" + j + ".1", "block_" + j, "Фото ");

      makeUniqueElement("a", "anchor_" + j, "text_" + j + ".1", listOfNames[j], listOfReferences[j], "_blank");

      makeUniqueElement("h3", "text_" + j + ".2", "block_" + j, " с Unsplash");
    }
  }

  prepareBigImage();
}

const choreographersCols = document.querySelectorAll(".choreographers__col");
const choreographersColBlocks = document.querySelectorAll(
  ".choreographers__col__block"
);
const directionsColVideo = document.querySelectorAll(
  ".directions__col__video__link"
);
const directionsColName = document.querySelectorAll(".directions__col__name");
const tableNone = document.querySelectorAll(".tableNone");
const showTable = document.getElementById("showTable");
const burger = document.querySelector("#burger");
const menu = document.querySelector(".nav");
const fone = document.querySelector(".fone");
const fone2 = document.querySelector(".fone2");
const header = document.querySelector(".header");

function danceHover() {
  for (let i = 0; i < directionsColVideo.length; i++) {
    directionsColVideo[i].addEventListener("mouseover", function () {
      directionsColVideo[i].classList.add("hover");
      directionsColName[i].classList.add("textShadow");
    });
    directionsColVideo[i].addEventListener("mouseout", function () {
      directionsColVideo[i].classList.remove("hover");
      directionsColName[i].classList.remove("textShadow");
    });
  }
}
danceHover();

function boxShadow() {
  for (let i = 0; i < choreographersColBlocks.length; i++) {
    choreographersColBlocks[i].addEventListener("mouseover", function () {
      choreographersCols[i].style.boxShadow =
        "19px 8px 37px 1px rgba(97, 5, 153, 0.6)";
    });
    choreographersColBlocks[i].addEventListener("mouseout", function () {
      choreographersCols[i].style.boxShadow = "none";
    });
  }
}

boxShadow();

function showTableHomePage() {
  const initialText = "Показать полностью";
  for (let i = 0; i < tableNone.length; i++) {
    showTable.addEventListener("click", function () {
      if (tableNone[i].classList.toggle("tableNone")) {
        showTable.innerHTML = initialText;
      } else {
        showTable.innerHTML = "Вернуть";
      }
    });
  }
}
showTableHomePage();

// бургер
function showburgerMenu() {
  burger.addEventListener("click", function () {
    menu.classList.toggle("show");
    fone.classList.toggle("show");
    fone2.classList.toggle("show");
  });
}
showburgerMenu();

//================================================================
const btnChors = document.querySelectorAll(".choreographers__col__area__btn");
for (let i = 0; i < btnChors.length; i++) {
  const btnChor = btnChors[i];
}
//================================================================

let computedStyle;
const modalHeader = document.querySelectorAll(".modalHeader, .modalLessonDancePrice");
modalHeader.forEach(function(element){
  element.style.display = "none";
  computedStyle = window.getComputedStyle(element);
})


document.querySelectorAll("button[data-modal]").forEach(function (button) {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    if (modal && computedStyle.display === "none") {
      modal.classList.add("modal-open");
      // document.querySelector("body").style.overflow = "hidden";
    }
    if (computedStyle.display !== "none") {
      document.querySelector("body").style.overflow = "scroll";
    }
  });
});



// ВАЛИДАЦИЯ ФОРМЫ
// Функция для валидации формы по указанному селектору
const validateForm = (formSelector) => {
  // Получаем элемент формы по селектору
  const formElement = document.querySelector(formSelector);

  // Опции валидации для каждого поля ввода
  const validationOptions = [
    {
      attribute: "required", // Требуемый атрибут
      isValid: (input) => input.value.trim() !== "", // Функция для проверки валидности значения поля ввода
    },
  ];

  // Функция для валидации одной группы формы
  const validateSingleGroup = (formGroup) => {
    // Находим поле ввода внутри группы
    const input = formGroup.querySelector("input");

    let formGroupError = false; // Флаг для отслеживания ошибок в группе формы

    // Проходимся по опциям валидации
    for (const option of validationOptions) {
      // Проверяем, есть ли у поля ввода указанный атрибут и соответствует ли его значение условиям валидации
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        input.classList.add("error"); // Добавляем класс ошибки к полю ввода
        input.classList.remove("success"); // Удаляем класс успешного заполнения поля ввода
        formGroupError = true; // Устанавливаем флаг ошибки в группе формы
      }
    }
    // Если ошибок в группе формы не обнаружено
    if (!formGroupError) {
      input.classList.add("success"); // Добавляем класс успешного заполнения поля ввода
      input.classList.remove("error"); // Удаляем класс ошибки у поля ввода
    }
  };

  // Отключаем стандартную HTML5 валидацию формы
  formElement.setAttribute("novalidate", "");

  // Функция для валидации всех групп формы
  const validateAllFormGroups = (formToValidate) => {
    // Находим все группы формы с классами .formGroup или .formGroupHeader
    const formGroups = Array.from(
      formToValidate.querySelectorAll(".formGroup, .formGroupHeader, .formModalLessonDance, .formModalLessonDancePrice")
    );

    // Проходимся по всем найденным группам и валидируем их
    formGroups.forEach((formGroup) => {
      validateSingleGroup(formGroup);
    });
  };

  // Добавляем обработчик события submit для формы
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    validateAllFormGroups(formElement); // Вызываем функцию валидации всех групп формы
  });
};

// Вызываем функцию валидации для формы с id "formIndex"
validateForm("#formIndex");

// Вызываем функцию валидации для формы с id "modalHeader__form"
validateForm("#modalHeader__form");

// Вызываем функцию валидации для формы с id "modalHeader__form"
validateForm("#modalLessonDance__form");
// Вызываем функцию валидации для формы с id "modalLessonDancePrice"
validateForm("#modalLessonDancePrice__form");
// =================================================================

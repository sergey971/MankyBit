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

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    //   el: '.swiper-scrollbar',
  },
});

// ====
const btnChors = document.querySelectorAll(".choreographers__col__area__btn");
for (let i = 0; i < btnChors.length; i++) {
  const btnChor = btnChors[i];
  
}

  // =============
  // function openModal(dialogId) {
  //   const myDialog = document.getElementById(dialogId);
  //   myDialog.showModal();
  //   document.body.classList.add('modal-open');
  // }
  
  // function closeModal(dialogId) {
  //   const myDialog = document.getElementById(dialogId);
  //   myDialog.close();
  //   document.body.classList.remove('modal-open');
  // }

  document.addEventListener("DOMContentLoaded", function () {
    // это то модальное окно, с которым и будем работать
    const modal = document.querySelector("#myModal");
    // назначаем обработчик события для клика по кнопке открытия окна
    document.querySelector("#myBtn").addEventListener("click", openModal);
    /*
     * Обработчик события клика по кнопке открытия модального окна
     */
    function openModal() {
      modal.classList.add("modal-open");
      // обработчики событий, которые работают, когда окно открыто
      attachModalEvents();
    }
    function attachModalEvents() {
      // закрывать модальное окно при нажатии на крестик
      modal.querySelector(".close").addEventListener("click", closeModal);
      // закрывать модальное окно при нажатии клавиши Escape
      document.addEventListener("keydown", handleEscape);
      // закрывать модальное окно при клике вне контента модального окна
      document.addEventListener("click", handleOutside);
    }
    function closeModal() {
      modal.classList.remove(".modal-open");
      // окно закрыто, эти обработчики событий больше не нужны
      detachModalEvents();
    }
    function detachModalEvents() {
      modal.querySelector(".close").removeEventListener(".click", closeModal);
      document.removeEventListener("keydown", handleEscape);
      modal.removeEventListener("click", handleOutside);
    }
    /*
     * Функция закрывает модальное окно при нажатии клавиши Escape
     */
    function handleEscape(event) {
      if (event.key === "escape") {
        closeModal();
      }
    }
    /*
     * Функция закрывает модальное окно при клике вне контента модального окна
     */
    function handleOutside(){
      const isClickInside = !!event.target.closest('.modal__content');
      if(!isClickInside){
          closeModal();
      }
    }
  });
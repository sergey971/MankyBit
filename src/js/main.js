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
// Воспроизведение видео в слайдере
function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = parseMediaURL(media);

  video.addEventListener("click", () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  // Устанавливаем ширину и высоту iframe
  iframe.style.width = "100%";
  iframe.style.height = "430px";
  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

findVideos();
// ====
const btnChor = document.querySelectorAll(".choreographers__col__area__btn");
for (let i = 0; i < btnChor.length; i++) {
  const element = btnChor[i];
  console.log(element);
}

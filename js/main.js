const choreographersCols = document.querySelectorAll('.choreographers__col');
const choreographersColBlocks = document.querySelectorAll('.choreographers__col__block');
const directionsColVideo = document.querySelectorAll('.directions__col__video__link');
const directionsColName = document.querySelectorAll('.directions__col__name');
const tableNone = document.querySelectorAll('.tableNone');
const showTable = document.getElementById('showTable');
const burger = document.querySelector('#burger');
const menu = document.querySelector('.nav');
const fone = document.querySelector('.fone');
const header = document.querySelector('.header');

function danceHover() {
    for (let i = 0; i < directionsColVideo.length; i++) {
        directionsColVideo[i].addEventListener('mouseover', function () {
            directionsColVideo[i].classList.add('hover');
            directionsColName[i].classList.add('textShadow');
        });
        directionsColVideo[i].addEventListener('mouseout', function () {
            directionsColVideo[i].classList.remove('hover');
            directionsColName[i].classList.remove('textShadow');
        });
    }

}
danceHover();

function boxShadow() {
    for (let i = 0; i < choreographersColBlocks.length; i++) {
        choreographersColBlocks[i].addEventListener('mouseover', function () {
            choreographersCols[i].style.boxShadow = '19px 8px 37px 1px rgba(97, 5, 153, 0.6)';
        })
        choreographersColBlocks[i].addEventListener('mouseout', function () {
            choreographersCols[i].style.boxShadow = 'none';
        })
    }
}

boxShadow();

function showTableHomePage() {
    const initialText = 'Показать полностью';
    for (let i = 0; i < tableNone.length; i++) {
        showTable.addEventListener('click', function () {
            if(tableNone[i].classList.toggle('tableNone')){
                showTable.innerHTML = initialText;
            }
            else{
                showTable.innerHTML = 'Вернуть';
            }
        });
    };

}
showTableHomePage()

// бургер
function showburgerMenu() {
    burger.addEventListener("click", function () {
        menu.classList.toggle('show');
        fone.classList.toggle('show');
    });

}
showburgerMenu();

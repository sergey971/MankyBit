const sortingButton = document.querySelector(".sorting__button");
const sortingList = document.querySelector(".sorting__list");
const choreographItems = document.querySelectorAll(".choreographers__col");
const dropdownInputHidden = document.querySelector(".dropdown__input__hidden");

let dataButton = sortingButton.getAttribute("data-btn");

// Обработчик события клика для кнопки сортировки
sortingButton.addEventListener("click", function () {
    sortingList.classList.toggle("active");
});

// Функция для обработки события клика на элементе списка
function handleItemClick(event) {
    // event.target -> Проверяет на какое элемент был произведен клик
    if (event.target.tagName !== "LI") return; // проверяем, что клик был именно по элементу LI
    let dataValue = event.target.getAttribute("data-value");
    sortingButton.textContent = dataValue;
 
    sortingList.classList.remove("active");

    if (dataValue === sortingButton.textContent) {
        // сохраняем элемент на котором был произведен клик
        let saveItem = event.target;
        // Удаляем кликнутый элемент из списка
        event.target.remove();
        sortingList.appendChild(saveItem);

        // Удаление класса "color" у всех элементов и добавление его к текущему элементу
        sortingList.querySelectorAll('.sorting__list__item').forEach(function (i) {
            i.classList.remove("color");
        });
        event.target.classList.add("color");
    }
    choreographItems.forEach(function(chore) {
        chore.style.display = "block";
        dataChore =  chore.getAttribute("data-value");
        if(dataChore === dataValue){
            chore.style.display = "none";
        }
    });
}
function sortChore(){

}
// Привязка обработчика событий к родительскому элементу списка
sortingList.addEventListener("click", handleItemClick);

// Изначальная проверка и создание элемента "Все", если его нет в списке
if (!sortingList.querySelector('.sorting__list__item[data-value="all"]')) {
    const allItem = document.createElement("li");
    allItem.className = "sorting__list__item";
    allItem.setAttribute("data-value", "Все");
    allItem.textContent = "Все";

    sortingList.appendChild(allItem);
}



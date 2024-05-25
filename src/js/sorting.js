const sortingButton = document.querySelector(".sorting__button");
const sortingList = document.querySelector(".sorting__list");
const sortingListItem = document.querySelectorAll(".sorting__list__item");
const choreographItem = document.querySelectorAll(".choreographers__col");

sortingButton.addEventListener("click", function () {
    sortingList.classList.toggle("active");

})

function getData() {
    sortingListItem.forEach(function (item) {
        let dataVelue = item.getAttribute("data-value");
        item.addEventListener("click", function () {
            sortingButton.innerText = dataVelue;
            let textInSortingButton = sortingButton.textContent;
            sortingList.classList.remove("active");
            if (dataVelue == textInSortingButton) {
                let saveItem = item;
                item.remove();
                sortingList.appendChild(saveItem)
                // Добавление класса для выделения (опционально)
                sortingListItem.forEach(function (i) {
                    i.classList.remove("color");

                });
                item.classList.add("color");
                if (sortingList.classList.contains("all")) {
                    allItem.remove();

                }
                if (!sortingList.querySelector('.sorting__list__item[data-value="all"]')) {
                    const allItem = document.createElement("li");
                    allItem.className = "sorting__list__item";
                    allItem.setAttribute("data-value", "all");
                    allItem.textContent = "Все";
                    sortingList.appendChild(allItem);
                }

            }

        });

    });

}

getData();





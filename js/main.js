const choreographersCols = document.querySelectorAll('.choreographers__col');
const choreographersColBlocks = document.querySelectorAll('.choreographers__col__block');
const directionsColVideo = document.querySelectorAll('.directions__col__video');
const directionsColName = document.querySelectorAll('.directions__col__name');

function danceHover() {
    for (let i = 0; i < directionsColVideo.length; i++) {
        directionsColVideo[i].addEventListener('mouseover', function(){
            directionsColVideo[i].classList.add('hover');
            directionsColName[i].classList.add('textShadow');
        });
        directionsColVideo[i].addEventListener('mouseout', function(){
            directionsColVideo[i].classList.remove('hover');
            directionsColName[i].classList.remove('textShadow');

        });
    }

}
danceHover();

function boxShadow() {
    for (let i = 0; i < choreographersColBlocks.length; i++) {
        choreographersColBlocks[i].addEventListener('mouseover', function() {
            choreographersCols[i].style.boxShadow = '19px 8px 37px 1px rgba(97, 5, 153, 0.6)';
            choreographersColArea[i].style.color = 'red';
        })
        choreographersColBlocks[i].addEventListener('mouseout', function(){
            choreographersCols[i].style.boxShadow = 'none';
        })
    }
}

boxShadow();

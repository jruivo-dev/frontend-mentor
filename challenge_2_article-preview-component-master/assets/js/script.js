let shareBtn = document.querySelector('.share-btn');
let popup = document.querySelector('.popup');


console.log(shareBtn);
console.log(popup);


let isPopupOpen = false;

shareBtn.addEventListener('click', () => {


    if (isPopupOpen) {
        popup.classList.add('hide');
    } else {
        popup.classList.remove('hide');
    }
    isPopupOpen=!isPopupOpen;
})


